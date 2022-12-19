import React from "react";
import Image from "next/image";
import { Box, Divider, Typography, Link, Button } from "@mui/material";
import Social from "../common/Social";
import HeadingPrimary from "../Heading/HeadingPrimary";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "150px",
            width: "150px",
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

        <HeadingPrimary />

        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" } }}
        >
          Front-end Developer, Tech Enthusiast
        </Typography>
      </Box>
      <Social />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Link
          href="https://docs.google.com/document/d/1wc-z6XwPXopYl_TwahvQgwsiXHtc0aDPm2cpydwLp4k/edit?usp=sharing"
          target="_blank"
          sx={{ textDecoration: "none", mr: "0.3rem" }}
        >
          <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{
              px: 2,
              my: { xs: "0.5rem", md: 0 },
              mx: { md: "0.5rem" },
              fontWeight: "700",
              transition: "all .4s",
              color: "#f4ede3",
            }}
          >
            Resume
          </Button>
        </Link>
        <Link
          href="/resume/resume-saiful.pdf"
          target="_blank"
          sx={{ textDecoration: "none", mx: "0.3rem" }}
        >
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            sx={{
              px: "1.5rem",
              my: { xs: "0.5rem", md: 0 },
              mx: { md: "0.5rem" },
              fontWeight: "700",
              color: "secondary.main",
            }}
          >
            Get Resume
          </Button>
        </Link>
      </Box>
      <Divider sx={{ mt: "2.5rem" }} />
    </React.Fragment>
  );
};
export default Header;
