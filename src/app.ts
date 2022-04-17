import express from 'express'
import cors from 'cors'
import itensRouter from './routers/itens-router'
const appSettings = require('../appsettings.json')
	
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

// Porta do servidor
const PORT = process.env.PORT || 3000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('superSecret', appSettings.secret)

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})


//authentication
app.post('/auth', (req, res) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.password === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})

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