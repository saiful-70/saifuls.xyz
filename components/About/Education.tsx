import React from "react";
import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import Social from "../Social";
import HeadingSecondary from "../Heading/HeadingSecondary";

const Education: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <HeadingSecondary name="Education" />
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          B.Sc. Engineering in ICT (Information {`& `}Communication Technology)
        </Typography>
        <Typography variant="subtitle2">
          Comilla University, Cumilla.
        </Typography>
        <Typography variant="subtitle2">
          2019 - present (Running 7th semister out of 8)
        </Typography>
      </Box>
    </Box>
  );
};
export default Education;
