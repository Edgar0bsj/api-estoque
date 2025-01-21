const modelInventory = require('../model/inventory')
const inventoryMovement = require('./inventoryMovement')
const getProductMovements = require('../fns/getProductMovements')

class ServiceInventory {
    async FindById(organizationId, id, transaction) {
        const inventory = await modelInventory.findOne(
            { where: { organizationId, id } },
            { transaction }
        )
        if (!inventory) {
            throw new Error('Estoque não encontrado')
        }

        const movements =  await inventoryMovement.FindAll(inventory.id)

        const result = getProductMovements(movements)
        return { ...inventory.dataValues, ...result }

    }
    async FindAll(organizationId, transaction) {
        return modelInventory.findAll(
            { where: { organizationId } },
            { transaction }
        )
    }
    async Create(organizationId, name, transaction) {
        if (!organizationId) {
            throw new Error('Favor informar o campo organizarionId')
        } else if (!name) {
            throw new Error('Favor informar o campo name')
        }

        return modelInventory.create(
            { organizationId, name},
            { transaction }
        )

    }
    async Update(organizationId, id, name, transaction) {
        const oldInventory = await this.FindById(organizationId, id)
        if (!oldInventory) {
            throw new Error("Estoque não foi encontrado")
        }
        oldInventory.name = name || oldInventory.name

        return oldInventory.save({ transaction })
    }
    async Delete(organizationId, id, transaction) {
        const oldInventory = await this.FindById(organizationId, id, transaction)
        if (!oldInventory) {
            throw new Error("Estoque não foi encontrado")
        }

        await oldInventory.destroy({ transaction })
    }
}

module.exports = new ServiceInventory()