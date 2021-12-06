import { User } from "@/entities/User";
import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUser.dto";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({
    name,
    email,
    password
  }: CreateUserDTO): Promise<User> {
    try {
      const user = await this.repository.createUser({ name, email, password });

      return user;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
