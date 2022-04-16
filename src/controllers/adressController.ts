import IAdressProvider from "../providers/contracts/IadressProvider";

export class AdressController{
    public _adressProvider: IAdressProvider;

    constructor(adressProvider: IAdressProvider){
        this._adressProvider = adressProvider;
    } 

    public async GetAdress(req: any, res: any){
        try{
            let adress = await this._adressProvider.GetDataByCep(req.params.cep)
            return res.send(adress)
        }
        catch(error){
            return res.status(400).json({
                message : "Erro ao processar a solicitação!"
            })
        }
    }
}
