
# App desenvolvido em Typescript com NodeJs
## Endpoints
Para acessar todos os Endpoints do app deve se enviar um post na autenticação 
passando um body o seguinte adminFake
{
    user: "Admin",
    password: "DesafioBackEnd"
},
o token gerado deve ser usado no header[x-access-token] da requisição aos outros endpoints 

Autenticação: POST /api/auth

Criar um novo usuario: POST /api/users

Ler todos os usuarios: GET /api/users

Ler um usuario específico: GET /api/users/{cpf}

Atualizar um usuario: PUT /api/users/{cpf}

Apagar um usuario: DELETE /api/users/{cpf}

Recuperar endereco por CEP: GET /api/adress/{cep}



## Para instalar todas as dependencias
npm install


## Para rodar o App
docker-compose up -d (Para subir o Postgres e o Redis)

npm run dev


## Para rodar os Testes
npm run test

# Outras informações:
## Requisitos:
## Ferramentas necessárias sistema:
Docker
Node.js
Typescript compiler (tsc)

## Techs:
npm init --yes
tsc --init
npm install express
npm install cors
npm install @types/express
npm install @types/cors
npm install -D nodemon
npm install @types/node typescript
npm install -D ts-node
npm install redis
npm install pg

"scripts": {
    "dev": "nodemon --watch \"src/**\" --ext \"ts,json\" --exec \"ts-node ./src/app.ts\"",
    "build": "tsc",
    "start": "node ./dist/app.js"
},


