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
        {`I'm`} a passionate software developer and specialize in crafting intuitive user interfaces and collaborating effectively with teams to deliver impactful solutions. With a strong foundation in JavaScript, TypeScript, and C++, coupled with expertise in frameworks like Angular, React, and Next.js, I thrive in the dynamic world of software development. Whether it's building educational software for kids or developing feature-rich web applications, I am committed to continuous learning and innovation in this ever-evolving field.
      </Typography>
      <Typography variant="body2" sx={{mt: 1}}>
        Explore my portfolio to discover the projects I've worked on and the technologies {`I'm`} proficient in. Let's connect and discuss how we can leverage technology to solve real-world problems!
      </Typography>

      <Link href="/about">
        <BtnSecondary name="Details" link="/about" />
      </Link>

      <Divider sx={{ mt: "2.5rem" }} />
    </Box>
  );
};
export default About;
