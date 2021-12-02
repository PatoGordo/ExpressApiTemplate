import { ToDo } from "@/entities/ToDo";

export interface IToDoRepository {
  createToDo({
    owner_id,
    content,
    completed
  }: {
    owner_id: string;
    content: string;
    completed: boolean;
  }): Promise<ToDo>;
  toggleToDo({
    id,
    owner_id,
    completed
  }: {
    id: string;
    owner_id: string;
    completed: boolean;
  }): Promise<Omit<ToDo, "setId">>;
  deleteToDo({ owner_id, id }: { owner_id: string; id: string }): Promise<void>;
}
