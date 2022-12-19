import { Typography } from "@mui/material";
import React from "react";

interface headingProps {
  name: String;
}

const HeadingSecondary: React.FC<headingProps> = ({ name }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        display: "inline-block",
        fontWeight: 600,
        mb: "2rem",
        position: "relative",
        "&::after": {
          position: "absolute",
          content: `""`,
          display: "block",
          width: "50%",
          height: { xs: "3px", md: "4px" },
          backgroundColor: "secondary.main",
          mt: "2px",
        },
        fontSize: { xs: "1.8rem", md: "2.3rem" },
      }}
    >
      {name}
    </Typography>
  );
};
export default HeadingSecondary;
