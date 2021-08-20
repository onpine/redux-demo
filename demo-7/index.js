import combineReducers from "./redux/combineReducers.js";
import createStore from "./redux/createStore.js";
import applyMiddleware from "./redux/applyMiddleware.js";

import CounterReducer from "./reducers/counter.js";
import InfoReducer from "./reducers/info.js";

import exceptionMiddleware from "./middlewares/exceptionMiddleware.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import timeMiddleware from "./middlewares/timeMiddleware.js";

const reducer = combineReducers({
  counter: CounterReducer,
  info: InfoReducer,
});

const newCreateStore = applyMiddleware(
  exceptionMiddleware,
  timeMiddleware,
  loggerMiddleware
)(createStore);

const store = newCreateStore(reducer);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/*自增*/
store.dispatch({
  type: "INCREMENT",
});
