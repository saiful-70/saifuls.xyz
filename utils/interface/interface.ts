export interface IPage {
  [key: string]: string;
}

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

export interface IAboutHyperLinks {
  name: string;
  link: string;
}
