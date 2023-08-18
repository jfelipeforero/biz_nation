import Genre from "../../models/Genre";

interface Request {
  name: string;
  image: string;
  movieshow: string;
}

const CreateGenreService = async({
  name,
  image,
  movieshow,
}: Request): Promise<Genre> => {
  //const exists = await Genre.findOne()
  //if(exists) {
   // console.log("it already exists")
  //} 

  const genre = Genre.create({
    name,
    image,
    movieshow
  })
  return genre
}

export default CreateGenreService;
