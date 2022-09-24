import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnPrimary from "../Button/BtnPrimary";
import HeadingSecondary from "../Heading/HeadingSecondary";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <HeadingSecondary name="About Me" />
      <Typography variant="body1">
        {"I'm"} a Front-end developer. I love JavaScript. which along with other
        acroynms gives me superpowers to develop compelling front-end, intuitive
        yet minimalistic interfaces and engaging designs.{"I'm "}quite confident
        naturally curious, and improving my skills.
      </Typography>
      {/* <Button
        // size="small"
        variant="outlined"
        color="secondary"
        sx={{
          // width: "100%",
          margin: "20px auto",
          px: 2,
          display: "block",
          fontWeight: "700",
          color: "secondary.contrastColor",
          // bgcolor: "secondary.main",
          "&:hover": {
            bgcolor: "secondary.main",
          },
        }}
      >
        Details {">"}
      </Button> */}
      <Link href="/about">
        <BtnPrimary name="Details" />
      </Link>
    </Box>
  );
};
export default About;
