import { UserRepository } from "@/repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUser.controller";
import { CreateUserUseCase } from "./CreateUser.useCase";

const repository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(repository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
