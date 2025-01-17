const ServiceUser = require('../service/user')

class ApiUser {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const users = await ServiceUser.FindById(organizationId, id)

            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const users = await ServiceUser.FindAll(organizationId)

            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = await ServiceUser.Create(organizationId, name, email, password, role)

            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const { id } = req.params
            const user = await ServiceUser.Update(organizationId, id, name, email, password, role)

            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const user = await ServiceUser.Delete(organizationId, id)

            res.status(200).send({ user })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
}

module.exports = new ApiUser()