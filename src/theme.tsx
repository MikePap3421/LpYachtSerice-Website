import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#274688ff", // Deep navy blue
    },
    secondary: {
      main: "#FCA311", // Golden yellow
    },
    background: {
      default: "#f2f2f3ff", // Page background
      paper: "#F8F9FA",   // For cards/containers
    },
    text: {
      primary: "#274688ff", // Dark navy text
      secondary: "#1B263B", // Slightly lighter navy
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f2f2f3ff",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
