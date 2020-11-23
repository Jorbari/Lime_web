import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import rootReducer from "./redux/rootReducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// export default function configureStore(initialState = {}) {
  const  configureStore =  createStore(rootReducer, applyMiddleware(...middlewares));
// }

export default configureStore;