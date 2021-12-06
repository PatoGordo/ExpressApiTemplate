import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUser.useCase";

export class AuthUserController {
  constructor(private useCase: AuthUserUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const { token, user } = await this.useCase.execute({ email, password });

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

      return res.status(200).json({
        token,
        user: {
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
