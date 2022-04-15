import IAdressProvider from "../providers/contracts/IadressProvider";

export class AdressController{
    public _adressProvider: IAdressProvider;

    constructor(adressProvider: IAdressProvider){
        this._adressProvider = adressProvider;
    } 

    public async GetAdress(cep: string, res: any){
        try{
            let adress = await this._adressProvider.GetDataByCep(cep)
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
