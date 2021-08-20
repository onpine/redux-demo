/*counterReducer, 一个子reducer*/
/*注意：counterReducer 接收的 state 是 state.counter*/

let initState = {
  count: 0,
};

function CounterReducer(state, action) {
  if (!state) {
    state = initState;
  }

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export default CounterReducer;
