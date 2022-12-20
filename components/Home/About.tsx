import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnNav from "../Button/BtnSecondary";
import HeadingSecondary from "../Heading/HeadingSecondary";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: "2rem" }}>
      <HeadingSecondary name="About Me" />
      <Typography variant="body2">
        {`I'm`} a Front-end developer and problem solver. I love JavaScript and
        C++. {`I'm`} learning javascript and {`it's`} related technology for 3+
        years. Which is helping me to develop intuitive, minimalistics front-end
        interfaces and designs.{`I'm`} tech enthuasists and gradually improving
        my skills.
      </Typography>

      <Link href="/about">
        <BtnNav name="More About Me" link="/about" />
      </Link>

      <Divider sx={{ mt: "2.5rem" }} />
    </Box>
  );
};
export default About;
