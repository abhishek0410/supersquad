import characters_json from "data/characters.json";
const reducer_character = (state = characters_json, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      let characters = state.filter(item => item.id !== action.id);
      return characters;

    default:
      return state;
  }
};

export default reducer_character;
