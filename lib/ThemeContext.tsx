import React, { useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

interface IThemeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ThemeContext = React.createContext<IThemeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ThemeContextProvider = ({ children }: any) => {
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
        typography: {
          htmlFontSize: 10,
          fontFamily: [
            "Fira Code",
            "Chivo Mono",
            "M PLUS Rounded 1c",
            "monospace",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontSize: "1.4rem",
                fontFamily: '"Fira Code", sans-serif',
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "none",
              },
            },
          },
        },
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
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
