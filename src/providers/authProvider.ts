import { IAuthRepository } from "../repository/contracts/IauthRepository";
import { IAuthProvider } from "./contracts/IauthProvider";
var jwt = require('jsonwebtoken')
const appSettings = require('../../appsettings.json')

export class AuthProvider implements IAuthProvider {

    private readonly _dbAdmin: IAuthRepository;

    constructor(db: IAuthRepository){
        this._dbAdmin = db;
    }
    
    async GetAuth(user: string, password: string){
        return this._dbAdmin.VerifyLogin(user, password);;
    }; 
}