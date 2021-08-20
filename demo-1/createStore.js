function createStore(initState) {
  let state = initState;
  let listeners = [];

  /* 订阅 */
  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(newState) {
    state = newState;
    /* 通知订阅者 */
    for (let index = 0; index < listeners.length; index++) {
      const listener = listeners[index];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState,
  };
}

export default createStore;
