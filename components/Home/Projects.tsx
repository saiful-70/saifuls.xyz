import React from "react";
import { Box, Grid } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";
import ProjectCard from "../Projects/ProjectCard";

import { projects } from "../../utils/data/projectData";
import BtnNav from "../Button/BtnSecondary";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <Box sx={{ pt: "2rem" }}>
      <HeadingSecondary name="Projects" />
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {projects.slice(0, 2).map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.name}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Link href="/projects">
        <BtnNav name="More Projects" link="/projects" />
      </Link>
    </Box>
  );
};
export default Projects;
