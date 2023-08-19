require('dotenv').config();

export default {
  database: process.env.MYSQL_DATABASE || "disneyapi",
  dialect: process.env.MYSQL_DRIVER || "mysql", 
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
};
