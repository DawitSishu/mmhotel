import React, { useState, useEffect } from "react";
import "./style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyLoad from "react-lazyload";
import img from "../../assets/mm.jpg";

const images = [
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
];

const index = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action == "next") {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action == "prev") {
      setData({ img: images[i - 1], i: i - 1 });
    } else if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      {data.img ? (
        <div className="honor-displayer">
          <IconButton
            onClick={() => imgAction()}
            sx={{
              position: "absolute",
              right: "7%",
              top: "7%",
              backgroundColor: "#394757",
            }}
          >
            <CloseIcon sx={{ color: "#FFEE49", fontSize: "2.5rem" }} />
          </IconButton>

          <Grid
            container
            justifyContent="center"
            sx={{ position: "absolute", bottom: "5%" }}
            spacing={10}
          >
            <Grid item>
              <IconButton
                onClick={() => imgAction("prev")}
                sx={{
                  backgroundColor: "#394757 !important",
                  borderColor: "#394757",
                }}
              >
                <NavigateBeforeIcon sx={{ color: "#FFEE49" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => imgAction("next")}
                sx={{
                  backgroundColor: "#394757 !important",
                  borderColor: "#394757",
                }}
              >
                <NavigateNextIcon sx={{ color: "#FFEE49" }} />
              </IconButton>
            </Grid>
          </Grid>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            loading="lazy"
          />
        </div>
      ) : null}
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item justifyContent="center" sx={{ margin: 5 }}>
          <Typography align="center" variant="h2" color="primary">
            Explore Our Honors and Accolades
          </Typography>
          <Typography align="center" variant="body">
            At MM Hotel, we are committed to delivering unparalleled quality and
            service. Our Certifications and Accolades page reflects our
            unwavering dedication to upholding the highest industry standards
            and providing an exceptional experience to our valued guests.
            Discover a collection of esteemed certifications, industry
            accolades, and noteworthy achievements that demonstrate our hotel's
            commitment to excellence. From internationally recognized
            certifications to industry-leading awards, each recognition
            signifies our ongoing pursuit of delivering exceptional hospitality.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: "20px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                    }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default index;
