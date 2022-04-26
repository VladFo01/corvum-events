import React from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Link
} from "@mui/material";
import { useSelector } from "react-redux";

const Cards = () => {
  const events = useSelector((state) => state.search.events);

  return (
    <Grid container spacing={2} mt="30px">
      {events.map((event) => (
        <Grid item key={event.id} xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight={"bold"} component="h6">
            {event.name}
          </Typography>
          <CardMedia
            component="img"
            image={event.images.find(
              (image) => image.ratio === "3_2" && image.width === 305
            ).url}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body2" component="span">
              {`Time: ${event?.dates.start.localDate}, ${event?.dates.start.localTime}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={event.url} underline="hover" textTransform={"uppercase"}>
              Learn more
            </Link>
          </CardActions>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;