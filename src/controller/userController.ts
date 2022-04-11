import User from "../models/user";
import IUserService from "../service/IUserService";

export class UserController{
    public _userService: IUserService;

    constructor(userService: IUserService){
        this._userService = userService;
    }

    public async GetUserByCpf(cpf: string){
        return await this._userService?.FindByCPF(cpf);
    }

    public async GetAllUsers(){
        return await this._userService?.GetAll();
    }

    public async CreateUser(user: User){
        await this._userService?.Create(user);
        return {
            message: "Usuario criado com sucesso!"
        }
    }

    public async UpdateUser(user: User, cpf: string){
        await this._userService?.Update(user, cpf);
        return {
            message: "Usuario atualizado com sucesso!"
        }
    }

    public async DeleteUser(cpf: string){
        await this._userService?.Delete(cpf);
        return {
            message: "Usuario deletado com sucesso!"
        }
    }
}
