import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routerApi } from './routes';
import cookieParser from "cookie-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors());

app.use(cookieParser())

routerApi(app);

app.all('*', async (req: Request, res: Response) => {
  throw new Error();
});

export { app };

