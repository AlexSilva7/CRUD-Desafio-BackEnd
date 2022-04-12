import Adress from "../models/adress";
import IAdressService from "./IAdressService";
const got = require('got');
const redis = require('../repository/cacheViaCep');

export class AdressService implements IAdressService {

    public async GetDataByCep(cep: string){
        
        if(await redis.get(cep) != null){
            return(await redis.get(cep));
        }

        var url = 'https://viacep.com.br/ws/' + cep + '/json/';
        const response = await got(url, { json: true });

        var adress: Adress = {
            zipCode: response.body["cep"],
            logradouro: response.body["logradouro"],
            city: response.body["localidade"],
            state: response.body["uf"],
        }
        
        redis.set(cep, JSON.stringify(adress));
        return adress;
    }
}