import { createAccessToken, createRefreshToken } from "../../helpers/CreateTokens";
import { SerializeUser } from "../../helpers/SerializeUser";
import User from "../../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  serializedUser: string;
  token: string;
  refreshToken: string;
}

const AuthUserService = async ({
  email,
  password
}:Request): Promise<Response> => {
  const user = await User.findOne({
    where: { email }
  })

  if (!user) {
    throw new Error("There is no user with that email")
  }

  if (!(await user.checkPassword(password))) {
    throw new Error("adfa")
  }

  const token = createAccessToken(user)
  const refreshToken = createRefreshToken(user)

  const serializedUser = SerializeUser(user)
  
  return {
    serializedUser,
    token,
    refreshToken
  }
}

export default AuthUserService
