import User from "../models/user";
import { IUserRepository } from "../repository/contracts/IuserReposity";
import { IUserProvider } from "./contracts/IuserProvider";

export class UserProvider implements IUserProvider {
    
    public _db: IUserRepository;

    constructor(db: IUserRepository){
        this._db = db;
    }

    public async GetUserByCPF(cpf: string) {
        try{
            return await this._db.FindByCPF(cpf); 
        }catch{
            var user: User = {};
            return user;
        }
    }

    public async GetAllUsers(){
        return await this._db.GetAll();
    }

    public async CreateUser(user: User){
        await this._db.Create(user)
    }

    public async UpdateUser(user: User, cpf: string){
        return await this._db.Update(user, cpf);
    }

    public async DeleteUser(cpf: string){
        return await this._db.Delete(cpf);
    }
}

