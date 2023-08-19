import Character from "../../models/Character";
import * as Yup from 'yup'
import MovieShow from "../../models/MovieShow";

interface Request {
  image: string;
  title: string;
  releaseDate: string;
  rating: string;
  charactersIds?: number[]; 
}

const CreateService = async({
  image,
  title,
  releaseDate,
  rating, 
  charactersIds = []
}: Request): Promise<MovieShow> => {
  const schema = Yup.object().shape({
    image: Yup.string().required().min(2), 
    title: Yup.string().required().min(2),
    releaseDate: Yup.date(),
    rating: Yup.number(), 
  })

  try {
    await schema.validate({ image, title, releaseDate, rating })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  const movieshow = await MovieShow.create(
    { 
      image,
      title,
      releaseDate,
      rating,
    },
    { include: ["characters"] }
  );

  await movieshow.$set("characters", charactersIds)

  await movieshow.reload()

  return movieshow
}

export default CreateService
