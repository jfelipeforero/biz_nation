import Character from "../../models/Character";
import MovieShow from "../../models/MovieShow";

const GetByQueryService = async (queryParam: string ): Promise<Character[]> => {
  const character = await Character.findAll({
    where: {
      queryParam 
    },
    include: [
      { model: MovieShow, as: "moviesshows", attributes: [ "title" ] }, 
    ],
  });
  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return character;
};

export default GetByQueryService

