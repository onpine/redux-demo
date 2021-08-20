import combineReducers from "./redux/combineReducers.js";
import createStore from "./redux/createStore.js";
import applyMiddleware from "./redux/applyMiddleware.js";
import bindActionCreators from "./redux/bindActionCreators.js";

import CounterReducer from "./reducers/counter.js";
import InfoReducer from "./reducers/info.js";

import exceptionMiddleware from "./middlewares/exceptionMiddleware.js";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import timeMiddleware from "./middlewares/timeMiddleware.js";

const reducer = combineReducers({
  counter: CounterReducer,
});

const rewriteCreateStoreFunc = applyMiddleware(
  exceptionMiddleware,
  timeMiddleware,
  loggerMiddleware
);

// const store = createStore(reducer, {}, rewriteCreateStoreFunc);
const store = createStore(reducer, rewriteCreateStoreFunc);

const nextReducer = combineReducers({
  counter: CounterReducer,
  info: InfoReducer,
});

store.replaceReducer(nextReducer);

const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});

// 退订
unsubscribe();

/*返回 action 的函数就叫 actionCreator*/
function increment() {
  return {
    type: "INCREMENT",
  };
}

function setName(name) {
  return {
    type: "SET_NAME",
    name: name,
  };
}

const actions = bindActionCreators({ increment, setName }, store.dispatch);

// const actions = {
//   increment: function () {
//     return store.dispatch(increment.apply(this, arguments));
//   },
//   setName: function () {
//     return store.dispatch(setName.apply(this, arguments));
//   },
// };

actions.increment();
actions.setName("sunshine");
