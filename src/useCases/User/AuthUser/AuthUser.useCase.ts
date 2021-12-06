import { User } from "@/entities/User";
import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { AuthUserDTO } from "./AuthUser.dto";

export class AuthUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({
    email,
    password
  }: AuthUserDTO): Promise<{ token: string; user: User }> {
    try {
      const result = await this.repository.authenticateUser({
        email,
        password
      });

      return result;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
