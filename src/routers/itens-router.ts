import { UserController } from '../controllers/userController';
import { UserProvider } from '../providers/userProvider';
import { AdressController } from '../controllers/adressController';
import { AdressProvider } from '../providers/adressProvider';
import { UserRepository } from '../repository/userRepository';
import express from 'express'

const itensRouter = express.Router();
const userRepository = new UserRepository();
const userProvider = new UserProvider(userRepository);
const adressProvider = new AdressProvider();
const userController = new UserController(userProvider);
const adressController = new AdressController(adressProvider);

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
