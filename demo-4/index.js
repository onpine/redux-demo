import combineReducers from "./combineReducers.js";
import CounterReducer from "./reducers/counter.js";
import InfoReducer from "./reducers/info.js";
import createStore from "./createStore.js";

const reducer = combineReducers({
  counter: CounterReducer,
  info: InfoReducer,
});

/**
 * 注意：我们没有传 initState 进去，因为初始化的时候会执行 dispatch({ type: Symbol() });;
 * 触发 state = reducer(state, action)
 * 因为 state 为 undefined，action.type 为不匹配任何计划中 type 的值，所以会返回 reducer 中设置的默认值
 * */
let store = createStore(reducer);

// 看看state初始化的数据
console.log(store.getState());

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
