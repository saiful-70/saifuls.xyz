import React, { useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }: any) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
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
                  main: "#f4ede3",
                  light: "#f3ebe2",
                  dark: "#a8a199",
                  contrastText: "#1a202c",
                },
                secondary: {
                  main: "#ff851b",
                  light: "#ff9d48",
                  dark: "#b25d12",
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
                  dark: "#12161e",
                  contrastText: "#f4ede3",
                },
                secondary: {
                  main: "#ff851b",
                  light: "#ff9d48",
                  dark: "#b25d12",
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
