import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import HeadingPrimary from "../Heading/HeadingPrimary";
import BtnLink from "../Button/BtnLink";

const headerStyle = {
  width: "100%",
  pt: "11rem",
  pb: "5rem",
};

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box sx={headerStyle}>
        <Typography variant="h6">Hi, {"I'm"}</Typography>

        <HeadingPrimary />

        <Typography
          variant="subtitle1"
          sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, fontWeight: 500 }}
        >
          Web Developer | Programmer
        </Typography>

        <Box
          sx={{
            mt: "1rem",
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
      </Box>

      <Divider sx={{ mt: "2.5rem" }} />
    </React.Fragment>
  );
};
export default Header;
