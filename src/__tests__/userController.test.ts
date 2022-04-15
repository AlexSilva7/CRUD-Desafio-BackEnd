const server = require('../../src/app.ts')
const request = require('supertest');
var res = request(server)
import { UserController } from '../controllers/userController';
import { UserProvider } from '../providers/userProvider';
import { UserRepositoryFake } from '../repository/userRepositoryFake';

//import User from "../models/user";

var userRepositoryFake = new UserRepositoryFake();
var userProvider = new UserProvider(userRepositoryFake);
var userController = new UserController(userProvider);

describe('Testando userController', () => {
  it('create function', () => {

    const response = request(server).post('http://localhost:3000/api/users').send(
      {
        name: "Alex",
        phone: "Alex",
        cpf: "Alex",
        adress: {
          zipCode: "0",
          logradouro: "0",
          city: "0",
          state: "0"
        }, res
      })

      console.log(userRepositoryFake._db.length);
    
    expect(response.status(200)).toBe(200);
  });
});

/*
it('should create a user', async () => {
const response = await request(server)
.post('/create')
.send({
name: "name test",
email: "email@test.com",
password: "123"
});
*/