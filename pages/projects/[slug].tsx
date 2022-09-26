// This file will be written later

import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import fsPromises from "fs/promises";
// import path from "path";

import ProjectDescription from "../../components/Projects/ProjectDescription";
import { projects } from "../../utils/data/projectData";

import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";

// interface projectProps extends ParsedUrlQuery {
//   slug: string;
// }

const Index: NextPage = () => {
  const router = useRouter();
  // console.log(router.query);
  const project = projects.filter((item) => item.slug === router.query.slug);
  // console.log(project);
  return (
    <React.Fragment>
      <ProjectDescription item={project[0]} />
    </React.Fragment>
  );
};

export default Index;

// export const getStaticPaths: GetStaticPaths<projectProps> = async () => {
//   const data = await fetch("/utils/projectData.json");
//   const projects = await data.json();
//   const paths = projects.map((project: IProject) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<projectProps> = async ({
//   params,
// }: {
//   params: projectProps;
// }) => {
//   const filePath = path.join(process.cwd(), 'utils/projectData.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   const data = await fetch("/utils/projectData.json");
//   const projects = await data.json();
//   console.log(projects);
// const project = projects.filter((item: IProject) => {
//   return item.slug === params.slug;
// });

// return {
//   props: {
//     project,
//   },
// };
// };
