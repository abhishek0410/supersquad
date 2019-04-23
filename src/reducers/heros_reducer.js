import createCharacterByID from "./helpers";

const reducer_heros = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      const heros_added = [...state, createCharacterByID(action.id)];
      return heros_added;
    default:
      return state;
  }
};

export default reducer_heros;
