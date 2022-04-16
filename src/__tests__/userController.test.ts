import { UserController } from '../controllers/userController';
import { UserProvider } from '../providers/userProvider';
import { UserRepositoryFake } from '../repository/userRepositoryFake';
import User from "../models/user";

var userRepositoryFake = new UserRepositoryFake();
var userProvider = new UserProvider(userRepositoryFake);
var userController = new UserController(userProvider);

var user1: User = {
  name: "Alex",
  phone: "0000",
  cpf: "1111",
  adress: {
    zipCode: "0",
    logradouro: "0",
    city: "0",
    state: "0"
  }
}
UserRepositoryFake._db.push(user1)

var user2: User = {
  name: "Arthur",
  phone: "0000",
  cpf: "2222",
  adress: {
    zipCode: "0",
    logradouro: "0",
    city: "0",
    state: "0"
  }
}
UserRepositoryFake._db.push(user2)

describe('Testando userController', () => {

  //Todos os testes começam com 2 usuarios cadastrados no "banco" fake descrito acima ..
  it('Retorna todos os usuarios', async() => {
    expect(await userController._userProvider.GetAllUsers()).toBe(UserRepositoryFake._db)
  });

  it('Retorna apenas o usuario especificado pelo cpf', async() => {
    expect(await userController._userProvider.GetUserByCPF("2222")).toBe(user2)
  });

  it('Retorna objeto vazio para usuario com cpf nao encontrado', async() => {
    expect(await userController._userProvider.GetUserByCPF("5555")).toStrictEqual({})
  });

  //após esse teste teremos apenas 1 usuario no "banco"
  it('Retorna true para deletar usuario passando CPF válido', async() => {
    expect(await userController._userProvider.DeleteUser("2222")).toBe(true)
  });

  it('Retorna false para deletar usuario com CPF não cadastrado', async() => {
    expect(await userController._userProvider.DeleteUser("5555")).toBe(false)
  });

  //apos o insert teremos 2 usuarios no banco
  it('Criar usuário', async() => {
    await userController._userProvider.CreateUser(user2)
    expect(UserRepositoryFake._db.length).toBe(2)
  });

  it('Erro ao criar usuario com dados incompletos, tamanho do banco fake continuara como 2', async() => {
    await userController._userProvider.CreateUser({
      name: "teste",
      cpf: "teste",
      phone: "teste"
    })
    expect(UserRepositoryFake._db.length == 2).toBe(true)
  });

  it('Atualizando endereço do usuário Alex', async() => {
    let user: User = {
      name: "Alex",
      phone: "0000",
      cpf: "1111",
      adress: {
        zipCode: "xxxx",
        logradouro: "xxxx",
        city: "xxxx",
        state: "xxxx"
      }
    }
    await userController._userProvider.UpdateUser(user, "1111")
    let userAlex = await userController._userProvider.GetUserByCPF("1111")

    expect(userAlex.adress?.logradouro).toBe("xxxx")
  });

  it('Retornando false ao atualizar usuario com dados incompletos(sem telefone)', async() => {

    let user: User = {
      name: "Alex",
      cpf: "1111",
      adress: {
        zipCode: "yyyy",
        logradouro: "yyyy",
        city: "yyyy",
        state: "yyyy"
      }
    }

    expect(await userController._userProvider.UpdateUser(user, "1111")).toBe(false)
  });

  //Apos esse teste, quantidade de usuarios no banco será 1
  it('Deletando usuario Alex, retornando true', async() => {
    expect(await userController._userProvider.DeleteUser("1111")).toBe(true)
  });

  it('Tentativa de deletar usuario com cpf não cadastrado, retornando false', async() => {
    expect(await userController._userProvider.DeleteUser("1111")).toBe(false)
  });

});
