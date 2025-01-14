class ApiInventoryMovement {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {}

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async FindAll(req, res) {
        try {
            const organizationId = 1
            const { inventoryId } = req.params
            const inventoryMovement = [{}]

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const userId = 1
            const { inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = {}

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = {}

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {}

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
}

module.exports = new ApiInventoryMovement()