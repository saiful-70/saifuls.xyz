import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

interface ProjectCardProps {
  item: {
    slug: string;
    imgSrc: string;
    name: string;
    summary: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <Link href={item.slug}>
      <Box sx={{ maxWidth: { xs: "100%" }, cursor: "pointer" }}>
        <Box
          boxShadow={5}
          sx={{ position: "relative", height: "250px", borderRadius: "8px" }}
        >
          <Image
            src={`${item.imgSrc}`}
            alt="Card Image"
            layout="fill"
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h6" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.summary}</Typography>
        </Box>
      </Box>
    </Link>
  );
};
export default ProjectCard;
