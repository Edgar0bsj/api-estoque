const express = require('express')
const ApiInventoryMovement = require ('../api/inventoryMovement')

const inventoryMovementRouter = express.Router()

inventoryMovementRouter.get('/', ApiInventoryMovement.FindAll)
inventoryMovementRouter.get('/:id', ApiInventoryMovement.FindById)
inventoryMovementRouter.post('/', ApiInventoryMovement.Create)
inventoryMovementRouter.put('/:id', ApiInventoryMovement.Update)
inventoryMovementRouter.delete('/:id', ApiInventoryMovement.Delete)

module.exports = inventoryMovementRouter