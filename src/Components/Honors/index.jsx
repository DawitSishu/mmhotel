import React from "react";
import { Grid, Typography } from "@mui/material";
import { HonorData as data } from "./HonorData";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./style.css";

const index = () => {
  return (
    <div>
      <Navbar />
      <Typography variant="h3" m={3} color="primary" align="center">
        Our Awards and Honors
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} key={index} mb={3}>
            <img src={item.imgUrl} alt="AWARD" className="mobile-image" />
            <Grid container justifyContent="center" mt={1} variant="h4">
              <Typography align="center" sx={{ maxWidth: "70%" }}>
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default index;
