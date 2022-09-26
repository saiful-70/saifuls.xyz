import React from "react";

import { Box, IconButton, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const iconStyle = {
  bgcolor: "primary.contrastText",
  color: "primary.main",
  mx: 0.5,
  transition: ".3s all",
  fontSize: 20,
  "&:hover": {
    bgcolor: "secondary.main",
  },
};

const Social: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 1,
      }}
    >
      <Link href="https://github.com/saiful-70" target="_blank" title="Github">
        <IconButton sx={iconStyle}>
          <BsGithub />
        </IconButton>
      </Link>

      <Link
        href="https://www.linkedin.com/in/saiful70/"
        target="_blank"
        title="LinkedIn"
      >
        <IconButton sx={iconStyle}>
          <FaLinkedinIn />
        </IconButton>
      </Link>
      <Link
        href="https://www.facebook.com/saiful70.me/"
        target="_blank"
        title="Facebook"
      >
        <IconButton sx={iconStyle}>
          <FaFacebookF />
        </IconButton>
      </Link>
    </Box>
  );
};
export default Social;
