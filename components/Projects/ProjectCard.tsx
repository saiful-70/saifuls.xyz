import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box, Divider } from "@mui/material";

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
          sx={{ position: "relative", height: "22rem", borderRadius: "8px" }}
        >
          <Image
            src={`${item.imgSrc[0]}`}
            alt="Card Image"
            layout="fill"
            style={{ borderRadius: ".8rem" }}
          />
        </Box>
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
