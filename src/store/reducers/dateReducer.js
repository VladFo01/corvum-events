const formatDate = date => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
}

const defaultState = {
  startDate: formatDate(new Date("2022-04-20")),
  endDate: formatDate(new Date("2022-04-20")),
};

export const dateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_START_DATE":
      return { ...state, startDate: formatDate(action.payload) };
    case "UPDATE_END_DATE":
      return { ...state, endDate: formatDate(action.payload) };
    default:
      return state;
  }
};