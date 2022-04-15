import Adress from "../models/adress";
import IAdressProvider from "./contracts/IadressProvider";
const got = require('got');
const redis = require('../models/DAL/redisConnection');

export class AdressProvider implements IAdressProvider {

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