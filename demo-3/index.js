import combineReducers from "./combineReducers.js";
import CounterReducer from "./reducers/counter.js";
import InfoReducer from "./reducers/info.js";
import createStore from "./createStore.js";

const reducer = combineReducers({
  counter: CounterReducer,
  info: InfoReducer,
});

let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: "onpine",
    description: "前端爱好者！",
  },
};

let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});
/*自增*/
store.dispatch({
  type: "INCREMENT",
});

/*修改 name*/
store.dispatch({
  type: "SET_NAME",
  name: "sunshine",
});
