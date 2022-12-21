import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Container, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";

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

      <motion.div
        key={router.route}
        initial="pageInit"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInit: { x: 0, y: -150, opacity: 0 },
          pageAnimate: { x: 0, y: 0, opacity: 1 },
          pageExit: { x: 0, y: -150, opacity: 0 },
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.7,
            delay: 0.3,
            ease: "easeInOut",
          },
          opacity: { delay: 0.1, duration: 0.3, ease: "easeIn" },
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ px: { xs: "1rem", md: "0" } }}>{children}</Box>
          <Footer />
        </Container>
      </motion.div>
    </Box>
  );
};
export default MainLayout;
