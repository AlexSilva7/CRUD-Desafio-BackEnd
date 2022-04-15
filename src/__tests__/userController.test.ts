import { UserController } from '../controllers/userController';
import { UserProviderFake } from '../providers/userProviderFake';

describe('testing index file', () => {

    var userService = new UserProviderFake();
    //var userController = new UserController(userService);

    var res:any;

  test('double function', () => {
    //expect(userController.tal()).toBe(true);
  });
});