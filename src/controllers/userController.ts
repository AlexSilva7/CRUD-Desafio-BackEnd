import User from "../models/user";
import IUserProvier from "../providers/contracts/IuserProvider";

export class UserController{
    public _userProvider: IUserProvier;

    constructor(userProvider: IUserProvier){
        this._userProvider = userProvider;
    }

    public async GetUserByCpf(cpf: string, res: any){
        try{
            let user = await this._userProvider?.GetUserByCPF(cpf);
            if(user.name != null){
                return res.json(user);
            }else{
                return res.status(400).json({
                    message: "Usuario não encontrado para este cpf!"
                })
            }
        }catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição!" + error
            })
        }
    }

    public async GetAllUsers(res: any){
        try{
            return res.json(await this._userProvider?.GetAllUsers());
        }catch(error){
            res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            })
        }
    }

    public async CreateUser(user: User, res: any){
        try{
            await this._userProvider?.CreateUser(user)
            return res.json({
                message: "Usuario criado com sucesso!"
            })
        }catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            });
        }
    }

    public async UpdateUser(user: User, cpf: string, res: any){
        try{
            if(await this._userProvider?.UpdateUser(user, cpf)){
                return res.json({
                    message: "Usuario atualizado com sucesso!"
                });
            }else{
                return res.status(400).json({
                    message: "Usuario nao encontrado para esse cpf!"
                })
            }
        }
        catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            });
        }
    }

    public async DeleteUser(cpf: string, res: any){
        try{
            if(await this._userProvider?.DeleteUser(cpf)){
                return res.json({
                    message: "Usuario deletado com sucesso!"
                });
            }else{
                return res.status(400).json({
                    message: "Usuario nao encontrado para esse cpf!"
                });
            }
        }
        catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            });
        }
    }
}
