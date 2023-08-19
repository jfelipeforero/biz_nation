import Character from "../../models/Character";
import MovieShow from "../../models/MovieShow";

const ShowCharacterService = async (id: string | number): Promise<Character> => {
  const character = await Character.findByPk(id, {
    attributes: [ "image", "name", "age", "weight", "history" ],
    include: [
      { model: MovieShow, as: "moviesshows", attributes: [ "title" ] }, 
    ]  
  });
  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return character;
};

export default ShowCharacterService;

