import MovieShow from "../../models/MovieShow";

const DeleteService = async( id: string | number ): Promise<MovieShow> => {
  const movieshow = await MovieShow.findOne({
    where: { id }
  });

  if (!movieshow) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  await movieshow.destroy();

  return movieshow
};

export default DeleteService
