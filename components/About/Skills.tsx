import { Box, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnPrimary from "../Button/BtnPrimary";
import HeadingSecondary from "../Heading/HeadingSecondary";

import { skills } from "../../utils/skillsWithIcon";

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
            <Button
              startIcon={item.icon}
              size="small"
              key={item.name}
              color="secondary"
              variant="outlined"
              sx={{ m: 0.5, fontWeight: 700, color: "text.primary" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="500">
            Familier With :
          </Typography>
          {skills.secondary.map((item) => (
            <Button
              startIcon={item.icon}
              size="small"
              key={item.name}
              color="secondary"
              variant="outlined"
              sx={{ m: 0.5, fontWeight: 700, color: "text.primary" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default About;
