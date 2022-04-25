const defaultState = {
  inputValue: "",
  events: [],
  searchData: [],
  showEventStatus: false,
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return { ...state, inputValue: action.payload };
    case "SET_EVENTS":
      return { ...state, events: action.payload };
    case "SET_SEARCH_DATA":
      return {...state, searchData: action.payload};
    case "SET_SHOW_EVENTS":
      return {...state, showEventStatus: action.payload};
    default:
      return state;
  }
};
