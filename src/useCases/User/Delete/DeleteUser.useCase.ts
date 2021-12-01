import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { DeleteUserDTO } from "./DeleteUser.dto";

export class DeleteUserUseCase {
  constructor(private repository: IUserRepository) {}

  public async execute({
    email,
    password,
    id
  }: DeleteUserDTO): Promise<string> {
    try {
      await this.repository.deleteOne({ email, password, id });

      return "User has been successfully deleted!";
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
