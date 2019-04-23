const action_addCharacterById = id => {
  const action = {
    type: "ADD_CHARACTER",
    id: id
  };
  return action;
};

export { action_addCharacterById };
