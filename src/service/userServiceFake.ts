import User from "../models/user";
import IUserService from "./IUserService";

export class UserServiceFake implements IUserService {
    public async FindByCPF(cpf: string) {
        var user: User;
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

