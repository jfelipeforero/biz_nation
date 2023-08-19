import Character from "../../models/Character";

const DeleteService = async( id: string | number ): Promise<Character> => { 
  const character = await Character.findByPk(id);

  if (!character) {
    throw new Error("ERR_NO_USER_FOUND");
  }

  await character.destroy();

  return character
};

export default DeleteService
