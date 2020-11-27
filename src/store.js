import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import rootReducer from "./redux/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// export default function configureStore(initialState = {}) {
const configureStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
// }

export default configureStore;