import { Box, Typography, Button } from "@mui/material";
import React from "react";
import BtnSkill from "../Button/BtnSkill";
import HeadingSecondary from "../Heading/HeadingSecondary";

import { skills } from "./skillsWithIcon";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <HeadingSecondary name="Skills" />
      <Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="500">
            Proficient In :
          </Typography>
          {skills.main.map((item) => (
            <BtnSkill key={item.name} icon={item.icon} name={item.name} />
          ))}
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="500">
            Familier With :
          </Typography>
          {skills.secondary.map((item) => (
            <BtnSkill key={item.name} icon={item.icon} name={item.name} />
          ))}
        </Box>

        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="500">
            Programming Languages :
          </Typography>
          {skills.programmingLanguages.map((item) => (
            <BtnSkill key={item.name} icon={item.icon} name={item.name} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default About;
