import { User } from "@/entities/User";
import { getRepository } from "typeorm";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  async createOne({
    email,
    password
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    try {
      const userRepository = getRepository(User);

      const isEmailAlreadyUsed = await userRepository.findOne({
        where: {
          email
        }
      });

      if (isEmailAlreadyUsed) {
        throw new Error("This email is already in use!");
      }

      const user = userRepository.create({
        email,
        password
      });

      await userRepository.save(user);

      return user;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
  public async deleteOne({
    email,
    password,
    id
  }: {
    email: string;
    password: string;
    id: string;
  }): Promise<void> {
    try {
      const userRepository = getRepository(User);

      const user = await userRepository.findOne({
        where: {
          email,
          password,
          id
        }
      });

      if (!user) {
        throw new Error("This user does not exists");
      }

      await userRepository.remove(user);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
