import { setEvents, catchError, setSearchData } from "./actions";

const apiKey = process.env.REACT_APP_API_KEY || '';

export const fetchEvents = (queries = '', type = 'show') => {
  return function (dispatch) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}${queries}`)
      .then((response) => response.json())
      .then((data) => {
        if (type === 'search') {
          dispatch(setSearchData(data._embedded.events));
        } else {
          dispatch(setEvents(data._embedded.events));
        }
      })
      .catch((e) => dispatch(catchError(e.message)));
  };
};