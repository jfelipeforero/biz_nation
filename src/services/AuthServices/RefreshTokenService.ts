import { verify } from "jsonwebtoken";
import { Response as Res } from "express";

import User from "../../models/User";
//import AppError from "../../errors/AppError";
//import ShowUserService from "../UserServices/ShowUserService";
import authConfig from "../../config/auth";
import {
  createAccessToken,
 // createRefreshToken
} from "../../helpers/CreateTokens";

interface RefreshTokenPayload {
  id: string;
  tokenVersion: number;
}

interface Response {
  user: User;
  newToken: string;
  refreshToken: string;
}

