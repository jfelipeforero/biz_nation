import Character from "../../models/Character";
import * as Yup from 'yup'

interface Request {
  image: string;
  name: string;
  age: number;
  weight: string;
  history: string;
  movieshowIds?: number[];
}

const CreateService = async({
  image,
  name,
  age,
  weight,
  history,
  movieshowIds = []
}: Request): Promise<Character> => {
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
    age: Yup.number().required(),
    weight: Yup.number().required(), 
    history: Yup.string().required().min(10),
  })
  try {
    await schema.validate({ image, name, age, weight, history })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  const character = await Character.create(
    { 
      image,
      name,
      age,
      weight,
      history 
    },
    { include: ["moviesshows"] }
  );

  await character.$set("moviesshows", movieshowIds)

  await character.reload()

  return character
}

export default CreateService
