const express = require('express')
const database = require('./database/database')
const organizationRouter = require('./src/routes/organization')
const userRouter = require('./src/routes/user')
const inventoryRouter = require('./src/routes/inventoryMovement')
const inventoryMovementRouter = require('./src/routes/inventoryMovement')
const productRouter = require('./src/routes/product')


const port = 3000
const app = express()

app.use(express.json())

app.post('api/v1/login',()=> {})

app.use('/api/v1/organization', organizationRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/inventory', inventoryRouter)
app.use('/api/v1/inventoryMovement', inventoryMovementRouter)
app.use('/api/v1/product', productRouter)

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(port, ()=> {
            console.info('Servidor rodando na porta ' + port)
        })
    })
    .catch((e) => {
        console.error(`Não foi possivel conectar com o banco de dados: ${e}`)
    })