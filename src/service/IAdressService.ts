import Adress from "../models/adress";
interface IAdressService {
    GetDataByCep: (cep: string) => Promise<Adress>;
}
export default IAdressService

