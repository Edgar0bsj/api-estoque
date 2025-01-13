const express = require('express')

const inventoryMovementRouter = express.Router()

inventoryMovementRouter.get('/', () => {})
inventoryMovementRouter.get('/:id', () => {})
inventoryMovementRouter.post('/', () => {})
inventoryMovementRouter.put('/:id', () => {})
inventoryMovementRouter.delete('/:id', () => {})

module.exports = inventoryMovementRouter