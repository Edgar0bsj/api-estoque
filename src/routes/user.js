const express = require('express')

const userRouter = express.Router()

// opções do usuario por si só
userRouter.get('/info', () => {})
userRouter.put('/', () => {})
userRouter.delete('/', () => {})



// apçôes do admin
userRouter.post('/', () => {})
userRouter.get('/', () => {})
userRouter.get('/:id', () => {})
userRouter.put('/:id', () => {})
userRouter.delete('/:id', () => {})

module.exports = userRouter