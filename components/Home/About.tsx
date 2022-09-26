import { Box, Typography, Button, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnPrimary from "../Button/BtnPrimary";
import HeadingSecondary from "../Heading/HeadingSecondary";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <HeadingSecondary name="About Me" />
      <Typography variant="body1">
        {`I'm`} a Front-end developer and problem solver. I love JavaScript and
        C++. {`I'm`} learning javascript and {`it's`} related technology for 3+
        years. Which is helping me to develop intuitive, minimalistics front-end
        interfaces and designs.{`I'm`} tech enthuasists and gradually improving
        my skills.
      </Typography>
      {/* <Button
        // size="small"
        variant="outlined"
        color="secondary"
        sx={{
          // width: "100%",
          margin: "20px auto",
          px: 2,
          display: "block",
          fontWeight: "700",
          color: "secondary.contrastColor",
          // bgcolor: "secondary.main",
          "&:hover": {
            bgcolor: "secondary.main",
          },
        }}
      >
        Details {">"}
      </Button> */}

      <Link href="/about">
        <BtnPrimary name="Details" link="/about" />
      </Link>
      {/* <Box sx={{ textAlign: "center" }}> */}

      {/* </Box> */}
    </Box>
  );
};
export default About;
