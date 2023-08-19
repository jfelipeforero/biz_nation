import { Request, Response } from 'express'
import CreateCharacterService from '../services/CharacterServices.ts/CreateCharacterService'
import { StatusCodes } from 'http-status-codes'
import ShowCharacterService from '../services/CharacterServices.ts/ShowCharacterService'
import DeleteCharacterService from '../services/CharacterServices.ts/DeleteCharacterService'
import UpdateCharacterService from '../services/CharacterServices.ts/UpdateCharacterService'

export const createCharacter = async(req: Request, res: Response) => { 
  const { image, name, age, weight, history, movieshowIds } = req.body;
  const result = await CreateCharacterService({ image, name, age, weight, history, movieshowIds })

  return res.status(StatusCodes.OK).json(result)
}

export const updateCharacter = async ( req: Request, res: Response ): Promise<Response> => {
  const { characterId } = req.params
  const characterData = req.body 
  const result = await UpdateCharacterService({ characterId, characterData})

  return res.status(StatusCodes.OK).json(result)
}

export const showCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await ShowCharacterService(id)

  return res.status(StatusCodes.OK).json(character)
}

export const deleteCharacter = async( req: Request, res: Response ) => { 
  const { id } = req.params;
  const character = await DeleteCharacterService(id)

  return res.status(StatusCodes.OK).json(character)
}
