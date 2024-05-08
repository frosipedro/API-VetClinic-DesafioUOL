const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()

// Aceitar formatos pelo Postman - urlencoded e JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// Importar e usar as rotas
const tutorRoutes = require('./routes/tutorRoutes')
const petRoutes = require('./routes/petRoutes')

app.use('', tutorRoutes)
app.use('', petRoutes)

// Inicia o servidor
const port = process.env.db_port

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
