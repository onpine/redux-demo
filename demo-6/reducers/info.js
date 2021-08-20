/*InfoReducer，一个子reducer*/
/*注意：InfoReducer 接收的 state 是 state.info*/

let initState = {
  name: "onpine",
  description: "前端爱好者！",
};

function InfoReducer(state, action) {
  if (!state) {
    state = initState;
  }

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
