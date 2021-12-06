import { User } from "@/entities/User";
import { getRepository } from "typeorm";
import { IUserRepository } from "../interfaces/IUserRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret } from "@/authentication/jwt-config";

export class PostgresUserRepository implements IUserRepository {
  public async createUser({
    name,
    email,
    password
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    try {
      const userRepository = getRepository(User);

      const emailAlreadyInUse = await userRepository.findOne({
        where: {
          email
        }
      });

      if (emailAlreadyInUse) {
        throw new Error("This email is already in use");
      }

      const user = userRepository.create({
        name,
        email,
        password
      });

      await userRepository.save(user);

      return user;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  public async authenticateUser({
    email,
    password
  }: {
    email: string;
    password: string;
  }): Promise<{ token: string; user: User }> {
    try {
      const userRepository = getRepository(User);

      const user = await userRepository.findOne({
        where: {
          email
        }
      });

      if (!user) {
        throw new Error("The email or password is incorrect");
      }

      const isSamePassword = bcrypt.compareSync(password, user.password);

      if (!isSamePassword) {
        throw new Error("The email or password is incorrect");
      }

      const token = jwt.sign(
        {
          id: user.id
        },
        jwtSecret,
        { expiresIn: "1d" }
      );

      return {
        token,
        user
      };
    } catch (err) {
      if ((err as Error).message === "jwt expired") {
        throw new Error(
          "Your logging session has expired, please log in again"
        );
      }
      throw new Error((err as Error).message);
    }
  }
}
