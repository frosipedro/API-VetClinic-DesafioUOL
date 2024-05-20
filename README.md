# Projeto Vet Clinic

Este projeto é uma aplicação de gerenciamento de clínicas veterinárias. Ela permite o cadastro de tutores e pets, bem como operações relacionadas, como criação, atualização e remoção.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Uso da API](#uso-da-api)
- [Contribuições](#contribuições)
- [Licença](#licença)
- [Modelos de Requisição JSON](#modelos-de-requisição-json)

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/) para clonar o projeto
- Para manuseio ou acompanhamento do banco de dados, pode ser usado o "DB Browser for SQLite"

## Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/frosipedro/ProjetoVetClinic-1DesafioUOL
    cd ProjetoVetClinic
    ```

2. Instale as dependências necessárias usando o Node.js:
    ```bash
    npm install
    ```

## Configuração

- **Banco de dados**:
    - Crie um arquivo novo, chamado `.env`, e copie os dados do arquivo `env.example` para ele. Após isso, configure as variáveis.

## Execução

- **Iniciar o servidor**:
    - Para iniciar o servidor, use o seguinte comando, dentro da pasta `ProjetoVetClinic-1DesafioUOL`:
    	```bash
    	npm run start
    	```

## Uso da API

A API segue o padrão REST. Aqui estão algumas rotas básicas que você pode usar:

- `GET /tutors`: Lista todos os tutores.
- `POST /tutor`: Cria um novo tutor.
- `PUT /tutor/:id`: Atualiza um tutor existente.
- `DELETE /tutor/:id`: Deleta um tutor.
- `POST /pet/:tutorId`: Cria um pet e o associa a um tutor.
- `PUT /pet/:petId/tutor/:tutorId`: Atualiza a informação de um pet.
- `DELETE /pet/:petId/tutor/:tutorId`: Remove um pet de um tutor.

Um exemplo de requisição PUT do Pet, seria: `http://localhost:3000/pet/3/tutor/2`

## Modelos de Requisição JSON

Com os seguintes modelos, é possível realizar a requisição POST ou PUT com o body na opção `'raw'`. O código aceita também no modelo `'x-www-form-urlencoded'`.

1. Modelo para o Tutor:
    ```bash
    {
	"name": "Xxxxx",
	"phone": "+xxxxxxxxxxxxx",
	"email": "xxxx@xxx.xxx.xx",
	"date_of_birth": "YYYY/MM/DD XX:XX",
	"zip_code": "xxxxxxx"
    }
    ```

2. Modelo para o Pet:
    ```bash
    {
	"name": "Xxxxx",
	"species": "Xxxxx",
	"carry": "X",
	"weight": x.x,
	"date_of_birth": "YYYY/MM/DD XX:XX",
	"tutorId": ""
    }
    ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

