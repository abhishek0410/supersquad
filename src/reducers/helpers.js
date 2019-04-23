import characters_json from "data/characters.json";

const createCharacterByID = id => {
  const hero = characters_json.find(character => character.id === id);
  return hero;
};

export default createCharacterByID;
