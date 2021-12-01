import { User } from "@/entities/User";
import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { CreateUserDTO } from "./CreateUser.dto";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({ email, password }: CreateUserDTO): Promise<User> {
    try {
      const result = await this.repository.createOne({ email, password });

      return result;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
