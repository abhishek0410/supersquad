const action_addCharacterById = id => {
  const action = {
    type: "ADD_CHARACTER",
    id: id
  };
  return action;
};

const action_deleteCharacterById = id => {
  const action = {
    type: "DELETE_CHARACTER",
    id: id
  };
  return action;
};

export { action_addCharacterById, action_deleteCharacterById };
