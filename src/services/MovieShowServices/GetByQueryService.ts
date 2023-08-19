import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";
import Genre from "../../models/Genre";

const GetByQueryService = async (field:string, queryParam: string): Promise<MovieShow[]> => {
  const movieshow = await MovieShow.findAll({
    where: {
      [field]: queryParam,
    },
    include: [
      { model: Character, as: "characters", attributes: [ "name" ] }, 
      { model: Genre, as: "genre", attributes: [ "name" ]}
    ],
  });
  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return movieshow;
};

export default GetByQueryService;

