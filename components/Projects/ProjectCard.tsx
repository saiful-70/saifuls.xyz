import React from "react";
import Link from "next/link";
import { Typography, Box, Divider } from "@mui/material";
import ImageTemplate from "../common/ImageTemplate";
import { ProjectCardProps } from "../../utils/interface/propsInterface";

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <Link href={`/projects/${item.slug}`}>
      <Box
        boxShadow={5}
        sx={{
          width: { xs: "100%" },
          cursor: "pointer",
          transition: "transform .2s ease-in",
          pb: 3,
          borderRadius: 2,
          height: "100%",

          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <ImageTemplate
          height="22rem"
          width="auto"
          borderRadius=".8rem"
          src={`${item.imgSrc[0]}`}
          alt={`${item.name}'s image`}
        />

        <Box sx={{ textAlign: "center", mt: "1rem", px: "1.6rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1.8rem" }}>
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "1.3rem",
            }}
          >
            {item.stack}
          </Typography>
          <Divider />
          <Typography sx={{ fontSize: "1.3rem", mt: "1rem" }}>
            {item.summary}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default ProjectCard;
