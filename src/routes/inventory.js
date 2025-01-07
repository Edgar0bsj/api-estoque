const express = require('express')

const inventoryRouter = express.Router()

inventoryRouter.get('/', () => {})
inventoryRouter.get('/:id', () => {})
inventoryRouter.post('/:id', () => {})
inventoryRouter.put('/:id', () => {})
inventoryRouter.delete('/:id', () => {})

module.exports = inventoryRouter