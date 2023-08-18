import { Request, Response } from 'express'
import CreateGenreService  from '../services/GenreServices/CreateGenreService'
import Genre from '../models/Genre'
import { StatusCodes } from 'http-status-codes'

export const createCharacter = async(req: Request, res: Response) => {
  console.log(req.body)
  const { name, image, movieshow } = req.body;
  const result = await CreateGenreService({ name, image, movieshow })
  res.status(StatusCodes.OK).json(result)
}

