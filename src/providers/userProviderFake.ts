import User from "../models/user";
import IUserProvider from "./contracts/IuserProvider";

export class UserProviderFake implements IUserProvider {
    
    public _dbFake = Array<User>();

    public async FindByCPF(cpf: string) {
        var user: User;
        for(var x = 0; x < this._dbFake.length; x++){
            if(this._dbFake[x].cpf == cpf){
                return this._dbFake[x];
            }
        }
        return user = {};
    }

    public async GetAll(){
        var users = Array<User>();
        return users;
    }

    public async Create(user: User){
        return true;
    }

    public async Update(user: User){
        return true;
    }

    public async Delete(cpf: string){
        return true;
    }
}

