import { IAuthRepository } from "./contracts/IauthRepository";

export class AuthRepositoryFake implements IAuthRepository {

    async VerifyLogin(user: string, password: string){

        var adminFake = {
            user: "Admin",
            password: "DesafioBackEnd"
        }

        if(user == adminFake.user && password == adminFake.password){
            return true;
        }else{
            return false;
        }
        
    };

}