import { FaReact, FaBootstrap, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import {
  SiMaterialui,
  SiSass,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRedux,
  SiTypescript,
  SiJava,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

export const skills = {
  main: [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "NextJs",
      icon: <TbBrandNextjs />,
    },
    {
      name: "Material UI",
      icon: <SiMaterialui />,
    },
    {
      name: "SASS",
      icon: <SiSass />,
    },
    {
      name: "Git",
      icon: <BiGitBranch />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
  ],

  secondary: [
    {
      name: "Nodejs",
      icon: <IoLogoNodejs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio />,
    },
    {
      name: "React-Native",
      icon: <TbBrandReactNative />,
    },
  ],

  programmingLanguages: [
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      name: "C",
      icon: <SiC />,
    },
    {
      name: "Java",
      icon: <SiJava />,
    },
  ],
};
