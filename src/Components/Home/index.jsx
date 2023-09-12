import React from "react";
import Navbar from "../Navbar";
import mainImg from "../../assets/mm.jpg";
import Footer from "../Footer";
import { Grid, Typography } from "@mui/material";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const index = () => {
  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${mainImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 5,
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
          <Typography variant="h1" align="center" sx={{ color: "white" }}>
            MM Hotel
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: "white" }}>
            Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
            <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
          </Typography>
        </Grid>
      </Grid>
      <Grid pl={10} pr={10} pb={5}>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          WELCOME
        </Typography>
        <Typography variant="h5" align="center" color="secondary">
          <FaStar color="#FF00FF" /> Nestled in the heart of the city's vibrant
          pulse, MM Hotel offers a prime location just moments away from the
          bustling bus station. Immerse yourself in the dynamic energy of Dire
          Dawa as you embark on effortless journeys to iconic landmarks,
          cultural hotspots, and hidden gems, all conveniently accessible from
          our doorstep. <FaStar color="#FF00FF" />
        </Typography>
      </Grid>
    </div>
  );
};

export default index;
