import combineReducers from "./combineReducers.js";
import CounterReducer from "./reducers/counter.js";
import InfoReducer from "./reducers/info.js";
import createStore from "./createStore.js";

import exceptionMiddleware from "./middlewares/exceptionMiddleware.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import timeMiddleware from "./middlewares/timeMiddleware.js";

const reducer = combineReducers({
  counter: CounterReducer,
  info: InfoReducer,
});

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);

store.dispatch = exception(time(logger(next)));

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/*自增*/
store.dispatch({
  type: "INCREMENT",
});
