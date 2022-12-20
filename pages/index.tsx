import React from "react";
import type { NextPage } from "next";

import Header from "../components/Home/Header";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
