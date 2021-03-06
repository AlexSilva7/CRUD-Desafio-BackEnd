import User from "../../models/user";

export interface IUserRepository {
    FindByCPF: (cpf: string) => Promise<User>;
    GetAll: () => Promise<Array<User>>;
    Create: (user: User) => Promise<void>;
    Update: (user: User, cpf: string) => Promise<boolean>;
    Delete: (cpf: string) => Promise<boolean>;
}
