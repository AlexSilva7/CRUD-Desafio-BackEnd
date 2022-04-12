npm init em vez de yarn init
npm install <módulo> em vez de yarn add <módulo>
npm run <script> em vez de yarn <script>
npx <comando> em vez de yarn <comando>
https://medium.com/@eldes.com/tutorial-aplica%C3%A7%C3%A3o-rest-api-com-node-em-typescript-usando-express-e-sqlite-a4ea6a7c3563

Criar um novo usuario: POST /api/users
Ler todos os usuarios: GET /api/users
Ler um usuario específico: GET /api/users/{cpf}
Atualizar um usuario: PUT /api/users/{cpf}
Apagar um usuario: DELETE /api/users/{cpf}

Recuperar endereco por CEP: GET /api/adress/{cep}

# Requisitos:
## Ferramentas necessárias sistema:
Node.js
Typescript compiler (tsc)
Git

## https://docs.google.com/document/d/1OGZJjt39u8cTwTO59H4_-SLockmTImbzBhpaKKoaouE/edit

## Na pasta do projeto, executar os comandos:
npm init --yes
tsc --init

## Módulos dos types para o Node, e o módulo ts-node:
npm install @types/node typescript
npm install -D ts-node

## Módulos Express e Cors
npm install express
npm install cors
npm install @types/express
npm install @types/cors
npm install -D nodemon

## Para facilitar a rotina de desenvolvimento, adicionar os scripts start, build e dev ao arquivo de configuração do projeto Node, package.json, dentro da propridade scripts:
"scripts": {
    "dev": "nodemon --watch \"src/**\" --ext \"ts,json\" --exec \"ts-node ./src/app.ts\"",
    "build": "tsc",
    "start": "node ./dist/app.js"
},

## Redis
npm install redis