import Adress from "../models/adress";
import { IAdressRepository } from "../repository/contracts/IadresRepository";
import { IAdressProvider } from "./contracts/IadressProvider";
const got = require('got');
var appSettings = require('../../appsettings');

export class AdressProvider implements IAdressProvider {
    private readonly _db: IAdressRepository;

    constructor(db: IAdressRepository){
        this._db = db;
    }

    public async GetDataByCep(cep: string){
        
        if(await this._db.GetAdress(cep) != null){
            return(await this._db.GetAdress(cep));
        }

        var url = appSettings.baseUrlAdress + cep + '/json/';
        const response = await got(url, { json: true });

        var adress: Adress = {
            zipCode: response.body["cep"],
            logradouro: response.body["logradouro"],
            city: response.body["localidade"],
            state: response.body["uf"],
        }
        
        this._db.SetAdress(cep, adress);
        return adress;
    }
    
}