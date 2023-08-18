import { app } from './app';
import sequelize from './database';

const port = process.env.PORT || 3000;

const start = async () => {
  sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
  app.listen(port, () => {
    console.log(`My port ${port}`);
  });
};

start();
