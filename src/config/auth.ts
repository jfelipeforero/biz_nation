require('dotenv').config();

export default {
  secret: process.env.JWT_SECRET || "mysecret",
  expiresIn: process.env.EXPIRE_TIME || "20m",
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  refreshExpiresIn: process.env.REFRESH_EXPIRE_TIME || "5d"
};

