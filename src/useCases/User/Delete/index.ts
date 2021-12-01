import { UserRepository } from "@/repositories/implementations/UserRepository";
import { DeleteUserController } from "./DeleteUser.controller";
import { DeleteUserUseCase } from "./DeleteUser.useCase";

const repository = new UserRepository();

const deleteUserUseCase = new DeleteUserUseCase(repository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserUseCase, deleteUserController };
