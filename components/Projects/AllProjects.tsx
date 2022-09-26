import React, { useState } from "react";

import { Box, Grid, Link as MuiLink } from "@mui/material";
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
    <Box sx={{ py: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <input
          placeholder="Search Projects"
          className={`${styles.input}`}
          onChange={setChangeValue}
          style={{}}
        />
      </Box>
      {/* <HeadingSecondary name="All Projects" /> */}
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        {value
          ? projects
              .filter(
                (filteredElement) =>
                  filteredElement.name
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  filteredElement.summary
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
      <Box sx={{ textAlign: "center", mt: 3 }}>
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
