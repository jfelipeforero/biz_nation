import Genre from "../../models/Genre";
import * as Yup from 'yup'

interface Request {
  name: string;
  image: string; 
}

const CreateService = async({
  name,
  image, 
}: Request): Promise<Genre> => {
  const schema = Yup.object().shape({
    name: Yup.string().required().min(2),
    image: Yup.string().required().min(2), 
  })

  try {
    await schema.validate({ name, image })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  const genre = await Genre.create(
    { 
      name,
      image, 
    }, 
  );

  return genre
}

export default CreateService
