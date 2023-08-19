import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as MovieShowService from '../services/MovieShowServices/'

interface Query {
  title?: any;
  genre?: any;
  order?: any;
}

export const createMovieShow = async(req: Request, res: Response) => { 
  const { image, title, genreId, releaseDate, rating, charactersIds } = req.body;
  const result = await MovieShowService.CreateService({ image, title, genreId, releaseDate, rating, charactersIds })

  return res.status(StatusCodes.OK).json(result)
}

export const updateMovieShow = async ( req: Request, res: Response ): Promise<Response> => {
  const { movieshowId } = req.params
  const movieshowData = req.body 
  const result = await MovieShowService.UpdateService({ movieshowId, movieshowData}) 

  return res.status(StatusCodes.OK).json(result)
}

export const getMovieShowById = async( req: Request, res: Response ) => { 
  const { id } = req.params; 
  const movieshow = await MovieShowService.GetByIdService(id)
  return res.status(StatusCodes.OK).json(movieshow) 
}

export const getAllMovieShow = async( req: Request, res: Response ) => { 
  const { order } = req.query as Query; 
  if(order) {
    const movieshow = await MovieShowService.GetAllService(order)
    return res.status(StatusCodes.OK).json(movieshow) 
  }
  else {
    const movieshow = await MovieShowService.GetAllService()
    return res.status(StatusCodes.OK).json(movieshow) 
  }
}

export const getByQueryMovieShow = async( req: Request, res: Response ) => { 
  const { title, genre } = req.query as Query
  if(title) {
    const movieshow = await MovieShowService.GetByQueryService("title",title)
    return res.status(StatusCodes.OK).json(movieshow)
  }  
  if(genre) {
    const movieshow = await MovieShowService.GetByQueryService("genre",genre)
    return res.status(StatusCodes.OK).json(movieshow)
  }  
  else {
  return res.status(StatusCodes.BAD_REQUEST).json("Query parameters invalid or missing")
  }
}
export const deleteMovieShow = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const movieshow = await MovieShowService.DeleteService(id)

  return res.status(StatusCodes.OK).json(movieshow)
}
