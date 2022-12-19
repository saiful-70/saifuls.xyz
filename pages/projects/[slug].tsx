import React from "react";
import type { NextPage } from "next";

import ProjectDescription from "../../components/Projects/ProjectDescription";
import { projects } from "../../utils/data/projectData";

// import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const project = projects.filter((item) => item.slug === router.query.slug);

  return (
    <React.Fragment>
      <ProjectDescription
        parent={
          router.pathname.split("/")[1].charAt(0).toUpperCase() +
          router.pathname.split("/")[1].slice(1)
        }
        item={project[0]}
      />
    </React.Fragment>
  );
};

export default Index;
