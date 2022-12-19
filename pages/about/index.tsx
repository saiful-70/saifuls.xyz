import React from "react";
import type { NextPage } from "next";
import Header from "../../components/About/Header";
import Skills from "../../components/About/Skills";
import Education from "../../components/About/Education";
import ProblemSolvingSkills from "../../components/About/ProblemSolvingSkills";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Skills />
      <ProblemSolvingSkills />
      <Education />
    </React.Fragment>
  );
};

export default Index;
