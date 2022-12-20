import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Drawer,
  IconButton,
  Box,
  Typography,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import Social from "../common/Social";
import { pages } from "../../utils/data/pageAndLinkData";
import Footer from "../Footer/Footer";
import { BiMenuAltRight } from "react-icons/bi";
import BtnNav from "../Button/BtnNav";

const MobileNavMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Box sx={{ display: { md: "none" } }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
      >
        <BiMenuAltRight />
      </IconButton>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleClose}
        sx={{
          display: { md: "none" },
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            width: { xs: "50vw", sm: "40vw" },
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            pt: "1.5rem",
            bgcolor: "primary.main",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "50vw", sm: "40vw" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                mt: "1rem",
              }}
            >
              <Image
                src="/images/avatar.jpeg"
                alt="avatar"
                layout="fill"
                style={{ borderRadius: "50%" }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem" },
                my: ".5rem",
              }}
            >
              <Box component="span" sx={{ color: "secondary.main" }}>
                Saiful{" "}
              </Box>
              Islam
            </Typography>

            <Social />
            <Divider sx={{ width: "100%", mt: "1rem" }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: "1rem",
                position: "relative",
              }}
            >
              {Object.keys(pages).map((page) => (
                <BtnNav
                  toggleMenu={toggleMenu}
                  key={page}
                  name={page}
                  link={pages[page]}
                />
              ))}
            </Box>
          </Box>

          <Footer />
        </Box>
      </Drawer>
    </Box>
  );
};
export default MobileNavMenu;
