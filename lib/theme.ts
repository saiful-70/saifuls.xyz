import { createTheme } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f0e7db",
      light: "#f4ede3",
      dark: orange[900],
      contrastText: "#1a202c",
    },
    secondary: {
      main: "#ff851b",
      light: orange[500],
      dark: orange[900],
      contrastText: "#1a202c",
    },
    text: {
      primary: "#1a202c",
      secondary: "#fff",
    },
  },
});
