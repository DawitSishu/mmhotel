import React, { useEffect, useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Dialog, IconButton, Typography } from "@mui/material";
import {
  Close as CloseIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import "./style.css";

import poster from "../../assets/mm.jpg";
import vid from "../../assets/mm.jpg";

import mainImg from "../../assets/pics/main.jpg";
import hotelmain from "../../assets/pics/about2.jpg";
import { Grid } from "@mui/material";
import thumbnail from "../../assets/pics/tum.jpg";
import { FaTimes, FaPlay } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaMapMarkerAlt } from "react-icons/fa";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // sx={{
        //   position: "relative",
        //   // minHeight: "10vh", // Decrease the height to half (50% of viewport height)
        //   // backgroundImage: `url(${mainImg})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ textAlign: "center" }} // Add padding to center content
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ fontWeight: "bold" }}
            color="#FF00FF"
          >
            About US
          </Typography>
        </Grid>
        
      </Grid>
      {/* <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "relative",
            backgroundColor: "#FF00FF",
            minHeight: "15vh",
          }}
        >
          <Grid item justifyContent="center">
            <Typography variant="h1" align="center" color="primary">
              About US
            </Typography>
            <br />
          </Grid>
        </Grid> */}
      {/* <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="3 0 598.5 39.41"
          style={{
            transform: "rotate(360deg)",
            width: "100%", 
            height: "100%",
          }}
        >
          <g fill="#394757" stroke="#FF00FF">
            <path
              d="M 15.500 6.942 C 22.100 10.127 27.838 12.542 28.250 12.308 C 28.663 12.073 29.000 12.306 29.000 12.824 C 29.000 13.343 29.788 14.006 30.750 14.297 C 31.713 14.589 37.788 17.072 44.250 19.815 C 50.713 22.558 56.000 24.567 56.000 24.279 C 56.000 23.991 56.563 24.201 57.250 24.745 C 58.550 25.775 68.751 29.447 70.500 29.514 C 71.050 29.535 71.950 29.830 72.500 30.169 C 74.247 31.246 87.211 34.816 95.500 36.503 C 108.401 39.129 113.419 39.506 134.000 39.396 C 149.992 39.311 155.378 38.896 163.938 37.089 C 169.679 35.877 174.835 34.602 175.396 34.255 C 175.957 33.909 177.334 33.522 178.458 33.396 C 179.581 33.270 181.625 32.733 183.000 32.203 C 184.375 31.673 185.725 31.213 186.000 31.180 C 187.114 31.046 209.307 22.927 210.363 22.268 C 210.988 21.876 211.955 21.487 212.511 21.402 C 213.067 21.317 217.865 19.856 223.173 18.155 C 240.120 12.727 246.573 11.566 260.000 11.532 C 276.952 11.489 280.479 12.031 304.000 18.301 C 311.425 20.281 318.625 22.107 320.000 22.361 C 321.375 22.614 323.175 23.065 324.000 23.363 C 325.973 24.076 330.452 24.887 342.000 26.620 C 353.572 28.357 369.192 27.590 386.000 24.458 C 387.375 24.202 389.625 23.830 391.000 23.631 C 398.351 22.570 407.453 20.838 408.245 20.349 C 408.741 20.042 410.352 19.682 411.824 19.550 C 413.296 19.418 419.675 18.564 426.000 17.652 C 445.229 14.880 452.704 14.474 472.656 15.121 C 491.485 15.730 498.556 16.302 532.500 19.962 C 541.850 20.969 550.175 21.815 551.000 21.840 C 551.825 21.866 560.825 23.048 571.000 24.468 C 581.175 25.888 592.088 27.235 595.250 27.461 L 601.000 27.872 601.000 14.436 L 601.000 1.000 302.250 1.075 L 3.500 1.150 15.500 6.942 "
              fill="#FF00FF"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </g>
        </svg> */}

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "-10px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="logo"
        >
          <img
            src={hotelmain}
            alt="logp"
            style={{ width: "75%", height: "80%" }}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: 5,
            }}
            className="about-content-text"
          >
            <Typography variant="h3" align="center" color="primary">
              MM Hotel
            </Typography>
            <Typography variant="body1" align="center">
              Welcome to our hotel, your gateway to Dire Dawa. We are committed
              to providing a seamless and enriching stay that sets the stage for
              your adventures in this vibrant city. Our well-appointed rooms
              offer a comfortable retreat, and our central location provides
              convenient access to popular attractions. Relax and recharge in
              our inviting communal spaces, and let us be your guide to the
              captivating culture and experiences Dire Dawa has to offer. Come
              and stay with us for a memorable journey that will leave you
              wanting more.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h3" align="center">
        Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
        <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
      </Typography>
      <div>
        {!isOpen ? (
          <div className="play-image">
            <img src={poster} alt="Play Video" className="poster-image" />
            <div className="play-button-overlay" onClick={handleOpenPopup}>
              <PlayArrowIcon
                sx={{ fontSize: "80px" }}
                className="play-button-icon"
              />
            </div>
          </div>
        ) : null}
        <Dialog
          open={isOpen}
          onClose={handleClosePopup}
          fullWidth
          maxWidth="lg"
          sx={{ height: "100vh" }}
        >
          <div className="popup-overlay">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClosePopup}
              className="close-button"
              sx={{ position: "fixed", top: "10px", left: "10px" }}
            >
              <CloseIcon sx={{ fontSize: "40px" }} />
            </IconButton>
            <div className="video-container">
              <Video
                autoPlay
                loop
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              >
                <source src={vid} type="video/mp4" />
              </Video>
            </div>
          </div>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}

export default index;
