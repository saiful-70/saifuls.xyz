import { ReactNode } from "react";

export interface IBtnProps {
  name: string;
  link?: string;
  color?: "primary" | "secondary" | undefined;
  variant?: "contained" | "outlined";
  icon?: ReactNode;
  toggleMenu?: () => void;
}

export interface ProjectCardProps {
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

export interface PojectDescriptionProps {
  parent: string;
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

export interface ImageTemplateProps {
  height: string;
  width: string;
  borderRadius: string;
  src: string;
  alt: string;
}
