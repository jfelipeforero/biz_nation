import { Request, Response } from 'express'
import CreateUserService from '../services/UserServices/CreateUserService'
import { StatusCodes } from 'http-status-codes'
import AuthUserService from '../services/UserServices/AuthUserService'
import { attachToken } from '../helpers/AttachToken'

export const register = async(req: Request, res: Response) => { 
  const { email, username, password } = req.body;
  const user = await CreateUserService({ email, username, password })
  res.status(StatusCodes.OK).json(user)
}

export const login = async(req: Request, res: Response) => {
  const { email, password } = req.body;

  const { token, serializedUser } = await AuthUserService({ email, password });

  attachToken(res, token);

  return res.status(200).json({
    token,
    user: serializedUser
  });
};


