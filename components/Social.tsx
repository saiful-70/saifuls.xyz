import React from "react";
import Link from "next/link";

import { Box, IconButton } from "@mui/material";

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
      <Link
        href="https://www.facebook.com/saiful70.me/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton sx={iconStyle}>
          <FaFacebookF />
        </IconButton>
      </Link>
      <IconButton sx={iconStyle}>
        <BsGithub />
      </IconButton>
      <IconButton sx={iconStyle}>
        <FaLinkedinIn />
      </IconButton>
    </Box>
  );
};
export default Social;
