import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../jwt-config";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "You must to be logged in to access this page"
    });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, jwtSecret);

    const { id } = data as TokenPayload;

    req.uid = id;

    next();
  } catch (err) {
    return res.status(400).json({
      message: (err as Error).message
    });
  }
}
