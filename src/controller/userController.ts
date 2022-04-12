import User from "../models/user";
import IUserService from "../service/IUserService";

export class UserController{
    public _userService: IUserService;

    constructor(userService: IUserService){
        this._userService = userService;
    }

    public async GetUserByCpf(cpf: string, res: any){
        try{
            let user = await this._userService?.FindByCPF(cpf);
            if(user.name == null){
                return res.status(400).json({
                    message: "Usuario não encontrado para este cpf!"
                })
            }
            return res.json(user);
        }catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição!"
            })
        }
    }

    public async GetAllUsers(res: any){
        try{
            return res.json(await this._userService?.GetAll());
        }catch{
            res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição!"
            })
        }
    }

    public async CreateUser(user: User, res: any){
        try{
            await this._userService?.Create(user);
            return res.json({
                message: "Usuario criado com sucesso!"
            })
        }catch(error){
            return res.status(400).json({
                message: error
            });
        }
    }

    public async UpdateUser(user: User, cpf: string, res: any){
        try{
            await this._userService?.Update(user, cpf);
            return res.json({
                message: "Usuario atualizado com sucesso!"
            })
        }
        catch{
            return res.status(400).json({
                message: "Usuario nao encontrado ou dados preenchidos incorretamente!"
            });
        }
    }

    public async DeleteUser(cpf: string, res: any){
        try{
            if(await this._userService?.Delete(cpf)){
                return res.json({
                    message: "Usuario deletado com sucesso!"
                });
            }else{
                return res.status(400).json({
                    message: "Usuario nao encontrado para esse cpf!"
                });
            }
        }
        catch{
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição!"
            });
        }
    }
}
