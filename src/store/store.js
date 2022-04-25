import { configureStore } from "@reduxjs/toolkit";
import { dateReducer } from "./reducers/dateReducer";
import { errorReducer } from "./reducers/errorReducer";
import { searchReducer } from "./reducers/searchReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    search: searchReducer,
    error: errorReducer,
    date: dateReducer,
  },
  middleware: [thunk]
});

export default store;
