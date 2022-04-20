import { nextTick } from "process";
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
        var token = jwt.sign({id:req.body.user}, appSettings.tokenSecret, {
          expiresIn: '20m'
        }); // Aqui dizemos que o Token expira em 20 minutos
  
        // Retornamos um json dizendo que deu certo junto com o seu Token
        res.json({
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

    public verifyJWT(req: any, res: any, next: any){
      const token = req.headers['x-access-token'];
      if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
      
      try{
        jwt.verify(token, appSettings.tokenSecret, function(err: any, decoded: any) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          // se tudo estiver ok, salva no request para uso posterior
          req.id = decoded.id;
          next();
        });
      }catch(error){
        res.status(400).json({ message: error });
      }
  }
}

