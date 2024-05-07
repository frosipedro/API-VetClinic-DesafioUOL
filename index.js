const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// Importar e usar as rotas
const tutorRoutes = require('./routes/tutorRoutes')
const petRoutes = require('./routes/petRoutes')

app.use('/tutor', tutorRoutes)
app.use('/pet', petRoutes)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
