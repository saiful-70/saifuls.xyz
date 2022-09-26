import { createTheme } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f0e7db",
      light: "#f3ebe2",
      dark: "#a8a199",
      contrastText: "#1a202c",
    },
    secondary: {
      main: "#ff851b",
      light: "#ff9d48",
      dark: #b25d12,
      contrastText: "#1a202c",
    },
    text: {
      primary: "#1a202c",
      secondary: "#fff",
    },
  },
});
