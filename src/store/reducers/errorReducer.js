const defaultState = {
  error: ''
};

export const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {...state, error: action.payload};
    default:
      return state;
  }
};