import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";

const GetAllService = async (): Promise<Character[]> => {
  const character = await Character.findAll({ 
    attributes: [ "image", "name" ],
    include: [
      { model: MovieShow, as: "moviesshows", attributes: [ "title" ] }, 
    ],     
  });
  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return character;
};

export default GetAllService;

