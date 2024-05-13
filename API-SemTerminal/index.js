// Requires para o projeto
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/database')

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

async function startApp() {
  try {
    await db.authenticate()
    console.log('Conexão com o banco de dados estabelecida com sucesso.')

    await db.sync({ force: false })
    console.log('Tabelas criadas com sucesso!\n\n')
  } catch (error) {
    console.error(
      `Erro ao conectar com o banco de dados ou criar tabelas: ,${error}`
    )
    process.exit(1)
  }
}

// Inicia o aplicativo
startApp()
