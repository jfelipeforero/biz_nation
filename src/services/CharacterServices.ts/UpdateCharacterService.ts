import Character from "../../models/Character";
import * as Yup from 'yup'
import ShowCharacterService from "./ShowCharacterService";

interface CharacterData {
  image?: string;
  name?: string;
  age?: string;
  weight?: string;
  history?: string;
  movieshowIds?: number[];
}

interface Request {
  characterData: CharacterData;
  characterId: string
}

const UpdateCharacterService = async({
  characterId,
  characterData
}: Request): Promise<Character> => {
  const character = await ShowCharacterService(characterId)
  console.log(character)

  const schema = Yup.object().shape({
    image: Yup.string().required().min(2), 
    name: Yup.string() 
    .required()
    .min(2)
    .trim()
    .test(
      "Check-name",
      "A character with the same name already exists.",
      async value => {
        if (!value) return false;
        const nameExists = await Character.findOne({
          where: { name: value }
        });
        return !nameExists;
      }
    ),
    age: Yup.number().required().integer().required().min(1),
    weight: Yup.number().required(), 
    history: Yup.string().required().min(10),
    
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

export default UpdateCharacterService
