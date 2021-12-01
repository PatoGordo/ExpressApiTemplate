import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUser.useCase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || email.trim() === "") {
      return res.status(400).json({
        message: '"email" is a required parameter'
      });
    }

    if (!password || password.trim() === "") {
      return res.status(400).json({
        message: '"password" is a required parameter'
      });
    }

    try {
      const result = await this.useCase.execute({ email, password });

      return res.status(201).json({
        message: "User has been successfully created!",
        user: {
          email: result.email,
          id: result.id
        }
      });
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message
      });
    }
  }
}
