import React from "react";
import { ServiceData } from "./ServiceData";
import { Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar";
import mainImg from "../../assets/mm.jpg";
import Footer from "../Footer";

const ServiceGrid = ({ serv, servidx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { imgUrl, title, text } = serv;
  const isImageLeft = servidx % 2 === 0;

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
          src={imgUrl}
          alt={title}
          style={{
            width: "100%",
            objectFit: "cover",
            maxHeight: "100%",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid ml={3}>
          <Typography variant="h3" align="center">
            {title}
          </Typography>
          <Typography variant="p">{text}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const index = () => {
  return (
    <div>
      {ServiceData.map((service, index) => (
        <ServiceGrid serv={service} servidx={index} key={index} />
      ))}
    </div>
  );
};

export default index;
