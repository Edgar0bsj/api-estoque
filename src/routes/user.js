const express = require('express')
const ApiUser = require('../api/user')

const userRouter = express.Router()

// opções do usuario por si só
userRouter.get('/info', ApiUser.FindById)
userRouter.put('/', ApiUser.Update)
userRouter.delete('/', ApiUser.Delete)



// apçôes do admin
userRouter.post('/', ApiUser.Create)
userRouter.get('/', ApiUser.FindAll)
userRouter.get('/:id', ApiUser.FindById)
userRouter.put('/:id', ApiUser.Update)
userRouter.delete('/:id', ApiUser.Delete)

module.exports = userRouter