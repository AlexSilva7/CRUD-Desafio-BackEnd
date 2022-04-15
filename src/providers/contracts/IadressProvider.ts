import Adress from "../../models/adress";

interface IAdressProvider {
    GetDataByCep: (cep: string) => Promise<Adress>;
}
export default IAdressProvider

