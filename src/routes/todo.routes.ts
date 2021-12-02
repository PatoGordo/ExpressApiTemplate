import { createToDoController } from "@/useCases/ToDo/CreateToDo";
import { Router } from "express";

const todoRoutes = Router();

todoRoutes.post("/create", (req, res) => {
  return createToDoController.execute(req, res);
});

export { todoRoutes };
