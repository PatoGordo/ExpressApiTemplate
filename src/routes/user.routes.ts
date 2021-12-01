import { createUserController } from "@/useCases/User/Create";
import { deleteUserController } from "@/useCases/User/Delete";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/create", (req, res) => {
  return createUserController.execute(req, res);
});

userRoutes.post("/delete", (req, res) => {
  return deleteUserController.execute(req, res);
});

export { userRoutes };
