const defaultState = {
  startDate: new Date("2022-04-20T00:00:00Z"),
  endDate: new Date("2022-04-20T20:00:00Z"),
};

export const dateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_START_DATE":
      return { ...state, startDate: new Date(action.payload) };
    case "UPDATE_END_DATE":
      return { ...state, endDate: new Date(action.payload) };
    default:
      return state;
  }
};