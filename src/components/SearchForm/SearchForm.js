import {
  Autocomplete,
  FormControl,
  TextField,
  Grid,
  Button,
  FormHelperText,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearValue, updateValue } from "../../store/actions";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { updateStartDate, updateEndDate } from "../../store/actions";
import { fetchEvents } from "../../store/asyncActions";

const SearchForm = ({ startTransition }) => {
  const inputValue = useSelector((state) => state.search.inputValue);
  const startDate = useSelector((state) => state.date.startDate);
  const endDate = useSelector((state) => state.date.endDate);
  const events = useSelector((state) => state.search.searchData);
  let searchData = events.map((event) => event?._embedded.venues[0].city.name);
  searchData = [...new Set(searchData)].sort();
  const error = useSelector((state) => state.error.error);
  const dispatch = useDispatch();

  function onChangeHandler(event) {
    dispatch(updateValue(event.target.value));
  }

  function onAutocompleteHandler(event, value) {
    dispatch(updateValue(value));
  }

  function onDataChangeHandler(action, event) {
    dispatch(action(new Date(event)));
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    dispatch(clearValue());
    startTransition(() => {
      dispatch(
        fetchEvents(
          `&startDateTime=${startDate}&endDateTime=${endDate}&city=${inputValue}`
        )
      );
    });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl fullWidth error={Boolean(error)} variant={"standard"}>
        <Grid container spacing={2} mt="35px" alignItems="center">
          <Grid item xs={9}>
            <Autocomplete
              freeSolo
              options={searchData}
              inputValue={String(inputValue)}
              onInputChange={onAutocompleteHandler}
              onChange={onChangeHandler}
              loading={!events.toString()}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" type="submit" size="large">
              Search event
            </Button>
          </Grid>
          <Grid item xs={12} alignSelf="center">
            <FormHelperText>{error}</FormHelperText>
          </Grid>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={3} mt="20px" justifyContent={"center"}>
            <Grid item md={4} xs={10}>
              <DesktopDatePicker
                label="Start date"
                inputFormat="MM/dd/yyyy"
                value={startDate}
                onChange={onDataChangeHandler.bind(null, updateStartDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item md={4} xs={10}>
              <DesktopDatePicker
                label="End date"
                inputFormat="MM/dd/yyyy"
                value={endDate}
                onChange={onDataChangeHandler.bind(null, updateEndDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </FormControl>
    </form>
  );
};

export default SearchForm;
