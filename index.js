const express = require('express')
const database = require('./database/conexao')
const organizationRouter = require('./src/routes/organization')
const userRouter = require('./src/routes/user')
const inventoryRouter = require('./src/routes/inventory')
const movementRouter = require('./src/routes/inventoryMovement')
const productRouter = require('./src/routes/product')
const apiUser = require('./src/api/user')

const port = 3000
const app = express()

app.use(express.json())

app.post('/api/v1/login', apiUser.login)

app.use('/api/v1/organization', organizationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', movementRouter)
app.use('/api/v1/product', productRouter)



database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    })
    .catch((e) => {
        console.error(`Não foi possivel conectar com o banco ${e}`)
    })


