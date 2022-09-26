import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 6, textAlign: "center" }}>
      <Divider />
      <Box sx={{ py: 1 }}>
        <Link
          href="https://github.com/saiful-70?tab=repositories"
          target="_blank"
          variant="body2"
          sx={{ color: "text.primary", textDecoration: "underline" }}
        >
          Source Code on Github
        </Link>
      </Box>
      <Typography variant="body1" textAlign="center">
        © {`${new Date().getFullYear()}`} Saiful Islam. All Rights Reserved.
      </Typography>
    </Box>
  );
};
export default Footer;
