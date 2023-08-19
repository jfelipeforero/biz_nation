import Character from "../../models/Character";

const DeleteCharacterService = async( id: string | number ): Promise<Character> => {
  const character = await Character.findOne({
    where: { id }
  });

  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  await character.destroy();

  return character
};

export default DeleteCharacterService
