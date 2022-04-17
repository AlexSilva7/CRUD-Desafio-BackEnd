import Adress from "../../models/adress";

export interface IAdressRepository {
    GetAdress: (cep: string) => Promise<Adress>;
    SetAdress: (cep: string, adress: Adress) => void;
}