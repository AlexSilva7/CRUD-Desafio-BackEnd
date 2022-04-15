import User from "../../models/user";

interface IUserProvider {
    FindUserByCPF: (cpf: string) => Promise<User>;
    GetAllUsers: () => Promise<Array<User>>;
    CreateUser: (user: User) => Promise<boolean>;
    UpdateUser: (user: User, cpf: string) => Promise<boolean>;
    DeleteUser: (cpf: string) => Promise<boolean>;
}
export default IUserProvider

