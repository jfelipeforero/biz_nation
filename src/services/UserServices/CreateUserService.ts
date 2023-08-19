import * as Yup from 'yup'
import User from '../../models/User';

interface Request {
  email: string;
  username: string;
  password: string;
}

interface Response {
  email: string;
  username: string;
  id: number;
}

const CreateUserService = async({
  email,
  username,
  password
}: Request): Promise<User> => {
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
    throw new Error(`Error validating schema: ${err}`)
  }

  const user = await User.create(
    {
      email,
      username,
      password
    }
  )

  return user
}

export default CreateUserService
