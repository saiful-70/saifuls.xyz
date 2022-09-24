import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Button,
  Drawer,
  IconButton,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Social from "../Social";
import Header from "../Home/Header";

interface pageType {
  home: string;
  projects: string;
  about: string;
}

export const pages: pageType = {
  home: "/",
  projects: "/projects",
  about: "/about",
};

// export const pages = ["Home", "Projects", "About"];

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
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={mobileMenuOpen} onClose={handleClose}>
        <Box
          sx={{
            width: { xs: "50vw", sm: "40vw" },
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
            bgcolor: "primary.main",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
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
              fontFamily: '"M PLUS Rounded 1c", sans-serif',
              fontWeight: "700",
              fontSize: { xs: 20, sm: 32, md: 30 },
              my: 0.5,
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              Saiful{" "}
            </Box>
            Islam
          </Typography>

          <Social />

          {/* <Divider sx={{ mt: 3 }} /> */}

          {/* <Box
            sx={{
              position: "relative",
              "&:before": {
                position: "absolute",
                content: `""`,
                display: "block",
                width: "100%",
                height: "5px",
                bgcolor: "secondary.main",
              },
            }}
          >
            {""} */}
          {/* </Box> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 3,
              position: "relative",
            }}
          >
            {Object.keys(pages).map((page: any) => (
              <Link href={`${pages[page]}`} key={page}>
                <Button
                  // size="small"
                  variant="outlined"
                  key={page}
                  onClick={handleClose}
                  sx={{
                    px: 2,
                    my: 0.5,
                    display: "block",
                    fontWeight: "700",
                    color: "text.primary",
                    "&:hover": {
                      bgcolor: "secondary.main",
                    },
                    ...(router.asPath === page && {
                      bgcolor: "secondary.main",
                    }),
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default MobileNavMenu;
