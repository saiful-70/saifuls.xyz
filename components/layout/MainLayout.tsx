import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Container, CssBaseline } from "@mui/material";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const pageName =
    router.asPath === "/"
      ? "Home"
      : router.asPath.split("/")[1].charAt(0).toUpperCase() +
        router.asPath.split("/")[1].slice(1);

  return (
    <Box component="main" sx={{ bgcolor: "primary.main", minHeight: "100vh" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${pageName} | Saiful Islam`} />
        <meta name="author" content="Saiful Islam" />
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
        <title>{`${pageName} | Saiful Islam`}</title>
      </Head>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="md">
        <Box sx={{ px: { xs: "1rem", md: "2.5rem" } }}>{children}</Box>
        <Footer />
      </Container>
    </Box>
  );
};
export default MainLayout;
