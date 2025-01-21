const ModelUser = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const organization = require('../model/organization')

const roles = ['admin', 'employee']
const salt = 12
const secretKey = "MeuSegredoForte"

class ServiceUser {
    async FindAll(organizationId, transaction) {
        return ModelUser.findAll({ where: { organizationId } }, { transaction })
    }
    async FindById(organizationId, id, transaction) {
        return ModelUser.findOne({ where: { organizationId, id } }, { transaction })
    }
    async Create(organizationId, name, email, password, role, transaction) {
        if (!organizationId) {
            throw new Error('Favor informar a organização!')
        }
        if (!name) {
            throw new Error('Favor informar a name!')
        }
        if (!email) {
            throw new Error('Favor informar a email!')
        }
        if (!password) {
            throw new Error('Favor informar a password!')
        }
        if (!role || !roles.includes(role)) {
            throw new Error('Favor informar a permissão corretamente')
        }

        const hashPass = await bcrypt.hash(password, salt)


        return ModelUser.create({ organizationId, name, email, password: hashPass, role }, { transaction })
    }
    async Update(organizationId, id, name, email, password, role, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction)
        if (!oldUser) {
            throw new Error('Usuario não encontrado!')
        }

        if (role && !roles.includes(role)) {
            throw new Error('Favor informar a permissão corretamente')
        }

        // verificar se é admin
        if (role && oldUser.role === "admin") {
            oldUser.role = role
        }

        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, salt) : oldUser.password

        await oldUser.save({ transaction })

        return oldUser
    }
    async Delete(organizationId, id, transaction) {
        const oldUser = await this.FindById(organizationId, id, transaction)
        if (!oldUser) {
            throw new Error('Usuario não encontrado!')
        }
        oldUser.destroy({ transaction })
        return "Usuario deletado com sucesso!"
    }

    async Login(email, password, transaction) {
        if (!email || !password) {
            throw new Error("Favor informar email e senha")
        }

        const user = await ModelUser.findOne(
            { where: { email } },
            { transaction }
        )
        if (!user) {
            throw new Error("Email ou Senha inválidos")
        }

        const verify = await bcrypt.compare(password, user.password)
        if (verify) {
            return jwt.sign({
                id: user.id,
                role: user.role,
                organizationId: user.organizationId
            }, secretKey, { expiresIn: 60 * 60 })
        }

        throw new Error("Email ou Senha inválidos")
    }

    async Verify(id, role, transaction){
        return ModelUser.findOne(
            { where: {id, role }, transaction }
        )

    }

}

module.exports = new ServiceUser()