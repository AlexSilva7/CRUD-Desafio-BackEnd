import express from 'express'
const itensRouter = express.Router()
import User from '../models/user';
/*
Criar um novo usuario: POST /api/usuarios
Ler todos os usuarios: GET /api/usuarios
Ler um usuario específico: GET /api/usuarios/{cpf}
Atualizar um usuario: PUT /api/usuarios/{cpf}
Apagar um usuario: DELETE /api/usuarios/{cpf}

Recuperar endereco por CEP: GET /api/enderecos/{cep}
*/

itensRouter.post('/usuarios', (req, res) => {
    res.send('Cria novo item')
})

itensRouter.get('/usuarios', (req, res) => {
    const users: User[] = [
        {
            name: "Alex",
            phone: "999999",
            cpf: "999999",
            adress: {
                zipCode: "00000",
                logradouro: "00000",
                city: "00000",
                state: "00000"
            }
        },
        {
            name: "Lays",
            phone: "999999",
            cpf: "999999",
            adress: {
                zipCode: "00000",
                logradouro: "00000",
                city: "00000",
                state: "00000"
            }
        }
    ]
    res.json(users)
})

itensRouter.get('/usuarios/:cpf', (req, res) => {
    const cpf: number = +req.params.cpf
    res.send(`Lê o item ${cpf}`)
})

itensRouter.put('/usuarios/:cpf', (req, res) => {
    const cpf: number = +req.params.cpf
    res.send(`Atualiza o item ${cpf}`)
})

itensRouter.delete('/usuarios/:cpf', (req, res) => {
    const cpf: number = +req.params.cpf
    res.send(`Apaga o item ${cpf}`)
})

export default itensRouter