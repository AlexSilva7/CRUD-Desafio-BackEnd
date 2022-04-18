export interface IAuthRepository {
    VerifyLogin: (user: string, password: string) => Promise<boolean>;
}