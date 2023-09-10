import React, { Suspense } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./Components/Loader";

const Contact = React.lazy(() => import("./Components/Contact"));
const Gallery = React.lazy(() => import("./Components/Gallery"));
const Rooms = React.lazy(() => import("./Components/Rooms"));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#800080",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#ffe8ff",
    },
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
