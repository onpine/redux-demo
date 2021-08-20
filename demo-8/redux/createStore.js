/*增加一个参数 reducer*/
const createStore = function (reducer, initState, rewriteCreateStoreFunc) {
  if (typeof initState === "function") {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    /*请按照我的计划修改 state*/
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    /*刷新一遍 state 的值，新来的 reducer 把自己的默认状态放到 state 树上去*/
    dispatch({ type: Symbol() });
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer,
  };
};

export default createStore;
