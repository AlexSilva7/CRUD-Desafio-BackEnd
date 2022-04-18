import express from 'express'
import { UserController } from '../controllers/userController';
import { UserProvider } from '../providers/userProvider';
import { AdressController } from '../controllers/adressController';
import { AdressProvider } from '../providers/adressProvider';
import { UserRepository } from '../repository/userRepository';
import { AdressRepository } from '../repository/adressRepository';
import { AuthController } from '../controllers/authController';
import { AuthRepositoryFake } from '../repository/authRepositoryFake';
import { AuthProvider } from '../providers/authProvider';

const itensRouter = express.Router();

const userRepository = new UserRepository();
const userProvider = new UserProvider(userRepository);
const userController = new UserController(userProvider);

const adressRepository = new AdressRepository();
const adressProvider = new AdressProvider(adressRepository);
const adressController = new AdressController(adressProvider);

const authRepository = new AuthRepositoryFake();
const authProvider = new AuthProvider(authRepository);
const authController = new AuthController(authProvider);

itensRouter.get('/users', async (req, res) => userController.GetAllUsers(req, res));
itensRouter.post('/users', async (req, res) => userController.CreateUser(req, res));
itensRouter.get('/users/:cpf', async (req, res) => userController.GetUserByCpf(req, res));
itensRouter.put('/users/:cpf', async (req, res) => userController.UpdateUser(req, res));
itensRouter.delete('/users/:cpf', async (req, res) => userController.DeleteUser(req, res));
itensRouter.get('/adress/:cep', async (req, res) => adressController.GetAdress(req, res));
itensRouter.post('/auth', async(req, res) => authController.Sign(req, res))

export default itensRouter
