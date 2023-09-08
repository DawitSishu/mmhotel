import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import "./App.css";
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
      default: "#fadefa",
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
    </ThemeProvider>
  );
}

export default App;
