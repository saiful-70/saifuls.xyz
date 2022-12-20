import React from "react";
import type { NextPage } from "next";
import { Box, Divider } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/About/Header";
import Skills from "../../components/About/Skills";
import Education from "../../components/About/Education";
import ProblemSolvingSkills from "../../components/About/ProblemSolvingSkills";
import HeadingSecondary from "../../components/Heading/HeadingSecondary";
import Social from "../../components/common/Social";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      {/* <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: { opacity: 1, scale: 1, transition: { delay: 0.3 } },
        }}
      > */}
      <Header />
      <Divider sx={{ mt: 3 }} />
      <Education />
      <Skills />
      <ProblemSolvingSkills />
      {/* </motion.div> */}
    </React.Fragment>
  );
};

export default Index;
