import User from "../models/user";

interface IUserService {
    FindByCPF: (cpf: string) => Promise<User>;
    GetAll: () => Promise<Array<User>>;
    Create: (user: User) => Promise<boolean>;
    Update: (user: User, cpf: string) => Promise<boolean>;
    Delete: (cpf: string) => Promise<boolean>;
}
export default IUserService

