import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUser.useCase";

export class DeleteUserController {
  constructor(private useCase: DeleteUserUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { email, password, id } = req.body;

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

    if (!id || id.trim() === "") {
      return res.status(400).json({
        message: '"id" is a required parameter'
      });
    }

    try {
      const result = await this.useCase.execute({ email, password, id });

      return res.status(200).json({
        message: result
      });
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message
      });
    }
  }
}
