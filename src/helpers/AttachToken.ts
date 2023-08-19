import { Response } from "express";

export const attachToken = (res: Response, token: string): void => {
  res.cookie("jwt", token, { httpOnly: true });
};

