import User from "../models/user";
interface IUserService {
    FindByID: (id: string) => string;
    GetAll: () => Array<User>;
    Create: (user: User) => void;
    Update: (user: User) => void;
    Delete: (id: string) => void;
}
export default IUserService

