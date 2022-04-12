import { json } from "stream/consumers";
import IAdressService from "../service/IAdressService";

export class AdressController{
    public _adressService: IAdressService;

    constructor(adressService: IAdressService){
        this._adressService = adressService;
    } 

    public async GetAdress(cep: string, res: any){
        try{
            let adress = await this._adressService.GetDataByCep(cep)
            return res.send(adress)
        }
        catch(error){
            console.log(error)
            return res.status(400).json({
                message : "Erro ao processar a solicitação!"
            })
        }
    }
}
