import { PostgresUserRepository } from "@/repositories/implementations/PostgresUserRepository";
import { AuthUserController } from "./AuthUser.controller";
import { AuthUserUseCase } from "./AuthUser.useCase";

const repository = new PostgresUserRepository();

const authUserUseCase = new AuthUserUseCase(repository);
const authUserController = new AuthUserController(authUserUseCase);

export { authUserUseCase, authUserController };
