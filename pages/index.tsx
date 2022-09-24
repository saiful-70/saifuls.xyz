import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Main from "../layout/Main";
import styles from "../styles/Home.module.css";

import Header from "../components/Home/Header";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";

const Home: NextPage = () => {
  return (
    <Main>
      <Header />

      <About />

      <Projects />
    </Main>
  );
};

export default Home;
