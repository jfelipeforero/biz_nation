import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";
import Genre from "../../models/Genre";

const GetAllService = async (order?: string): Promise<MovieShow[]> => {
  const movieshow = await MovieShow.findAll({ 
    attributes: [ "image", "title", "releaseDate" ],
    include: [
      { model: Character, as: "characters", attributes: [ "name" ] }, 
      { model: Genre, as: "genre", attributes: [ "name" ]}
    ],    
    order: [ [ 'createdAt', `${order || "ASC"}` ] ],
  });
  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return movieshow;
};

export default GetAllService;

