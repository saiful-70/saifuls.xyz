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

const MobileNavMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const router = useRouter();
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
                <Link href={pages[page]} key={page}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    key={page}
                    onClick={handleClose}
                    sx={{
                      px: "2rem",
                      my: "0.5rem",
                      display: "block",
                      fontWeight: "700",
                      color: "text.primary",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "#f4ede3",
                      },
                      ...(router.asPath === pages[page] && {
                        bgcolor: "secondary.main",
                        color: "#f4ede3",
                      }),
                    }}
                  >
                    {page}
                  </Button>
                </Link>
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
