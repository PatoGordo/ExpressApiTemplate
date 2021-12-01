import { User } from "@/entities/User";

export interface IUserRepository {
  createOne({
    email,
    password
  }: {
    email: string;
    password: string;
  }): Promise<User>;
  deleteOne({
    email,
    password,
    id
  }: {
    email: string;
    password: string;
    id: string;
  }): Promise<void>;
}
