var jwt = require('jsonwebtoken')
import express from 'express'
var app = express()

export class AuthController{

    public async Sign(req: any, res: any){
        var token = jwt.sign(req.body.name, app.get('superSecret'), {
            expiresIn: '1440m'
          }) // Aqui dizemos que o Token expira em 1440 minutos (24 hrs)
    
          // Retornamos um json dizendo que deu certo junto com o seu Token
          return res.json({
            success: true,
            message: 'Aproveite seu token!',
            token: token
          })
    }
}
