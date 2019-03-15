import React from "react";
import ReactDOM from "react-dom";

import App from "./component/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { fetchMemes } from "./actions";
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("store", store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
