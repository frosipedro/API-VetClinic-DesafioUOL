// Requires para o projeto
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const inquirer = require('inquirer')
const db = require('./config/database')

require('dotenv').config()

// Aceitar formatos pelo Postman - urlencoded e JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// Importar e usar as rotas
const tutorRoutes = require('./routes/tutorRoutes')
const petRoutes = require('./routes/petRoutes')
const {
  updateTutor,
  getAllTutorsWithPets,
} = require('./controllers/tutorController')

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
  operation()
}

// Inicia o aplicativo
startApp()

// Terminal com Inquirer
function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Listar todos os Tutores',
          'Criar um Tutor',
          'Atualizar os dados de um Tutor',
          'Deletar um Tutor',
          'Criar um Pet e adicionar um Tutor a ele',
          'Atualizar os dados de um Pet',
          'Deletar um Pet de um Tutor',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      let action = answer['action']

      if (action === 'Listar todos os Tutores') {
        getAllTutorsWithPetsTerminal()
      } else if (action === 'Criar um Tutor') {
        createTutorTerminal()
      } else if (action === 'Atualizar os dados de um Tutor') {
        updateTutorTerminal()
      } else if (action === 'Deletar um Tutor') {
        deleteTutorTerminal()
      } else if (action === 'Criar um Pet e adicionar um Tutor a ele') {
        createPetTerminal()
      } else if (action === 'Atualizar os dados de um Pet') {
        updatePetTerminal()
      } else if (action === 'Deletar um Pet de um Tutor') {
        deletePetTerminal()
      } else if (action === 'Sair') {
        console.log(
          chalk.bgBlueBright.black('\nObrigado por usar a VetClinic!\n')
        )
        process.exit()
      }
    })
}

// Retorna ao terminal todos os tutores e pets no Banco de Dados
function getAllTutorsWithPetsTerminal() {
  axios
    .get(`http://localhost:${port}/tutors`)
    .then((response) => {
      console.log(`Resposta da API: ${JSON.stringify(response.data, null, 2)}`)
      console.log('\n\n')
      operation()
    })
    .catch((error) => {
      console.error(`Erro na requisição: ${error}\n\n`)
      operation()
    })
}

// Criar um tutor
function createTutorTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'tutorName',
        message: 'Digite o nome do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorPhone',
        message: 'Digite o telefone do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorEmail',
        message: 'Digite o email do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorDateOfBirth',
        message: 'Digite a data de nascimento do Tutor (ANO-MÊS-DIA):',
      },
      {
        type: 'input',
        name: 'tutorZipCode',
        message: 'Digite o CEP do Tutor:',
      },
    ])
    .then((answers) => {
      let tutorModelJSON = {
        name: `${answers.tutorName}`,
        phone: `${answers.tutorPhone}`,
        email: `${answers.tutorEmail}`,
        date_of_birth: `${answers.tutorDateOfBirth}`,
        zip_code: `${answers.tutorZipCode}`,
      }
      axios
        .post(`http://localhost:${port}/tutor`, tutorModelJSON)
        .then((response) => {
          console.log(`Resposta da API: ${response.data}\n\n`)
          operation()
        })
        .catch((error) => {
          console.error(`Erro na comunicação: ${error}\n\n`)
          operation()
        })
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}

// Atualizar um tutor
function updateTutorTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'number',
        name: 'tutorId',
        message: 'Digite o ID do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorName',
        message: 'Digite o nome do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorPhone',
        message: 'Digite o telefone do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorEmail',
        message: 'Digite o email do Tutor:',
      },
      {
        type: 'input',
        name: 'tutorDateOfBirth',
        message: 'Digite a data de nascimento do Tutor (ANO-MÊS-DIA):',
      },
      {
        type: 'input',
        name: 'tutorZipCode',
        message: 'Digite o CEP do Tutor:',
      },
    ])
    .then((answers) => {
      let tutorModelJSON = {
        name: `${answers.tutorName}`,
        phone: `${answers.tutorPhone}`,
        email: `${answers.tutorEmail}`,
        date_of_birth: `${answers.tutorDateOfBirth}`,
        zip_code: `${answers.tutorZipCode}`,
      }
      axios
        .put(
          `http://localhost:${port}/tutor/${answers.tutorId}`,
          tutorModelJSON
        )
        .then((response) => {
          console.log(`Resposta da API: ${response.data}\n\n`)
          operation()
        })
        .catch((error) => {
          console.error(chalk.bgRed.black(`Erro na comunicação: ${error}\n\n`))
          operation()
        })
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}

// Deleta um tutor
function deleteTutorTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'number',
        name: 'tutorId',
        message: 'Digite a ID do Tutor:',
      },
      {
        type: 'input',
        name: 'confirmation',
        message: 'Tem certeza que deseja prosseguir?',
      },
    ])
    .then((answers) => {
      if (
        answers.confirmation == 'sim' ||
        answers.confirmation == 'Sim' ||
        answers.confirmation == 'SIM'
      ) {
        axios
          .delete(`http://localhost:${port}/tutor/${answers.tutorId}`)
          .then((response) => {
            console.log(`Resposta da API: ${response.data}\n\n`)
            operation()
          })
          .catch((error) => {
            console.error(`Erro na comunicação: ${error}\n\n`)
            operation()
          })
      } else {
        console.log(chalk.bgRed.black('Operação Cancelada\n\n'))
        operation()
      }
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}

// Criar um pet
function createPetTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'petName',
        message: 'Digite o nome do Pet:',
      },
      {
        type: 'input',
        name: 'petSpecies',
        message: 'Digite a espécie do Pet:',
      },
      {
        type: 'input',
        name: 'petCarry',
        message: 'Digite o porte do Pet:',
      },
      {
        type: 'input',
        name: 'petWeight',
        message: 'Digite o peso do Pet:',
      },
      {
        type: 'input',
        name: 'petDateOfBirth',
        message: 'Digite a data de nascimento do Pet (ANO-MÊS-DIA):',
      },
      {
        type: 'number',
        name: 'petTutorId',
        message: 'Digite o ID do Tutor responsável pelo Pet:',
      },
    ])
    .then((answers) => {
      let petModelJSON = {
        name: `${answers.petName}`,
        species: `${answers.petSpecies}`,
        carry: `${answers.petCarry}`,
        weight: `${answers.petWeight}`,
        date_of_birth: `${answers.petDateOfBirth}`,
        tutorId: `${answers.petTutorId}`,
      }
      axios
        .post(
          `http://localhost:${port}/pet/${answers.petTutorId}`,
          petModelJSON
        )
        .then((response) => {
          console.log(`Resposta da API: ${response.data}\n\n`)
          operation()
        })
        .catch((error) => {
          console.error(`Erro na comunicação: ${error}\n\n`)
          operation()
        })
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}

// Criar um pet
function updatePetTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'number',
        name: 'petId',
        message: 'Digite o ID do Pet:',
      },
      {
        type: 'input',
        name: 'petName',
        message: 'Digite o nome do Pet:',
      },
      {
        type: 'input',
        name: 'petSpecies',
        message: 'Digite a espécie do Pet:',
      },
      {
        type: 'input',
        name: 'petCarry',
        message: 'Digite o porte do Pet:',
      },
      {
        type: 'input',
        name: 'petWeight',
        message: 'Digite o peso do Pet:',
      },
      {
        type: 'input',
        name: 'petDateOfBirth',
        message: 'Digite a data de nascimento do Pet (ANO-MÊS-DIA):',
      },
      {
        type: 'number',
        name: 'petTutorId',
        message: 'Digite o ID do Tutor responsável pelo Pet:',
      },
    ])
    .then((answers) => {
      let petModelJSON = {
        name: `${answers.petName}`,
        species: `${answers.petSpecies}`,
        carry: `${answers.petCarry}`,
        weight: `${answers.petWeight}`,
        date_of_birth: `${answers.petDateOfBirth}`,
        tutorId: `${answers.petTutorId}`,
      }
      axios
        .put(
          `http://localhost:${port}/pet/${answers.petId}/tutor/${answers.petTutorId}`,
          petModelJSON
        )
        .then((response) => {
          console.log(`Resposta da API: ${response.data}\n\n`)
          operation()
        })
        .catch((error) => {
          console.error(`Erro na comunicação: ${error}\n\n`)
          operation()
        })
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}

// Deleta um tutor
function deletePetTerminal() {
  console.log(chalk.bgGreen.black('\nDefina as seguintes informações'))

  inquirer
    .prompt([
      {
        type: 'number',
        name: 'petId',
        message: 'Digite a ID do Pet:',
      },
      {
        type: 'number',
        name: 'petTutorId',
        message: 'Digite o ID do Tutor responsável pelo Pet:',
      },
      {
        type: 'input',
        name: 'confirmation',
        message: 'Tem certeza que deseja prosseguir?',
      },
    ])
    .then((answers) => {
      if (
        answers.confirmation == 'sim' ||
        answers.confirmation == 'Sim' ||
        answers.confirmation == 'SIM'
      ) {
        axios
          .delete(
            `http://localhost:${port}/pet/${answers.petId}/tutor/${answers.petTutorId}`
          )
          .then((response) => {
            console.log(`Resposta da API: ${response.data}\n\n`)
            operation()
          })
          .catch((error) => {
            console.error(`Erro na comunicação: ${error}\n\n`)
            operation()
          })
      } else {
        console.log(chalk.bgRed.black('Operação Cancelada\n\n'))
        operation()
      }
    })
    .catch((error) => {
      console.error(`Erro na comunicação: ${error}\n\n`)
      operation()
    })
}
