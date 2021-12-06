import { authUserController } from "@/useCases/User/AuthUser";
import { createUserController } from "@/useCases/User/CreateUser";
import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/create", (req, res) => {
  return createUserController.execute(req, res);
});

userRoutes.post("/authenticate", (req, res) => {
  return authUserController.execute(req, res);
});

export { userRoutes };
