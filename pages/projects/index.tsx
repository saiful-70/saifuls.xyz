import React from "react";
import type { NextPage } from "next";

import AllProjects from "../../components/Projects/AllProjects";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <AllProjects />
    </React.Fragment>
  );
};

export default Index;
