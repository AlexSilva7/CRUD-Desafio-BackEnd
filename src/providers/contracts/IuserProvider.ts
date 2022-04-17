import User from "../../models/user";

export interface IUserProvider {
    GetUserByCPF: (cpf: string) => Promise<User>;
    GetAllUsers: () => Promise<Array<User>>;
    CreateUser: (user: User) => Promise<void>;
    UpdateUser: (user: User, cpf: string) => Promise<boolean>;
    DeleteUser: (cpf: string) => Promise<boolean>;
}
