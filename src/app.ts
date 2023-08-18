import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routerApi } from './routes';
//import cookieSession from 'cookie-session';
//import { errorHandler } from './common/middlewares/error-handler';
//import { NotFoundError } from './common/errors/not-found-error';
//import { currentUser } from './common/middlewares/current-user'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//app.use(currentUser);

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello I'm debbi");
});

routerApi(app);

app.all('*', async (req, res) => {
  throw new Error();
});

//app.use(errorHandler);

export { app };

