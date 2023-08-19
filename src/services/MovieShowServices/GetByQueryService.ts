import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";

const GetByQueryService = async (queryParam: string ): Promise<MovieShow[]> => {
  const movieshow = await MovieShow.findAll({
    where: {
      queryParam 
    },
    include: [
      { model: Character, as: "characters", attributes: [ "name" ] }, 
    ],
  });
  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return movieshow;
};

export default GetByQueryService;

