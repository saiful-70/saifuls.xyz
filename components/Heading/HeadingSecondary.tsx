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
        display: "inline-block",
        fontWeight: "bold",
        mb: 2,
        position: "relative",
        "&::after": {
          position: "absolute",
          content: `""`,
          display: "block",
          width: "50%",
          height: 4,
          backgroundColor: "secondary.main",
        },
      }}
    >
      {name}
    </Typography>
  );
};
export default HeadingSecondary;
