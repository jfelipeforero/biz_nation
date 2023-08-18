import { Sequelize } from 'sequelize-typescript'
import User from '../models/User'
import Genre from '../models/Genre'

//const dbConfig = require("../config/database")

const sequelize = new Sequelize({
  database: 'disneyapi',
  dialect: 'mysql', 
  username: 'root',
  password: 'password',
  host: '127.0.0.1', 
})

const models = [
  Genre
];


sequelize.addModels(models);

sequelize.sync()

export default sequelize;
