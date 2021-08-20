import createStore from "./createStore.js";
import reducer from "./reducer.js";

let initState = {
  count: 0,
};
/*把reducer函数*/
let store = createStore(reducer, initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});
/*自增*/
store.dispatch({
  type: "INCREMENT",
});
/*自减*/
store.dispatch({
  type: "DECREMENT",
});
/*我想随便改 计划外的修改是无效的！*/
store.dispatch({
  count: "abc",
});
