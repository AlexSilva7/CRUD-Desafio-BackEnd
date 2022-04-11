import { json } from "stream/consumers";
import IAdressService from "../service/IAdressService";

export class AdressController{
    public _adressService: IAdressService;

    constructor(adressService: IAdressService){
        this._adressService = adressService;
    } 

    public async GetAdress(cep: string){
        try{
            let adress = await this._adressService?.GetDataByCep(cep)
            return adress
        }
        catch(error){
            console.log(error)
            return {
                message : "Erro ao processar a solicitação!"
            }
        }
    }
}
