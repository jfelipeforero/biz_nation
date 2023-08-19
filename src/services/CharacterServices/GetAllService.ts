import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";

const GetAllService = async (order: string): Promise<Character[]> => {
  const character = await Character.findAll({ 
    attributes: [ "image", "name", "age", "weight", "history" ],
    include: [
      { model: MovieShow, as: "moviesshows", attributes: [ "title" ] }, 
    ],    
    order: [ [ 'createdAt', `${order || "ASC"}` ] ],
  });
  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return character;
};

export default GetAllService;

