import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as CharacterService from '../services/CharacterServices'

interface Query {
  name?: any;
  age?: any;
  movie?: any;
  order?: any;
}

export const createCharacter = async(req: Request, res: Response) => { 
  const { image, name, age, weight, history, movieshowIds } = req.body;
  const result = await CharacterService.CreateService({ image, name, age, weight, history, movieshowIds })

  return res.status(StatusCodes.OK).json(result)
}

export const updateCharacter = async ( req: Request, res: Response ): Promise<Response> => {
  const { characterId } = req.params
  const characterData = req.body 
  const result = await CharacterService.UpdateService({ characterId, characterData})

  return res.status(StatusCodes.OK).json(result)
}

export const getByIdCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await CharacterService.GetByIdService(id)

  return res.status(StatusCodes.OK).json(character)
}

export const getAllCharacters = async( req: Request, res: Response ) => {  
  const character = await CharacterService.GetAllService()

  return res.status(StatusCodes.OK).json(character)
}

export const getByQueryCharacters = async( req: Request, res: Response ) => { 
  const { name, age, movie} = req.query as Query
  if(name) {
    const character = await CharacterService.GetByQueryService("name",name)
    return res.status(StatusCodes.OK).json(character)
  }  
  if(age) {
    const character = await CharacterService.GetByQueryService("age",age)
    return res.status(StatusCodes.OK).json(character)
  }  
  if(movie) {
    const character = await CharacterService.GetByQueryService("moviesshows",movie)
    return res.status(StatusCodes.OK).json(character)
  }  
  else {
  return res.status(StatusCodes.BAD_REQUEST).json("Query parameters invalid or missing")
  }
}

export const deleteCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await CharacterService.DeleteService(id)

  return res.status(StatusCodes.OK).json(character)
}
