import { ensureAuthenticated } from "@/authentication/middlewares/ensureAuthenticated.middleware";
import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/user", userRoutes);

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  });
});

routes.get("/secure", ensureAuthenticated, (req, res) => {
  res.status(200).json({
    message: "Secure Route Message",
    id: req.uid
  });
});

export { routes };
