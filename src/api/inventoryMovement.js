const { Transaction } = require('sequelize')
const ServiceInventoryMoviment = require('../service/inventoryMovement')

class ApiInventoryMovement {
    async FindById(req, res) {
        try {
            const { id, inventoryId } = req.params
            const inventoryMovement = await ServiceInventoryMoviment.FindById(inventoryId, id)

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async FindAll(req, res) {
        try {
            const { inventoryId } = req.params
            const inventoryMovement = await ServiceInventoryMoviment.FindAll(inventoryId)

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Create(req, res) {
        try {
            const userId = req.session.id
            const { inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = await ServiceInventoryMoviment.Create(
                inventoryId, userId, type, amount, productId
            )

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Update(req, res) {
        try {
            const { id, inventoryId } = req.params
            const { type, amount} = req.body
            const inventoryMovement = await ServiceInventoryMoviment.Update(
                inventoryId, userId, type, amount
            )

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
    async Delete(req, res) {
        try {
            const { id, inventoryId } = req.params
            const inventoryMovement = await ServiceInventoryMoviment.Delete(inventoryId, id)

            res.status(200).send({ inventoryMovement })
        } catch (error) {
            res.status(500).send({ msg: error.message })

        }
    }
}

module.exports = new ApiInventoryMovement()