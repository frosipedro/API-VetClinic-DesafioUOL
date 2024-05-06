const express = require('express')
const app = express()
const port = 3000

// Importar e usar as rotas
const tutorRoutes = require('./routes/tutorRoutes')
const petRoutes = require('./routes/petRoutes')

app.use('/tutors', tutorRoutes)
app.use('/pets', petRoutes)

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
