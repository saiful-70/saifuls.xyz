import React from "react";
import type { NextPage } from "next";
import Header from "../../components/About/Header";
import Skills from "../../components/About/Skills";
import Education from "../../components/About/Education";
import ProblemSolvingSkills from "../../components/About/ProblemSolvingSkills";
import { Box, Divider } from "@mui/material";
import HeadingSecondary from "../../components/Heading/HeadingSecondary";
import Social from "../../components/common/Social";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Divider sx={{ mt: 3 }} />
      <Education />
      <Skills />
      <ProblemSolvingSkills />
    </React.Fragment>
  );
};

export default Index;
