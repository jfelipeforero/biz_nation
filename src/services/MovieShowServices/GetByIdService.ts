import MovieShow from "../../models/MovieShow";
import Character from "../../models/Character";

const GetByIdService = async (id: (string | number)): Promise<MovieShow> => {
  const movieshow = await MovieShow.findByPk(id, {
    attributes: [ "image", "title", "releaseDate", "rating" ],
    include: [
      { model: Character, as: "characters", attributes: [ "name" ] }, 
    ],
  });
  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  return movieshow;
};

export default GetByIdService

