import React, { useState } from "react";
import Navbar from "../Navbar";
import mainImg from "../../assets/mm.jpg";
import Footer from "../Footer";
import { Grid, Typography, Divider, Box, Button, Paper } from "@mui/material";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <Grid pl={10} pr={10} pb={3}>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          WELCOME
        </Typography>
        <Typography variant="body2" align="center">
          <FaStar color="#FF00FF" /> Nestled in the heart of the city's vibrant
          pulse, MM Hotel offers a prime location just moments away from the
          bustling bus station. Immerse yourself in the dynamic energy of Dire
          Dawa as you embark on effortless journeys to iconic landmarks,
          cultural hotspots, and hidden gems, all conveniently accessible from
          our doorstep. <FaStar color="#FF00FF" />
        </Typography>
        <Divider
          sx={{
            marginTop: 2,
            width: "30%",
            height: "2px",
            margin: "20px auto",
            backgroundColor: "#FF00FF",
          }}
        />
      </Grid>
      <Grid container spacing={2} pl={2} pr={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={mainImg} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Rooms</Typography>
              <br />
              <Link to="/rooms">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={mainImg} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Awards</Typography>
              <br />
              <Link to="/honors">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={mainImg} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Gallery</Typography>
              <br />
              <Link to="/gallery">
                <Button
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  continue
                  <span style={{ marginLeft: "5px" }} />
                  <IoIosArrowForward color="white" />
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box>
        <Grid container justifyContent="center" spacing={2} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" color="primary">
              Our Facilities
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" align="center">
                To meet your every need, our hotel provides tailored and unique
                experiences, as well as individual concierge services. Our crew
                is dedicated to assuring your entire happiness, allowing you to
                unwind and enjoy every second of your stay. Explore our unique
                packages for a memorable luxury vacation experience now.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <br />
      <br />
      <br />
      <div></div>
    </div>
  );
};

export default index;
