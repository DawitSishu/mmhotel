import React, { useEffect } from "react";
import "./style.css";
import { Grid, Typography, Box } from "@mui/material";
import ContactForm from "./ContactForm";
import Footer from "../Footer";
import NavBar from "../Navbar";
import img2 from "../../assets/mm.jpg";

const index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={0}
        sx={{
          position: "relative",
          maxHeight: "50vh",
          backgroundImage: `url(${img2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: 5,
        }}
      >
        <div className="contact-overlay"></div>
        <Grid
          item
          justifyContent="center"
          zIndex={1}
          sx={{ marginTop: 5 }}
          xs={12}
        >
          <Typography
            variant="h2"
            align="center"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Contact US
          </Typography>
        </Grid>
        <Grid
          zIndex={1}
          container
          justifyContent="center"
          sx={{ marginTop: 7, height: "100vh" }}
        >
          <Box
            sx={{
              width: "80%",
              height: "60%",
            }}
            className="contact-box"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.9126859459475!2d41.83915507502611!3d9.602786690483283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101f83c817839%3A0x3e452620dfe8cb5d!2sMM%20Hotel!5e0!3m2!1sen!2set!4v1694253331182!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" zIndex={1} sx={{ marginTop: 40 }}>
        <Typography
          variant="h2"
          align="center"
          color="primary"
          sx={{ fontWeight: "bold" }}
        >
          Get In Touch
        </Typography>
      </Grid>
      <ContactForm />
      <Footer />
    </div>
  );
};
export default index;
