import createCharacterByID from "./helpers";

const reducer_heros = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      const heros_after_addition = [...state, createCharacterByID(action.id)];
      return heros_after_addition;

    case "DELETE_CHARACTER":
      //console.log("Inside DELETE_CHARACTER  and the id is ", action.id);
      const heros_after_deletion = state.filter(hero => hero.id !== action.id);
      //  console.log("heros_after_deletion :", heros_after_deletion);
      return heros_after_deletion;
    default:
      return state;
  }
};

export default reducer_heros;
