import { ToDoRepository } from "@/repositories/implementations/ToDoRepository";
import { CreateToDoController } from "./CreateToDo.controller";
import { CreateToDoUseCase } from "./CreateToDo.useCase";

const respository = new ToDoRepository();

const createToDoUseCase = new CreateToDoUseCase(respository);
const createToDoController = new CreateToDoController(createToDoUseCase);

export { createToDoUseCase, createToDoController };
