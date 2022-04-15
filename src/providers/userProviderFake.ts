import User from "../models/user";
import IUserProvider from "./contracts/IuserProvider";
    /*
export class UserProviderFake implements IUserProvider {

    public _dbFake = Array<User>();

    public async GetUserByCPF(cpf: string) {
        var user: User;
        for(var x = 0; x < this._dbFake.length; x++){
            if(this._dbFake[x].cpf == cpf){
                return this._dbFake[x];
            }
        }
        return user = {};
    }

    public async GetAllUsers(){
        var users = Array<User>();
        return users;
    }

    public async CreateUser(user: User){
        return true;
    }

    public async UpdateUser(user: User){
        return true;
    }

    public async DeleteUser(cpf: string){
        return true;
    }
    
}
*/
