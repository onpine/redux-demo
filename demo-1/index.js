import createStore from "./createStore.js";
// const createStore = require("./createStore");

let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: "",
    description: "",
  },
};

let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}：${state.info.description}`);
});

store.changeState({
  ...store.getState(),
  info: {
    name: "onpine",
    description: "前端程序员",
  },
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1,
  },
});
