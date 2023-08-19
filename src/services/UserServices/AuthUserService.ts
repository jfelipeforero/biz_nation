import User from "../../models/User";
import { createAccessToken } from "../../helpers/CreateTokens"
import { SerializeUser } from "../../helpers/SerializeUser";
import AppError from "../../errors/AppError";

interface SerializedUser {
  id: number;
  name: string;
  email: string;
}

interface Request {
  email: string;
  password: string;
}

interface Response {
  serializedUser: SerializedUser;
  token: string; 
}

const AuthUserService = async ({
  email,
  password
}: Request): Promise<Response> => {
  const user = await User.findOne({
    where: { email }, 
  });

  if (!user) {
    throw new AppError("ERR_INVALID_CREDENTIALS", 401);
  }

  if (!(await user.checkPassword(password))) {
    throw new AppError("ERR_INVALID_CREDENTIALS", 401);
  }

  const token = createAccessToken(user); 

  const serializedUser = SerializeUser(user);

  return {
    serializedUser,
    token, 
  };
};

export default AuthUserService;
