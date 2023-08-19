import CreateGenreService  from '../services/GenreServices/CreateGenreService'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const createGenre = async(req: Request, res: Response) => {  
  const { name, image } = req.body;
  const result = await CreateGenreService({ name, image })
  res.status(StatusCodes.OK).json(result)
}

export const getAllGenres = async(req: Request, res: Response) => { 
  const { name, image } = req.body;
  const result = await CreateGenreService({ name, image })
  res.status(StatusCodes.OK).json(result)
}
