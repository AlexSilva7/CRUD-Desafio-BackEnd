import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'

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

// Inicia o sevidor
const server = app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

module.exports = server