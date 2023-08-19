import Character from "../../models/Character";
import MovieShow from "../../models/MovieShow";

const GetByQueryService = async (field: string, queryParam: string, order?: string ): Promise<Character[]> => {
  if(order) {
    const character = await Character.findAll({
      where: {
        [field]: queryParam
      },
      include: [
        { model: MovieShow, as: "moviesshows", attributes: [ "title" ] }, 
      ],
      order: [ "createdAt", order ],
    });
    if (!character) {
      throw new Error("ERR_NO_USER_FOUND");
    }
    return character
  }else {
    const character = await Character.findAll({
      where: {
        [field]: queryParam
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
}
export default GetByQueryService

