import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnSecondary from "../Button/BtnSecondary";
import HeadingSecondary from "../Heading/HeadingSecondary";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: "2rem" }}>
      <HeadingSecondary name="Me" />
      <Typography variant="body2">
        {`I'm`} a passionate and enthuastic programmer. My core skill is based
        on JavaScript. {`I'm`} learning and implementing javascript and {`it's`}{" "}
        related technology for 3+ years. Which is helping me to develop
        intuitive, minimalistics front-end interfaces and designs. I also love
        C++ which is helped me to build my programming skill and logic
        foundation. Now {`I'm`} studying in Comilla University in Cumilla,
        Bangladesh and my last year is going on. I am available for any kind of
        job opportunity that suits my interests.
      </Typography>

      <Link href="/about">
        <BtnSecondary name="Details" link="/about" />
      </Link>

      <Divider sx={{ mt: "2.5rem" }} />
    </Box>
  );
};
export default About;
