import User from "../models/user";
interface IUserService {
    FindByCPF: (cpf: string) => Promise<User>;
    GetAll: () => Promise<Array<User>>;
    Create: (user: User) => void;
    Update: (user: User, cpf: string) => void;
    Delete: (cpf: string) => void;
}
export default IUserService

