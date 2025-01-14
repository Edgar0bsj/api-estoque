const express = require('express')
const ApiInventoryMovement = require ('../api/inventoryMovement')

const inventoryMovementRouter = express.Router()

inventoryMovementRouter.get('/:inventoryId/', ApiInventoryMovement.FindAll)
inventoryMovementRouter.get('/:inventoryId/:id', ApiInventoryMovement.FindById)
inventoryMovementRouter.post('/:inventoryId/', ApiInventoryMovement.Create)
inventoryMovementRouter.put('/:inventoryId/:id', ApiInventoryMovement.Update)
inventoryMovementRouter.delete('/:inventoryId/:id', ApiInventoryMovement.Delete)

module.exports = inventoryMovementRouter