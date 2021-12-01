import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/user", userRoutes);

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  });
});

export { routes };
