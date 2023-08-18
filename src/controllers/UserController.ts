import { Request, Response } from 'express'
import CreateUserService from '../services/UserServices/CreateUserService'
import { StatusCodes } from 'http-status-codes'
import AuthUserService from '../services/UserServices/AuthUserService'
import { SendRefreshToken } from '../helpers/SendRefreshToken'

export const register = async(req: Request, res: Response) => {
  console.log(req.body)
  const { email, username, password } = req.body;
  const result = await CreateUserService({ email, username, password })
  res.status(StatusCodes.OK).json(result)
}

export const login = async(req: Request, res: Response) => {
  console.log(req.body)
  const { email, password } = req.body
  const { serializedUser, token, refreshToken} = await AuthUserService({ email, password })

  SendRefreshToken(res, refreshToken)

  return res.status(StatusCodes.OK).json({
    user: serializedUser,
    token
  })
}

