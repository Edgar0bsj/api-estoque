class ApiProduct {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const products = { id }

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const products = [{ organizationId }]

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name, drescription } = req.body
            const products = {}

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id, name, drescription } = req.params
            const products = {}

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const products = {}

            res.status(200).send({ products })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
}

module.exports = new ApiProduct()