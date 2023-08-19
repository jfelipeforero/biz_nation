import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as MovieShowService from '../services/MovieShowServices/'

export const createMovieShow = async(req: Request, res: Response) => { 
  const { image, title, releaseDate, rating, charactersIds } = req.body;
  const result = await MovieShowService.CreateService({ image, title, releaseDate, rating, charactersIds })

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
  const { order } = req.query; 
  if(typeof order !== "string"){
    return res.status(StatusCodes.BAD_REQUEST).json("Query param 'order' has to be of type string")
  } 
  const movieshow = await MovieShowService.GetAllService(order)
  return res.status(StatusCodes.OK).json(movieshow) 
}

export const getMovieShowByParam = async( req: Request, res: Response ) => { 
  console.log(req.query)
  const { query } = req.query;
  if(typeof query !== "string"){
    return res.status(StatusCodes.BAD_REQUEST).json(`Query param '${query}' has to be of type string`)
  } 
  const movieshow = await MovieShowService.GetByQueryService(query)
  return res.status(StatusCodes.OK).json(movieshow)
}

export const deleteMovieShow = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const movieshow = await MovieShowService.DeleteService(id)

  return res.status(StatusCodes.OK).json(movieshow)
}
