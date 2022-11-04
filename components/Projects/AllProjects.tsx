import React, { useState } from "react";

import { Box, Grid, Link as MuiLink, Typography } from "@mui/material";
import styles from "./Projects.module.css";

import ProjectCard from "../Projects/ProjectCard";

import { projects } from "../../utils/data/projectData";

const Projects: React.FC = () => {
  const [value, setValue] = useState("");
  const setChangeValue = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
        }}
      >
        <Typography variant="subtitle1" align="center" fontWeight={700}>
          Search Projects
        </Typography>
        <input
          placeholder="Search by Project Name/Stack/Description"
          className={`${styles.input}`}
          onChange={setChangeValue}
          style={{}}
        />
      </Box>
      {/* <HeadingSecondary name="All Projects" /> */}
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {value
          ? projects
              .filter(
                (filteredElement) =>
                  filteredElement.name
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  filteredElement.summary
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  filteredElement.stack
                    .toLowerCase()
                    .includes(value.toLowerCase())
              )
              .map((filteredItem) => (
                <Grid item xs={12} sm={6} md={6} key={filteredItem.name}>
                  <ProjectCard item={filteredItem} />
                </Grid>
              ))
          : projects.map((item) => (
              <Grid item xs={12} sm={6} md={6} key={item.name}>
                <ProjectCard item={item} />
              </Grid>
            ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <MuiLink
          href="https://github.com/saiful-70?tab=repositories"
          target="_blank"
          variant="subtitle1"
          underline="hover"
          sx={{ color: "text.primary" }}
        >
          More on Github
        </MuiLink>
      </Box>
    </Box>
  );
};
export default Projects;
