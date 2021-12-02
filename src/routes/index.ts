import { Router } from "express";
import { todoRoutes } from "./todo.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/todo", todoRoutes);

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  });
});

export { routes };
