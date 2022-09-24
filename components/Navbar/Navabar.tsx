import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useColorMode } from "../../lib/ColorModeContext";
import MobileNavMenu from "./MobileNavMenu";
import FootPrintIcon from "../../utils/icons/footPrintIcon";
import Link from "next/link";

const Navbar: React.FC = () => {
  const colorMode = useColorMode();

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
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {/* <Box
                sx={{
                  position: "relative",
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                }}
              >
                <Image
                  src="/images/catPaw.png"
                  alt="avatar"
                  layout="fill"
                  style={{ borderRadius: "50%" }}
                />
              </Box> */}
                <FootPrintIcon />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontFamily: '"M PLUS Rounded 1c", sans-serif',
                    fontWeight: "700",
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

            <Box sx={{ display: "flex" }}>
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
