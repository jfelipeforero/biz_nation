import User from "../models/User";

interface SerializedUser {
  id: number;
  name: string;
  email: string;
}

export const SerializeUser = (user: User): SerializedUser => {
  return {
    id: user.id,
    name: user.username,
    email: user.email,  
  };
};

