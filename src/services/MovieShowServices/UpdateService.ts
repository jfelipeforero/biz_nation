import MovieShow from '../../models/MovieShow';
import * as Yup from 'yup'
import GetByIdService from './GetByIdService';

interface MovieShowData {
  image?: string;
  title?: string;
  genreId?: number;
  releaseDate?: string;
  rating?: string; 
  charactersIds?: number[];
}

interface Request {
  movieshowId: string
  movieshowData: MovieShowData;
}

const UpdateService = async({
  movieshowId,
  movieshowData
}: Request): Promise<MovieShow> => {
  const movieshow = await GetByIdService(movieshowId)
  
 const schema = Yup.object().shape({
    image: Yup.string().required().min(2), 
    title: Yup.string().required().min(2),
    genreId: Yup.number(),
    releaseDate: Yup.date(),
    rating: Yup.number().max(5), 
  })

  const { image, title, genreId, releaseDate, rating, charactersIds = [] } = movieshowData;

  try {
    await schema.validate({ image, title, genreId, releaseDate, rating })
  } catch(err) {
    throw new Error(`Error validating schema: ${err}`)
  }

  await movieshow.update(
    { 
      image,
      title,
      genreId,
      releaseDate,
      rating,   
    }
  );

  await movieshow.$set("characters", charactersIds)

  await movieshow.reload()

  return movieshow
}

export default UpdateService
