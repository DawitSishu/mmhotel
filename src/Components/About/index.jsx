import React, { useState } from "react";
import mainImg from "../../assets/mm.jpg";
import hotelmain from "../../assets/mm.jpg";
import { Grid, Typography } from "@mui/material";
import "./style.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import vid from "../../assets/mm.jpg";
import thumbnail from "../../assets/mm.jpg";
import { FaTimes, FaPlay } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaMapMarkerAlt } from "react-icons/fa";

function index() {
  const [isOpen, setIsOpen] = useState(false);

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
            About US
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
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
            <Typography
              variant="h3"
              align="center"
              className="about-text-title"
              color="primary"
            >
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
      <Typography variant="h3" align="center" sx={{ color: "black" }}>
        Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
        <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
      </Typography>
      {!isOpen ? (
        <div className="play-image">
          <img src={thumbnail} alt="Play Video" />

          <div className="play-button-overlay" onClick={handleOpenPopup}>
            <FaPlay />
          </div>
        </div>
      ) : null}
      {isOpen ? (
        <div>
          <div className="popup-overlay">
            <div className="close-icon" onClick={handleClosePopup}>
              <FaTimes style={{ color: "#FF00FF" }} />
            </div>
          </div>
          <div className="video-container">
            <Video
              autoPlay
              loop
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              poster={thumbnail}
            >
              <source src={vid} type="video/mp4" />
            </Video>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default index;
