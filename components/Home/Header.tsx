import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import Social from "../Social";

const flickerAnimation = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

const Header: React.FC = () => {
  return (
    <React.Fragment>
      {/* <Typography
        sx={{
          fontFamily: '"Titillium Web", sans-serif',
          fontWeight: "bold",
          fontSize: { xs: 32, sm: 36, md: 48 },
          my: 5,
        }}
        textAlign="center"
      >
        Front-end Developer {`<`}
        <Box
          component="span"
          // sx={{ display: "inline" }}
          sx={{
            animation: `${flickerAnimation} 1.5s infinite`,
            color: "secondary.main",
          }}
        >
          _
        </Box>
        {`/>`}
      </Typography> */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
          }}
        >
          <Image
            src="/images/avatar.jpeg"
            alt="avatar"
            layout="fill"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            fontWeight: "700",
            fontSize: { xs: 28, sm: 36, md: 48 },
            my: 1,
          }}
        >
          {/* Hi, {`I'm `} */}
          <Box component="span" sx={{ color: "secondary.main" }}>
            Saiful{" "}
          </Box>
          Islam
        </Typography>
        <Typography variant="body1" textAlign="center">
          {/* {`I'm`} a Front-end developer. I love JavaScript. which along with
          other acroynms gives me superpowers to develop compelling front-end,
          intuitive yet minimalistic interfaces and engaging designs.{`I'm`}{" "}
          quite confident naturally curious, and improving my skills. */}
          Web Developer, Problem Solver
        </Typography>
      </Box>
      <Social />
    </React.Fragment>
  );
};
export default Header;
