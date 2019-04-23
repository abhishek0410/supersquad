import { combineReducers } from "redux";

import reducer_character from "./characters_reducers";
import reducer_heros from "./heros_reducer";

const reducers = combineReducers({ reducer_character, reducer_heros });

export default reducers;
