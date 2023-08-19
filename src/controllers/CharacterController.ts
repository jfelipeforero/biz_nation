import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as CharacterService from '../services/CharacterServices'

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

export const getAllCharacters = async( req: Request, res: Response ) => { 
  const { order } = req.query;
  if(typeof order !== "string"){
    return res.status(StatusCodes.BAD_REQUEST).json("Query param 'order' has to be of type string")
  } 
  const character = await CharacterService.GetAllService(order)
  return res.status(StatusCodes.OK).json(character)
}

export const getByQueryCharacters = async( req: Request, res: Response ) => { 
  const { query } = req.query;
  if(typeof query !== "string"){
    return res.status(StatusCodes.BAD_REQUEST).json(`Query param '${query}' has to be of type string`)
  } 
  const character = await CharacterService.GetByQueryService(query)

  return res.status(StatusCodes.OK).json(character)
}

export const getByIdCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await CharacterService.GetByIdService(id)

  return res.status(StatusCodes.OK).json(character)
}

export const deleteCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await CharacterService.DeleteService(id)

  return res.status(StatusCodes.OK).json(character)
}
