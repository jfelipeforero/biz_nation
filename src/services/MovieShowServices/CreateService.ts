import MovieShow from "../../models/MovieShow";
import * as Yup from 'yup'

interface Request {
  image: string;
  title: string;
  genreId: number;
  releaseDate: string;
  rating: string;
  charactersIds?: number[]; 
}

const CreateService = async({
  image,
  title,
  genreId,
  releaseDate,
  rating, 
  charactersIds = []
}: Request): Promise<MovieShow> => {
  const schema = Yup.object().shape({
    image: Yup.string().required().min(2), 
    title: Yup.string().required().min(2),
    genreId: Yup.number(),
    releaseDate: Yup.date().required(),
    rating: Yup.number().required().positive().max(5), 
  })

  try {
    await schema.validate({ image, title, genreId, releaseDate, rating })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  const movieshow = await MovieShow.create(
    { 
      image,
      title,
      genreId,
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
