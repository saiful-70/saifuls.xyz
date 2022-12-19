import React from "react";
import { Box, Typography, Link, Divider, colors } from "@mui/material";
import { FiExternalLink } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: "2rem", md: "4rem" },
        px: "1rem",
        textAlign: "center",
      }}
    >
      <Divider />
      <Box sx={{ py: "1rem", px: "1rem" }}>
        <Link
          href="https://github.com/saiful-70/saifuls.xyz"
          target="_blank"
          underline="hover"
          sx={{
            color: colors.blue[500],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: { xs: "1.3rem", md: "1.6rem" },
            textDecoration: "underline",
            fontWeight: 700,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              mr: "2px",
              fontWeight: 700,
            }}
          >
            Source Code
          </Typography>
          <FiExternalLink />
        </Link>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "1.3rem", md: "1.6rem" },
          mr: "2px",
        }}
      >
        &copy;2022-{`${new Date().getFullYear()} `}
        <Link
          href="https://github.com/saiful-70/"
          target="_blank"
          underline="hover"
          sx={{
            // color: "text.primary",
            color: colors.blue[500],
            fontSize: { xs: "1.3rem", md: "1.6rem" },
            textDecoration: "underline",
            fontWeight: 700,
          }}
        >
          Saiful Islam
        </Link>
        . All Rights Reserved.
      </Typography>
    </Box>
  );
};
export default Footer;
