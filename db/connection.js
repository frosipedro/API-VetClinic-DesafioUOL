// Conexão e debug com o Banco de Dados
const Sequelize = require('sequelize')

const db = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: '.db/database',
})

db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err)
  })

module.exports = db
