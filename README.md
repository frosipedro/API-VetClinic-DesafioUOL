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

## Requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Git](https://git-scm.com/) para clonar o projeto
- Um banco de dados (como [MySQL](https://www.mysql.com/) ou [PostgreSQL](https://www.postgresql.org/)) configurado e em funcionamento

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

1. **Banco de dados**:
    - Certifique-se de que o banco de dados está em execução.
    - Edite o arquivo `.env` para adicionar suas configurações de banco de dados (como `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`).

2. **Outras configurações**:
    - Verifique o arquivo `.env` para outras configurações, como variáveis de ambiente necessárias.

## Execução

1. **Rodar migrações**:
    - Antes de iniciar o servidor, você pode precisar executar migrações de banco de dados para garantir que as tabelas estejam configuradas corretamente.
    ```bash
    npm run migrate
    ```

2. **Iniciar o servidor**:
    - Para iniciar o servidor, use o comando:
    ```bash
    npm start
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

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

