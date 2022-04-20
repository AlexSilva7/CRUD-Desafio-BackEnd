import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'
const db = require('./models/connections/dbConnection');

// Porta do servidor
const PORT = process.env.PORT || 3000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.use('/api', itensRouter)

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})

//Cria a tabela se nao existe
db.query("CREATE TABLE IF NOT EXISTS public.users ( name VARCHAR(100) NOT NULL, phone VARCHAR(20) NOT NULL, cpf VARCHAR(15) PRIMARY KEY NOT NULL, zipCode VARCHAR(20) NOT NULL, logradouro VARCHAR(255) NOT NULL, city VARCHAR(50) NOT NULL, state VARCHAR(50) NOT NULL, creation_date TIMESTAMP NOT NULL DEFAULT Current_date)");

// Inicia o sevidor
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

module.exports = server