import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUser.useCase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name || name.trim() === "") {
      return res.status(401).json({
        message: '"name" is a required parameter in body'
      });
    }

    if (!email || email.trim() === "") {
      return res.status(401).json({
        message: '"email" is a required parameter in body'
      });
    }

    if (!password || password.trim() === "") {
      return res.status(401).json({
        message: '"password" is a required parameter in body'
      });
    }

    try {
      const user = await this.useCase.execute({ name, email, password });

      return res.status(201).json({
        message: "User has been successfully created",
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message
      });
    }
  }
}
