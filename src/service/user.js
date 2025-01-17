const ModelUser = require('../model/user')
const bcrypt = require('bcrypt')

const roles = ['admin', 'employee']
const salt = 12

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
        oldUser.destroy({transaction})
        return "Usuario deletado com sucesso!"
    }

}

module.exports = new ServiceUser()