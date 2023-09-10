import React from "react";
import RoomPage from "./Room";
import { AllRooms } from "./RoomData";
import { Grid, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const RoomGrid = ({ room, roomIndex }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { image, title, description, features } = room;
  const isImageLeft = roomIndex % 2 === 0; // Determines if the image is on the left side

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start" // Align items to the top
      direction={isImageLeft ? "row" : "row-reverse"}
      p={2}
      mb={3}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            objectFit: "cover", // Ensure the image covers the container
            maxHeight: "100%", // Limit the image height to the container height
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <Button variant="contained">Load Amenities</Button>
        </div>
      </Grid>
    </Grid>
  );
};
const index = () => {
  return (
    <div>
      <h1>Rooms</h1>
      {AllRooms.map((room, index) => (
        <RoomGrid key={index} room={room} roomIndex={index} />
      ))}
    </div>
  );
};

export default index;
