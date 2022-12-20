import React from "react";
import { Box, colors, Link, Typography } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";
import { MdSchool } from "react-icons/md";

const Education: React.FC = () => {
  return (
    <Box sx={{ mt: "2rem" }}>
      <HeadingSecondary name="Education" />
      <Box>
        <Typography variant="subtitle2" fontWeight={600}>
          B.Sc. Engineering in ICT (Information {`& `}Communication Technology),
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          <Link
            href="https://cou.ac.bd/"
            underline="hover"
            target="_blank"
            sx={{
              color: colors.blue[500],
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Comilla University
          </Link>
          , Cumilla
        </Typography>

        <Typography variant="body2">
          2019 - present (Running 7th semister out of 8)
        </Typography>
      </Box>
    </Box>
  );
};
export default Education;
