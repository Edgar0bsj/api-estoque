const ServiceProduct = require('../service/product')

class ApiProduct {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const products = await ServiceProduct.FindById(organizationId, id)

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const products = await ServiceProduct.FindAll(organizationId)

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, description } = req.body
            const products = await ServiceProduct.Create(organizationId, name, description)

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id } =  req.params
            const { name, description } = req.body
            const products = await ServiceProduct.Update(organizationId, id, name, description)

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const products = await ServiceProduct.Delete(organizationId, id)

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
}

module.exports = new ApiProduct()