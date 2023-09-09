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
        <div className="img-displayer">
          <IconButton
            onClick={() => imgAction()}
            sx={{
              position: "absolute",
              right: "7%",
              top: "7%",
            }}
            
          >
            <CloseIcon sx={{ color: "purple", fontSize: "2.5rem" }} />
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
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateBeforeIcon sx={{ color: "purple" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => imgAction("next")}
                sx={{
                  backgroundColor: "black !important",
                  borderColor: "black",
                }}
              >
                <NavigateNextIcon sx={{ color: "purple" }} />
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
          <Typography align="center" variant="h2" className="gallery-text">
            Get A Glimpse Of Our Exquisite Hotel
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          The Rooms
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return i <= 5 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Foods & Drinks
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 10 < i && i <= 16 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Some Other Places
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 16 < i && i <= 22 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Our Gardenary For Events
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 22 < i && i <= 28 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div style={{ padding: "20px" }}>
        <Typography align="center" variant="h3" className="gallery-text">
          Lobby Bar
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => {
              return 5 < i && i <= 10 ? (
                <LazyLoad offset={100} key={i}>
                  <img
                    key={i}
                    src={image}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                    onClick={() => viewImage(image, i)}
                    loading="lazy"
                  />
                </LazyLoad>
              ) : null;
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Footer />
    </div>
  );
};

export default index;
