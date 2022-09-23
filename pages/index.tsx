import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Main from "../layout/Main";
import styles from "../styles/Home.module.css";

import { Box, Typography } from "@mui/material";
import Header from "../components/Home/Header";
import Projects from "../components/Home/Projects";

const Home: NextPage = () => {
  return (
    <Main>
      <Header />
      <Projects />
    </Main>
  );
};

export default Home;
