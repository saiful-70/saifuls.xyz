import React, { useState } from "react";
import { Box, colors, Grid, Link as MuiLink, Typography } from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
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
    <Box sx={{ py: { xs: "2rem", md: "2rem" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "4rem",
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle2"
          align="center"
          fontWeight={600}
        >
          Search Projects
        </Typography>
        <input
          placeholder="e.g. chat, react, created, etc."
          className={`${styles.input}`}
          onChange={setChangeValue}
          style={{}}
        />
      </Box>

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

      <MuiLink
        href="https://github.com/saiful-70?tab=repositories"
        target="_blank"
        underline="hover"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.3rem",
          mt: "4rem",
          width: "auto",
          color: colors.blue[500],
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            mr: "2px",
            fontSize: { xs: "1.3rem", md: "1.6rem" },
            fontWeight: 600,
          }}
        >
          More on Github
        </Typography>
        <FiExternalLink />
      </MuiLink>
    </Box>
  );
};
export default Projects;
