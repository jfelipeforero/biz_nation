import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";

const GetAllService = async (order: string): Promise<MovieShow[]> => {
  const movieshow = await MovieShow.findAll({ 
    attributes: [ "image", "title", "releaseDate", "rating" ],
    include: [
      { model: Character, as: "characters", attributes: [ "name" ] }, 
    ],    
    order: [ [ 'createdAt', `${order || "ASC"}` ] ],
  });
  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return movieshow;
};

export default GetAllService;

