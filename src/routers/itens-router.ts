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
    await userController.GetAllUsers(res);
});

itensRouter.post('/users', async (req, res) => {
    await userController.CreateUser(req.body, res);
});

itensRouter.get('/users/:cpf', async (req, res) => {
    await userController.GetUserByCpf(req.params.cpf.toString(), res);
});

itensRouter.put('/users/:cpf', async (req, res) => {
    await userController.UpdateUser(req.body, req.params.cpf.toString(), res);
})

itensRouter.delete('/users/:cpf', async (req, res) => {
    await userController.DeleteUser(req.params.cpf.toString(), res);
})

itensRouter.get('/adress/:cep', async (req, res) => {
    await adressController.GetAdress(req.params.cep.toString(), res);
})

export default itensRouter
