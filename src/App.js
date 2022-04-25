import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Event from "./pages/Event";
import { useDispatch } from "react-redux";
import {fetchEvents} from './store/asyncActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents('&size=50', 'search'));
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
};

export default App;