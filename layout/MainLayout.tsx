import React from "react";

import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "../components/Navbar/Navabar";
import Footer from "../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ bgcolor: "primary.main", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ px: 3 }}>{children}</Box>
      </Container>
      <Footer />
    </Box>
  );
};
export default MainLayout;
