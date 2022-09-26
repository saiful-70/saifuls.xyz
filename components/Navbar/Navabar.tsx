import React from "react";
import {
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";
import { keyframes } from "@emotion/react";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "../../lib/ColorModeContext";
import MobileNavMenu from "./MobileNavMenu";
import Link from "next/link";
import DesktopNavMenu from "./DesktopNavMenu";

const flickerAnimation = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

const Navbar: React.FC = () => {
  const colorMode = useTheme();

  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.light" }}>
      <Toolbar>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Titillium Web", sans-serif',
                      fontWeight: "700",
                    }}
                    textAlign="center"
                  >
                    {`<`}
                    <Box
                      component="span"
                      sx={{
                        animation: `${flickerAnimation} 1.5s infinite`,
                        color: "secondary.main",
                        fontWeight: "900",
                      }}
                    >
                      _
                    </Box>
                    {`/>`}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontFamily: '"M PLUS Rounded 1c", sans-serif',
                      fontWeight: "800",
                      letterSpacing: 0.1,
                      ml: 0.5,
                    }}
                  >
                    <Box component="span" sx={{ color: "secondary.main" }}>
                      Saiful{" "}
                    </Box>
                    Islam
                  </Typography>
                </Box>
              </Link>

              <DesktopNavMenu />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {colorMode.mode === "light" ? (
                <IconButton
                  sx={{ mr: { xs: 1, md: 0 } }}
                  onClick={colorMode.toggleColorMode}
                >
                  <MdDarkMode style={{ color: "#000" }} />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ mr: { xs: 1, md: 0 } }}
                  onClick={colorMode.toggleColorMode}
                >
                  <MdLightMode />
                </IconButton>
              )}
              <MobileNavMenu />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
