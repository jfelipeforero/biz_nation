import Character from "../../models/Character";
import * as Yup from 'yup'
import GetByIdService from "./GetByIdService";

interface CharacterData {
  image?: string;
  name?: string;
  age?: string;
  weight?: string;
  history?: string;
  movieshowIds?: number[];
}

interface Request {
  characterId: number | string;
  characterData: CharacterData;
}

const UpdateService = async({
  characterId,
  characterData
}: Request): Promise<Character> => {
  const character = await GetByIdService(characterId)
  console.log(character)

  const schema = Yup.object().shape({
    image: Yup.string().min(2), 
    name: Yup.string().min(2),
    age: Yup.number().integer().min(1),
    weight: Yup.number() ,
    history: Yup.string().min(10),
    
  })

  const { image, name, age, weight, history, movieshowIds = [] } = characterData;

  try {
    await schema.validate({ image, name, age, weight, history })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  await character.update(
    { 
      image,
      name,
      age,
      weight,
      history 
    }
  );

  await character.$set("moviesshows", movieshowIds)

  await character.reload()

  return character
}

export default UpdateService
