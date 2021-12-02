import { Request, Response } from "express";
import { CreateToDoUseCase } from "./CreateToDo.useCase";

export class CreateToDoController {
  constructor(private useCase: CreateToDoUseCase) {}

  public async execute(req: Request, res: Response): Promise<Response> {
    const { owner_id, content, completed } = req.body;

    if (!owner_id || owner_id.trim() === "") {
      return res.status(400).json({
        message: '"owner_id" is a required parameter'
      });
    }

    if (!content || content.trim() === "") {
      return res.status(400).json({
        message: '"content" is a required parameter'
      });
    }

    try {
      const result = await this.useCase.execute({
        owner_id,
        content,
        completed
      });

      return res.status(201).json({
        message: "ToDo has been successfully created!",
        todo: result
      });
    } catch (err) {
      return res.status(400).json({
        message: (err as Error).message
      });
    }
  }
}
