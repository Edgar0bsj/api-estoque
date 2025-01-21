const modelInventoryMovement = require('../model/inventoryMovement')
const product = require('../model/product')

const movementTypes = ['out', 'in']

class ServiceInventoryMoviment {
    async FindById(inventoryId, id, transaction) {
        return modelInventoryMovement.findOne(
            { where: { inventoryId, id } },
            { transaction }
        )

    }
    async FindAll(inventoryId, transaction) {
        return modelInventoryMovement.findAll(
            { where: { inventoryId }, include: {model: product} },
            { transaction }
        )
    }
    async Create(inventoryId, userId, type, amount, productId, transaction) {
        if (!inventoryId) {
            throw new Error('Favor informar o campo inventoryId')
        } else if (!userId) {
            throw new Error('Favor informar o campo userId')
        } else if (!type || !movementTypes.includes(type)) {
            throw new Error('Favor informar o campo tipo corretamente')
        } else if (!amount) {
            throw new Error('Favor informar o campo quantidade')
        } else if (!productId) {
            throw new Error('Favor informar o campo produto')
        }

        return modelInventoryMovement.create(
            { inventoryId, userId, type, amount, productId },
            { transaction }
        )

    }
    async Update(inventoryId, id, type, amount, transaction) {
        const oldInventoryMoviment = await this.FindById(inventoryId, id)
        if (!oldInventoryMoviment) {
            throw new Error("Estoque não foi encontrado")
        }
        if (!type || !movementTypes.includes(type)) {
            throw new Error('Favor informar o campo tipo corretamente')
        }
        oldInventoryMoviment.type = type || oldInventoryMoviment.type
        oldInventoryMoviment.amount = amount || oldInventoryMoviment.amount

        return oldInventoryMoviment.save({ transaction })
    }
    async Delete(inventoryId, id, transaction) {
        const oldInventoryMoviment = await this.FindById(inventoryId, id, transaction)
        if (!oldInventoryMoviment) {
            throw new Error("Estoque não foi encontrado")
        }

        await oldInventoryMoviment.destroy({ transaction })
    }
}

module.exports = new ServiceInventoryMoviment()