import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import mainImg from "../../assets/pics/newmain.jpg";
import srv from "../../assets/pics/eb6.jpg";
import about from "../../assets/pics/st3.jpg";
import room from "../../assets/pics/vip1.jpg";
import g1 from "../../assets/pics/bar.jpg";
import g2 from "../../assets/pics/mor.jpg";
import g3 from "../../assets/pics/p3.jpg";
import Footer from "../Footer";
import { Grid, Typography, Divider, Box, Button } from "@mui/material";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./style.css";
import { IoIosArrowForward } from "react-icons/io";
import { BiRestaurant } from "react-icons/bi";
import { MdRoomService,MdLocalLaundryService } from "react-icons/md";
// MdRoomService
import { FaDumbbell, FaGlassMartini, FaHotTub, FaWifi,FaUsers } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ts from "../../assets/pics/ts.png";
import ts2 from "../../assets/pics/ts2.png";
import ts3 from "../../assets/pics/ts3.jpg";
import ts4 from "../../assets/pics/ts4.png";
import ts5 from "../../assets/pics/ts5.png";
import ts6 from "../../assets/pics/ts6.jpeg";
import ts7 from "../../assets/pics/ts7.jpg";

const clients = [ts, ts2, ts3, ts4, ts5, ts6, ts7];

const facilities = [
  { name: "Restaurant", icon: <BiRestaurant size={33} /> },
  { name: "Room Service", icon: <MdRoomService size={33} /> },
  { name: "Laundary", icon: <MdLocalLaundryService size={33} /> },
  { name: "Meeting", icon: <FaUsers size={33} /> },
  { name: "Gym", icon: <FaDumbbell size={33} /> },
  { name: "Massage", icon: <TbMassage size={33} /> },
  { name: "Steam", icon: <FaHotTub size={33} /> },
  { name: "Wifi", icon: <FaWifi size={33} /> },
];

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          minHeight: "20vh", // Decrease the height to half (50% of viewport height)
          backgroundImage: `url(${mainImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ textAlign: "center" }} // Add padding to center content
        >
          <img
            src={logo}
            style={{ width: "70%", maxWidth: "200px" }}
            alt="Logo"
          />
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "#FF00FF", fontWeight: "bold" }}
          >
            MM Hotel
          </Typography>
          <Typography variant="h3" align="center" sx={{ color: "white" }}>
            Your <FaMapMarkerAlt color="#FF00FF" /> Gateway to{" "}
            <FaMapMarkerAlt color="#FF00FF" /> Dire Dawa
          </Typography>
        </Grid>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="3 0.5 598.5 39.41"
          style={{ transform: "rotate(180deg)" }}
        >
          {" "}
          <g fill="#354755FF" stroke="#354755FF">
            {" "}
            <path d="M 15.500 6.942 C 22.100 10.127 27.838 12.542 28.250 12.308 C 28.663 12.073 29.000 12.306 29.000 12.824 C 29.000 13.343 29.788 14.006 30.750 14.297 C 31.713 14.589 37.788 17.072 44.250 19.815 C 50.713 22.558 56.000 24.567 56.000 24.279 C 56.000 23.991 56.563 24.201 57.250 24.745 C 58.550 25.775 68.751 29.447 70.500 29.514 C 71.050 29.535 71.950 29.830 72.500 30.169 C 74.247 31.246 87.211 34.816 95.500 36.503 C 108.401 39.129 113.419 39.506 134.000 39.396 C 149.992 39.311 155.378 38.896 163.938 37.089 C 169.679 35.877 174.835 34.602 175.396 34.255 C 175.957 33.909 177.334 33.522 178.458 33.396 C 179.581 33.270 181.625 32.733 183.000 32.203 C 184.375 31.673 185.725 31.213 186.000 31.180 C 187.114 31.046 209.307 22.927 210.363 22.268 C 210.988 21.876 211.955 21.487 212.511 21.402 C 213.067 21.317 217.865 19.856 223.173 18.155 C 240.120 12.727 246.573 11.566 260.000 11.532 C 276.952 11.489 280.479 12.031 304.000 18.301 C 311.425 20.281 318.625 22.107 320.000 22.361 C 321.375 22.614 323.175 23.065 324.000 23.363 C 325.973 24.076 330.452 24.887 342.000 26.620 C 353.572 28.357 369.192 27.590 386.000 24.458 C 387.375 24.202 389.625 23.830 391.000 23.631 C 398.351 22.570 407.453 20.838 408.245 20.349 C 408.741 20.042 410.352 19.682 411.824 19.550 C 413.296 19.418 419.675 18.564 426.000 17.652 C 445.229 14.880 452.704 14.474 472.656 15.121 C 491.485 15.730 498.556 16.302 532.500 19.962 C 541.850 20.969 550.175 21.815 551.000 21.840 C 551.825 21.866 560.825 23.048 571.000 24.468 C 581.175 25.888 592.088 27.235 595.250 27.461 L 601.000 27.872 601.000 14.436 L 601.000 1.000 302.250 1.075 L 3.500 1.150 15.500 6.942 "></path>
          </g>{" "}
        </svg>
      </Grid>
      <Grid pl={10} pr={10} pb={3}>
        <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
          WELCOME TO OUR HOTEL
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
            // backgroundColor: "#FF00FF",
            backgroundColor: "#FFF",
          }}
        />
      </Grid>
      <Grid container spacing={2} pl={2} pr={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={about} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">About Us</Typography>
              <br />
              <Link to="/about">
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
            <img src={room} alt="Background" className="background-image" />
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
            <img src={srv} alt="Background" className="background-image" />
            <div className="overlay" />
            <div className="content">
              <Typography variant="h5">Services</Typography>
              <br />
              <Link to="/services">
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
            <Typography variant="h3" align="center">
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
        <Grid container spacing={2} p={1} justifyContent="center">
          {facilities.map((facility, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Grid container justifyContent="center">
                {facility.icon}
              </Grid>
              <Typography align="center">{facility.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <br />
        <Grid container justifyContent="center">
          <Link to="/services">
            <Button variant="contained">Load More</Button>
          </Link>
        </Grid>
      </Box>
      <Grid container spacing={2} pl={2} pr={2} mb={4} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Refined Image Gallery
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g1} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g2} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="grid-item">
            <img src={g3} alt="Background" className="background-image" />
            <div className="overlay" />
          </div>
        </Grid>
        <Grid container justifyContent="center" mt={1}>
          <Link to="/gallery">
            <Button variant="contained">Load More</Button>
          </Link>
        </Grid>
      </Grid>
      <Box>
        <Grid container justifyContent="center" spacing={2} mb={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Trusted Partnerships
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
                Experience the power of long-lasting client relationships. Our
                portfolio showcases a diverse range of esteemed partners, both
                past and present. From successful collaborations to enduring
                connections, we have nurtured fruitful alliances that have
                fueled growth and success. Explore our grid of trusted logos,
                symbolizing the enduring relationships we've built with our
                valued clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 4, 900: 7 }}
        style={{ backgroundColor: "white" }}
      >
        <Masonry gutter="20px">
          {clients.map((image, i) => {
            return (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  display: "block",
                  cursor: "pointer",
                }}
                alt=""
                loading="lazy"
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      <Grid container spacing={2} pl={2} pr={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" >
            We Invite You to Experience Our World-Class Amenities
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "auto",
            }}
            className="home-map"
            mt={1}
            mb={2}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.9126859459475!2d41.83915507502611!3d9.602786690483283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101f83c817839%3A0x3e452620dfe8cb5d!2sMM%20Hotel!5e0!3m2!1sen!2set!4v1694253331182!5m2!1sen!2set"
              width="100%"
              height="auto"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default index;
