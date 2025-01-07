const express = require('express')

const productRouter = express.Router()

productRouter.get('/', () => {})
productRouter.get('/:id', () => {})
productRouter.post('/:id', () => {})
productRouter.put('/:id', () => {})
productRouter.delete('/:id', () => {})

module.exports = productRouter