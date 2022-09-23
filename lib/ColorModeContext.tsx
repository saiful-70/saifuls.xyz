import React, { useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
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
                  secondary: "#f4ede3",
                },
              }
            : {
                primary: {
                  main: "#1a202c",
                  light: "#1a202c",
                  dark: orange[900],
                  contrastText: "#f4ede3",
                },
                secondary: {
                  main: "#ff851b",
                  light: orange[500],
                  dark: orange[900],
                  contrastText: "#f4ede3",
                },
                text: {
                  primary: "#f4ede3",
                  secondary: "#1a202c",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
