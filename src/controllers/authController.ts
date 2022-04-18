import { IAuthProvider } from "../providers/contracts/IauthProvider"
var jwt = require('jsonwebtoken')
const appSettings = require('../../appsettings.json')

export class AuthController{

    private readonly _provider: IAuthProvider

    constructor(provider: IAuthProvider){
      this._provider = provider;
    }

    public async Sign(req: any, res: any){

      var auth = await this._provider.GetAuth(req.body.user, req.body.password)

      if(auth){
        var token = jwt.sign(req.body.user, appSettings.tokenSecret, {
          expiresIn: '1440m'
        }) // Aqui dizemos que o Token expira em 1440 minutos (24 hrs)
  
        // Retornamos um json dizendo que deu certo junto com o seu Token
        return res.json({
          success: true,
          message: 'Authentication sucessfull!',
          token: token
        })
      }else{
        res.status(500).json({
            message: 'Authentication not sucessfull!'
          });
      }
      
    }
}

/*
//authentication
app.post('/auth', (req, res) => {
  //esse teste abaixo deve ser feito no seu banco de dados
  if(req.body.user === 'luiz' && req.body.password === '123'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    const token = jwt.sign({ id }, appSettings.secret, {
      expiresIn: 300 // expires in 5min
    });
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login inválido!'});
})
*/
