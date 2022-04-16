import User from "../models/user";
import IUserProvider from "../providers/contracts/IuserProvider";

export class UserController{
    public _userProvider: IUserProvider;

    constructor(userProvider: IUserProvider){
        this._userProvider = userProvider;
    }

    public async GetUserByCpf(req: any, res: any){
        try{
            let user = await this._userProvider?.GetUserByCPF(req.params.cpf);
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

    public async GetAllUsers(req: any, res: any){
        try{
            return res.json(await this._userProvider?.GetAllUsers());
        }catch(error){
            res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            })
        }
    }

    public async CreateUser(req: any, res: any){
        try{
            await this._userProvider?.CreateUser(req.body)
            return res.json({
                message: "Usuario criado com sucesso!"
            })
        }catch(error){
            return res.status(500).json({
                message: "Erro do servidor. Não foi possivel processar a requisição! \n" + error
            });
        }
    }

    public async UpdateUser(req: any, res: any){
        try{
            if(await this._userProvider?.UpdateUser(req.body, req.params.cpf)){
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

    public async DeleteUser(req: any, res: any){
        try{
            if(await this._userProvider?.DeleteUser(req.params.cpf)){
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
