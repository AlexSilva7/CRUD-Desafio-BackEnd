import User from "../models/user";
import IUserRepository from "./contracts/IuserReposity";

export class UserRepositoryFake implements IUserRepository{

    public _db = Array<User>();

    async Create(user: User){
        this._db.push(user);
    }
    
    async Update(user: User, cpf: string){
        for(var i = 0; i < this._db.length; i++){
            if(this._db[i].cpf == cpf){
                this._db[i] = user;
                return true;
            }
        }
        return false;
    }

    async Delete(cpf: string){
        for(var i = 0; i < this._db.length; i++){
            if(this._db[i].cpf == cpf){
                this._db.splice(i, 1)
                return true;
            }
        }
        return false;
    }

    async GetAll(){
        return this._db;
    }

    async FindByCPF(cpf: string){
        for(var i = 0; i < this._db.length; i++){
            if(this._db[i].cpf == cpf){
                return this._db[i];
            }
        }
        let user: User = {};
        return user;
    }

}

