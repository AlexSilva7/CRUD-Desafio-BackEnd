import Adress from "../../models/adress";

export interface IAdressProvider {
    GetDataByCep: (cep: string) => Promise<Adress>;
}

