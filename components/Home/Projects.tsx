import React from "react";
import { Box, Grid, Button } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";
import ProjectCard from "../Projects/ProjectCard";

import { recentProjects } from "../../utils/projectData";

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 5 }}>
      <HeadingSecondary name="Recent Projects" />
      <Grid container spacing={5} sx={{ px: 3 }}>
        {recentProjects.map((item) => (
          <Grid item xs={12} key={item.name}>
            <ProjectCard item={item} />
          </Grid>
        ))}
      </Grid>
      <Button
        // size="small"
        variant="outlined"
        sx={{
          // width: "100%",
          margin: "20px auto",
          px: 2,
          display: "block",
          fontWeight: "700",
          color: "text.primary",
          bgcolor: "secondary.main",
          "&:hover": {
            bgcolor: "secondary.main",
          },
        }}
      >
        See All Projects {">"}
      </Button>
    </Box>
  );
};
export default Projects;
