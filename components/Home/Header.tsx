import React from "react";
import Image from "next/image";
import { Box, Divider, Typography, Link, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import Social from "../Social";
import { useColorMode } from "../../lib/ColorModeContext";

const Header: React.FC = () => {
  const colorMode = useColorMode();
  return (
    <React.Fragment>
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
          Front-end Developer, Tech Enthusiast
        </Typography>
      </Box>
      <Social />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Link
          href="https://docs.google.com/document/d/15YxBQtXQmLFtUS8sXrHEOFAzH2auGuPSl480dcqBvxo/edit?usp=sharing"
          target="_blank"
          sx={{ textDecoration: "none", mr: 0.3 }}
        >
          <Button
            size="small"
            color="secondary"
            variant="contained"
            sx={{
              px: 2,
              my: { xs: 0.5, md: 0 },
              mx: { md: 0.5 },
              fontWeight: "700",
              transition: "all .4s",
              color: "#f4ede3",
              // ...(colorMode.mode === "light"
              //   ? {
              //       color: "text.secondary",
              //       bgcolor: "text.primary",
              //       "&:hover": {
              //         bgcolor: "secondary.main",
              //       },
              //     }
              //   : {
              //       color: "text.secondary",
              //       bgcolor: "text.primary",
              //       "&:hover": {
              //         color: "text.primary",
              //         bgcolor: "secondary.main",
              //       },
              //     }),
            }}
          >
            Resume
          </Button>
        </Link>
        <Link
          href="https://docs.google.com/document/d/15YxBQtXQmLFtUS8sXrHEOFAzH2auGuPSl480dcqBvxo/edit?usp=sharing"
          target="_blank"
          sx={{ textDecoration: "none", mx: 0.3 }}
        >
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            sx={{
              px: 2,
              my: { xs: 0.5, md: 0 },
              mx: { md: 0.5 },
              fontWeight: "700",
              color: "secondary.main",
            }}
          >
            Get Resume
          </Button>
        </Link>
      </Box>
      <Divider sx={{ mt: 3 }} />
    </React.Fragment>
  );
};
export default Header;
