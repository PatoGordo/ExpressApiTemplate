import { ToDo } from "@/entities/ToDo";
import { IToDoRepository } from "@/repositories/interfaces/IToDoRepository";
import { CreateToDoDTO } from "./CreateToDo.dto";

export class CreateToDoUseCase {
  constructor(private repository: IToDoRepository) {}

  public async execute({
    owner_id,
    content,
    completed
  }: CreateToDoDTO): Promise<ToDo> {
    try {
      const result = await this.repository.createToDo({
        owner_id,
        completed,
        content
      });

      return result;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
