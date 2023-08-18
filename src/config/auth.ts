require('dotenv').config();

export default {
  secret: process.env.JWT_SECRET || "mysecret",
  expiresIn: "20m",
  refreshSecret: process.env.JWT_REFRESH_SECRET,
  refreshExpiresIn: "5d"
};

