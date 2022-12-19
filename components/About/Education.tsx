import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";

const Education: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <HeadingSecondary name="Education" />
      <Box>
        <Typography variant="subtitle2" fontWeight="bold">
          B.Sc. Engineering in ICT (Information {`& `}Communication Technology),
        </Typography>
        <Typography variant="body2" fontStyle="italic">
          Comilla University, Cumilla.
        </Typography>
        <Typography variant="body2">
          2019 - present (Running 7th semister out of 8)
        </Typography>
      </Box>
    </Box>
  );
};
export default Education;
