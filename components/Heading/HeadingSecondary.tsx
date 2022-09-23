import { Typography } from "@mui/material";
import React from "react";

interface headingProps {
  name: String;
}

const HeadingSecondary: React.FC<headingProps> = ({ name }) => {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        mb: 3,
        position: "relative",
        "&::after": {
          position: "absolute",
          content: `""`,
          display: "block",
          width: "20vw",
          height: 5,
          backgroundColor: "secondary.main",
        },
      }}
    >
      {name}
    </Typography>
  );
};
export default HeadingSecondary;
