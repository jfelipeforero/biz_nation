import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import AppError from "../errors/AppError";
import authConfig from "../config/auth";

interface TokenPayload {
  id: string;
  username: string; 
  iat: number;
  exp: number;
}

const isAuth = (req: Request, res: Response, next: NextFunction): void => { 
  console.log(req.headers.authorization)
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("NOT AUTHORIZED", 401);
  }

  const [token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.secret);
    const { id } = decoded as TokenPayload;

    req.user = { id };
  } catch (err) {
    console.log(err)
    throw new AppError("INVALID_TOKEN", 403);
  }

  return next();
};

export default isAuth;

