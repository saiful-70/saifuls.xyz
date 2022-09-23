export interface Project {
  slug: string;
  imgSrc: string;
  name: string;
  summary: string;
}

export interface Projects {
  projects: Project[];
}
