import React from "react";

import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "../components/Navbar/Navabar";
import Footer from "../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ px: 2 }}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};
export default Main;
