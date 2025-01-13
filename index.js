const express = require('express')
const database = require('./database/conexao')




const port = 3000
const app = express()

app.use(express.json())



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


