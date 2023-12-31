import React, { Suspense } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";

const Contact = React.lazy(() => import("./Components/Contact"));
const Gallery = React.lazy(() => import("./Components/Gallery"));
const Rooms = React.lazy(() => import("./Components/Rooms"));
const Home = React.lazy(() => import("./Components/Home"));
const About = React.lazy(() => import("./Components/About"));
const Honors = React.lazy(() => import("./Components/Honors"));
const Services = React.lazy(() => import("./Components/Services"));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#FFD700",
      // main: "#f3e9f7",
      main: "#FFEE49",
    },
    secondary: {
      main: "#800080",
    },
    background: {
      // default: "#ffe8ff",
      // default: "#bf3af0",
      default: "#394757",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography :{
    fontFamily : 'Playfair Display'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Suspense fallback={<Loader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            exact
            path="/honors"
            element={
              <Suspense fallback={<Loader />}>
                <Honors />
              </Suspense>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            exact
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            exact
            path="/rooms"
            element={
              <Suspense fallback={<Loader />}>
                <Rooms />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
