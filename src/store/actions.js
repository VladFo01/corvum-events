export const clearValue = () => ({
  type: "UPDATE_VALUE",
  payload: "",
});
export const updateValue = (payload) => ({
  type: "UPDATE_VALUE",
  payload,
});
export const catchError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
export const removeError = () => ({
  type: "SET_ERROR",
  payload: "",
});
export const setEvents = (payload) => ({
  type: "SET_EVENTS",
  payload,
});
export const updateStartDate = (payload) => ({
  type: "UPDATE_START_DATE",
  payload,
});
export const updateEndDate = (payload) => ({
  type: "UPDATE_END_DATE",
  payload,
});
export const showEvents = () => ({
  type: "SET_SHOW_EVENTS",
  payload: "show",
});
export const hideEvents = () => ({
  type: "SET_SHOW_EVENTS",
  payload: "hide",
});
export const expectEvents = () => ({
  type: "SET_SHOW_EVENTS",
  payload: "pending",
});
export const setSearchData = payload => ({
  type: 'SET_SEARCH_DATA',
  payload
});