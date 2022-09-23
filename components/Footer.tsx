import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Typography variant="body1" textAlign="center" sx={{ py: 5 }}>
      © {`${new Date().getFullYear()}`} Saiful Islam. All Rights Reserved.
    </Typography>
  );
};
export default Footer;
