import User from "../models/user";
import { IUserRepository } from "./contracts/IuserReposity";
const db = require('../models/connections/dbConnection');

export class UserRepository implements IUserRepository{

    async Create(user: User){
        await db.query('INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [user.name, user.phone, user.cpf, user.adress?.zipCode, user.adress?.logradouro, user.adress?.city, user.adress?.state]);
    }
    
    async Update(user: User, cpf: string){
        let updateUser =await db.query('UPDATE users SET (name, phone, cpf, zipcode, logradouro, city, state) = ($1, $2, $3, $4, $5, $6, $7) WHERE cpf = $8',
            [user.name, user.phone, user.cpf, user.adress?.zipCode, 
                user.adress?.logradouro, user.adress?.city, user.adress?.state, cpf])

        if(updateUser.rowCount == 1){
            return true;
        }else{
            return false;
        }
    }

    async Delete(cpf: string){
        let deleteUser = await db.query('DELETE FROM users WHERE cpf = $1',[cpf])
        if(deleteUser.rowCount == 1){
            return true;
        }else{
            return false;
        }
    }

    async GetAll(){
        let usersDb = await db.query('SELECT * FROM users')
        var users = Array<User>();

        for(var x = 0; x < usersDb.rows.length; x++){
            users.push({
                name: usersDb.rows[x].name,
                phone: usersDb.rows[x].phone,
                cpf: usersDb.rows[x].cpf,
                adress: {
                    zipCode: usersDb.rows[x].zipCode,
                    logradouro: usersDb.rows[x].logradouro,
                    city: usersDb.rows[x].city,
                    state: usersDb.rows[x].state
                }
            })
        }
        return users;
    }

    async FindByCPF(cpf: string){
        var userDb = await db.query("SELECT * FROM users WHERE cpf = $1",[cpf]);
        let user: User = {
            name: userDb.rows[0].name,
            phone: userDb.rows[0].phone,
            cpf: userDb.rows[0].cpf,
            adress: {
                zipCode: userDb.rows[0].zipcode,
                logradouro: userDb.rows[0].logradouro,
                city: userDb.rows[0].city,
                state: userDb.rows[0].state
            }
        }
        return user;
    }

}

