import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box } from "@mui/material";

interface ProjectCardProps {
  item: {
    slug: string;
    imgSrc: string[];
    name: string;
    summary: string;
    preview?: string;
    repo: string;
    stack: string;
    description?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <Link href={`/projects/${item.slug}`}>
      <Box
        boxShadow={5}
        sx={{
          maxWidth: { xs: "100%" },
          cursor: "pointer",
          transition: "transform .2s ease-in",
          pb: 3,
          borderRadius: 2,

          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <Box
          // boxShadow={5}
          sx={{ position: "relative", height: "250px", borderRadius: "8px" }}
        >
          <Image
            src={`${item.imgSrc[0]}`}
            alt="Card Image"
            layout="fill"
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Box sx={{ textAlign: "center", mt: 1, px: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="body2" fontWeight="bold">
            ({item.stack})
          </Typography>
          <Typography variant="body2">{item.summary}</Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default ProjectCard;
