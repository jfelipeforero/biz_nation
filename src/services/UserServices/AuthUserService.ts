import { createAccessToken } from "../../helpers/CreateTokens";
import { SerializeUser } from "../../helpers/SerializeUser";
import User from "../../models/User";
import * as Yup from 'yup'

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
  //refreshToken: string;
}

const AuthUserService = async ({
  email,
  password
}:Request): Promise<Response> => {
  const schema = Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string()
      .email()
      .required()
      .test(
        "Check-email",
        "An user with this email already exists.",
        async value => {
          if (!value) return false;
          const emailExists = await User.findOne({
            where: { email: value }
          });
          return !emailExists;
        }
      ),
      password: Yup.string().required().min(6)
  })

  try {
    await schema.validate({ email, username, password })
  } catch(err) {
    throw new Error
  }

  if (!(await user.checkPassword(password))) {
    throw new Error("adfa")
  }

  const token = createAccessToken(user)
  //const refreshToken = createRefreshToken(user)

  const serializedUser = SerializeUser(user)
  
  return {
    serializedUser,
    token, 
  }
}

export default AuthUserService
