// Conexão e debug com o Banco de Dados
const Sequelize = require('sequelize')

const db = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'db/database.db',
})

module.exports = db

db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err)
  })

db.sync({ force: false })
  .then(() => {
    console.log('Tabelas criadas com sucesso!')
  })
  .catch((error) => {
    console.error('Erro ao criar tabelas:', error)
  })
