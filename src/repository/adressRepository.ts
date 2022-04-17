import Adress from "../models/adress";
import { IAdressRepository } from "./contracts/IadresRepository";
const redis = require('../models/connections/redisConnection');

export class AdressRepository implements IAdressRepository{

    public async GetAdress(cep: string){
        return redis.get(cep)
    }

    public async SetAdress(cep: string, adress: Adress){
        redis.set(cep, JSON.stringify(adress));
    }

}