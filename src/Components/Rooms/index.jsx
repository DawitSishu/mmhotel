import React, { useState } from "react";
import RoomPage from "./Room";
import { AllRooms } from "./RoomData";
import { Grid, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar";
import mainImg from "../../assets/mm.jpg";
import Footer from "../Footer";

const RoomGrid = ({ room, roomIndex, open }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { image, title, description, features } = room;
  const isImageLeft = roomIndex % 2 === 0;

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
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
        <Grid ml={3}>
          <Typography variant="h3" align="center">
            {title}
          </Typography>
          <Typography variant="p">{description}</Typography>
          <br />
          <Button
            variant="contained"
            sx={{ marginTop: 4 }}
            onClick={() => open(room)}
          >
            Load Amenities
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
const index = () => {
  const [data, setdata] = useState(null);

  const handleOpen = (roomdt) => {
    setdata(roomdt);
  };

  const imgAction = () => {
    setdata(null);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {!data ? (
        <Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "relative",
              minHeight: "50vh",
              backgroundImage: `url(${mainImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(0.5px)",
              }}
            ></div>
            <Grid item justifyContent="center" zIndex={1}>
              <Typography variant="h3" align="center" color="#fff">
                Experience the perfect retreat for your getaway, where comfort,
                style, and impeccable service await in our exquisite rooms.
              </Typography>
            </Grid>
          </Grid>
          {AllRooms.map((room, index) => (
            <RoomGrid
              key={index}
              room={room}
              roomIndex={index}
              open={handleOpen}
            />
          ))}
        </Grid>
      ) : (
        <Grid
          sx={{
            width: "100vw",
            height: "100vh",
            background: "transparent",
            backdropFilter: "blur(25px)",
            overflowX: "hidden",
          }}
        >
          <IconButton
            onClick={() => imgAction()}
            sx={{
              position: "absolute",
              right: "7%",
              top: "7%",
              backgroundColor: "#ffe8ff",
            }}
          >
            <CloseIcon sx={{ color: "purple", fontSize: "2.5rem" }} />
          </IconButton>
          <RoomPage roomData={data} />
        </Grid>
      )}
      <Footer />
    </div>
  );
};

export default index;
