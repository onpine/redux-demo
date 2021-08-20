/*InfoReducer，一个子reducer*/
/*注意：InfoReducer 接收的 state 是 state.info*/
function InfoReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
}

export default InfoReducer;
