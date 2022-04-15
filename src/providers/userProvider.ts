import User from "../models/user";
import IUserRepository from "../repository/contracts/IuserReposity";
import IUserProvider from "./contracts/IuserProvider";

export class UserProvider implements IUserProvider {

    public _db: IUserRepository;

    constructor(db: IUserRepository){
        this._db = db;
    }

    public async FindUserByCPF(cpf: string) {
        try{
            return await this._db.GetByCPF(cpf); 
        }catch{
            var user: User = {};
            return user;
        }
    }

    public async GetAllUsers(){
        try{
            return await this._db.GetAll();
        }catch{
            return Array<User>();
        }
    }

    public async CreateUser(user: User){
        if(await this._db.Create(user)){
            return true;
        }
        return false;
    }

    public async UpdateUser(user: User, cpf: string){
        try{
            return await this._db.Update(user, cpf);
        }catch{
            return false;
        }
    }

    public async DeleteUser(cpf: string){
        try{
            return await this._db.Delete(cpf);
        }catch{
            return false;
        }
    }
}

