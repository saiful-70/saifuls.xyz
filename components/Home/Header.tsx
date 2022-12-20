import React from "react";
import Image from "next/image";
import { Box, Divider, Typography, Link, Button } from "@mui/material";
import Social from "../common/Social";
import HeadingPrimary from "../Heading/HeadingPrimary";
import ImageTemplate from "../common/ImageTemplate";
import BtnLink from "../Button/BtnLink";

const headerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: 10,
};

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box sx={headerStyle}>
        <ImageTemplate
          height="13rem"
          width="13rem"
          borderRadius="50%"
          src="/images/avatar.jpeg"
          alt="avatar"
        />

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
        <BtnLink
          link="https://docs.google.com/document/d/1wc-z6XwPXopYl_TwahvQgwsiXHtc0aDPm2cpydwLp4k/edit?usp=sharing"
          name="Resume"
          variant="contained"
        />
        <BtnLink
          link="/resume/resume-saiful.pdf"
          name="Get Resume"
          variant="outlined"
        />
      </Box>
      <Divider sx={{ mt: "2.5rem" }} />
    </React.Fragment>
  );
};
export default Header;
