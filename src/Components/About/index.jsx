import React, { useEffect, useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Dialog, IconButton, Typography } from "@mui/material";
import {
  Close as CloseIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import "./style.css";

import poster from "../../assets/pics/st3.jpg";
import vid from "../../assets/promo.mp4";

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
