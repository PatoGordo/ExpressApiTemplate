import { ToDo } from "@/entities/ToDo";
import { getRepository } from "typeorm";
import { IToDoRepository } from "../interfaces/IToDoRepository";

export class ToDoRepository implements IToDoRepository {
  public async createToDo({
    owner_id,
    content,
    completed
  }: {
    owner_id: string;
    content: string;
    completed: boolean;
  }): Promise<ToDo> {
    try {
      const todoRepository = getRepository(ToDo);

      if (!owner_id) {
        throw new Error("Your cannot create a ToDo Without an Account");
      }

      const todo = todoRepository.create({
        owner_id: {
          id: owner_id
        },
        completed,
        content
      });

      await todoRepository.save(todo);

      return todo;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
  public async toggleToDo({
    id,
    owner_id,
    completed
  }: {
    id: string;
    owner_id: string;
    completed: boolean;
  }): Promise<Omit<ToDo, "setId">> {
    try {
      const todoRepository = getRepository(ToDo);

      const todo = await todoRepository.findOne({
        where: {
          owner_id,
          id
        }
      });

      if (!todo) {
        throw new Error("This todo does not exists");
      }

      await todoRepository.update(todo, {
        completed: !completed
      });

      return { ...todo, completed: !completed };
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
  public async deleteToDo({
    owner_id,
    id
  }: {
    owner_id: string;
    id: string;
  }): Promise<void> {
    try {
      const todoRepository = getRepository(ToDo);

      const todo = await todoRepository.findOne({
        where: {
          owner_id,
          id
        }
      });

      if (!todo) {
        throw new Error("This todo does not exists");
      }

      await todoRepository.remove(todo);
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
