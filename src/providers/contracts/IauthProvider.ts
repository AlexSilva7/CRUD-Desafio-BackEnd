export interface IAuthProvider {
    GetAuth: (user: string, password: string) => Promise<boolean>;
}