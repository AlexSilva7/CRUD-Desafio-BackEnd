import { UserController } from '../controllers/userController';
import { UserProvider } from '../providers/userProvider';
import { AdressController } from '../controllers/adressController';
import { AdressProvider } from '../providers/adressProvider';
import { UserRepository } from '../repository/userRepository';
import express from 'express'

const itensRouter = express.Router();

const userRepository = new UserRepository();
const userProvider = new UserProvider(userRepository);
const userController = new UserController(userProvider);
const adressProvider = new AdressProvider();
const adressController = new AdressController(adressProvider);

itensRouter.get('/users', async (req, res) => userController.GetAllUsers(req, res));
itensRouter.post('/users', async (req, res) => userController.CreateUser(req, res));
itensRouter.get('/users/:cpf', async (req, res) => userController.GetUserByCpf(req, res));
itensRouter.put('/users/:cpf', async (req, res) => userController.UpdateUser(req, res));
itensRouter.delete('/users/:cpf', async (req, res) => userController.DeleteUser(req, res));
itensRouter.get('/adress/:cep', async (req, res) => adressController.GetAdress(req, res));

export default itensRouter
