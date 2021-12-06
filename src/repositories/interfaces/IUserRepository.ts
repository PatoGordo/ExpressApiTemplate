import { User } from "@/entities/User";

type Request = {
  name: string;
  email: string;
  password: string;
};

export interface IUserRepository {
  createUser({ name, email, password }: Request): Promise<User>;
  authenticateUser({
    email,
    password
  }: Omit<Request, "name">): Promise<{ token: string; user: User }>;
}
