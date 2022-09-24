import React from "react";
import { Box, Grid, Button } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";
import ProjectCard from "../Projects/ProjectCard";

import { recentProjects } from "../../utils/projectData";
import BtnPrimary from "../Button/BtnPrimary";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 5 }}>
      <HeadingSecondary name="Recent Projects" />
      <Grid container spacing={5} sx={{ px: 3, justifyContent: "center" }}>
        {recentProjects.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.name}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Link href="/projects">
        <BtnPrimary name="See All Projects" />
      </Link>
    </Box>
  );
};
export default Projects;
