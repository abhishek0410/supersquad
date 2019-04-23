import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "reducers";
import { action_addCharacterById } from "actions";

const store = createStore(reducers);
console.log("Intial state of the store is : ", store.getState());

// Track changes in the store reducer :
store.subscribe(() => console.log("store : ", store.getState()));
store.dispatch(action_addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
