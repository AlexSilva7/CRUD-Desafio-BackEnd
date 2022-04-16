import User from "../models/user";
import IUserRepository from "./contracts/IuserReposity";

export class UserRepositoryFake implements IUserRepository{

    public static _db = Array<User>();

    async Create(user: User){
        if(user.name == null || user.cpf == null || user.phone == null ||
            user.adress?.city == null || user.adress.zipCode == null || 
            user.adress.logradouro == null|| user.adress.state == null){
                return;
        }
        UserRepositoryFake._db.push(user);
    }
    
    async Update(user: User, cpf: string){
        if(user.name == null || user.cpf == null || user.phone == null ||
            user.adress?.city == null || user.adress.zipCode == null || 
            user.adress.logradouro == null || user.adress.state == null){
                return false;
        }
        for(var i = 0; i < UserRepositoryFake._db.length; i++){
            if(UserRepositoryFake._db[i].cpf == cpf){
                UserRepositoryFake._db[i] = user;
                return true;
            }
        }
        return false;
    }

    async Delete(cpf: string){
        for(var i = 0; i < UserRepositoryFake._db.length; i++){
            if(UserRepositoryFake._db[i].cpf == cpf){
                UserRepositoryFake._db.splice(i, 1)
                return true;
            }
        }
        return false;
    }

    async GetAll(){
        return UserRepositoryFake._db;
    }

    async FindByCPF(cpf: string){
        for(var i = 0; i < UserRepositoryFake._db.length; i++){
            if(UserRepositoryFake._db[i].cpf == cpf){
                return UserRepositoryFake._db[i];
            }
        }
        let user: User = {};
        return user;
    }

}

