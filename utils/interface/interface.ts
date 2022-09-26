export interface IProject {
  slug: string;
  imgSrc: string[];
  name: string;
  summary: string;
  preview?: string;
  repo: string;
  stack: string;
  description?: string[];
}
