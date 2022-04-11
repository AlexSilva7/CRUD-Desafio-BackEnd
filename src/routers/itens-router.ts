import { UserController } from '../controller/userController';
import { UserService } from '../service/userService';
import { AdressController } from '../controller/adressController';
import { AdressService } from '../service/adressService';
import express from 'express'

const itensRouter = express.Router();
const userService = new UserService();
const adressService = new AdressService();
const userController = new UserController(userService);
const adressController = new AdressController(adressService);

itensRouter.get('/users', async (req, res) => {
    res.json(await userController.GetAllUsers());
});

itensRouter.post('/users', async (req, res) => {
    res.json(await userController.CreateUser(req.body));
});

itensRouter.get('/users/:cpf', async (req, res) => {
    const cpf: number = +req.params.cpf
    res.json(await userController.GetUserByCpf(cpf.toString()));
});

itensRouter.put('/users/:cpf', async (req, res) => {
    const cpf: number = +req.params.cpf
    res.json(await userController.UpdateUser(req.body, cpf.toString()));
})

itensRouter.delete('/users/:cpf', async (req, res) => {
    const cpf: number = +req.params.cpf
    res.json(await userController.DeleteUser(cpf.toString()));
})

itensRouter.get('/adress/:cep', async (req, res) => {
    const cep: number = +req.params.cep
    adress: Adress = await adressController.GetAdress(cep.toString())
    if(adress == )
    res.json();
})

export default itensRouter
