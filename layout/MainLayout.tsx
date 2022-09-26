import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "../components/Navbar/Navabar";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <Box component="main" sx={{ bgcolor: "primary.main", minHeight: "100vh" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content="Saiful's homepage" />
        <meta name="author" content="Saiful Islam" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta
          property="og:url"
          content={`https://saifuls.xyz${router.asPath}`}
        />
        <link rel="canonical" href={`https://saifuls.xyz${router.asPath}`} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Saiful Islam" />
        <meta name="og:title" content="Saiful Islam" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.saifuls.xyz/images/avatar.jpeg"
        />
        <title>
          {router.asPath === "/"
            ? "Home"
            : router.asPath.split("/")[1].charAt(0).toUpperCase() +
              router.asPath.split("/")[1].slice(1)}{" "}
          | Saiful Islam
        </title>
      </Head>
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
