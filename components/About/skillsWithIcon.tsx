import { BiGitBranch } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { FaAws, FaDocker, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiExpress,
  SiJetpackcompose,
  SiKotlin,
  SiMaterialdesign,
  SiMongodb,
  SiNgrx,
  SiRedux,
  SiSass,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";


export const skills = {
  main: [
    {
      name: "Angular",
      icon: <SiAngular />,
    },
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
      icon: <SiMaterialdesign />,
    },
    {
      name: "SASS",
      icon: <SiSass />,
    },
    {
      name: "Bootstrap",
      icon: <BsBootstrap />,
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
    {
      name: "RxJS",
      icon: <SiNgrx />,
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
    {
      name: "Jetpack Compose",
      icon: <SiJetpackcompose />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "AWS",
      icon: <FaAws />,
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
      icon: <FaJava />,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin />,
    },
  ],
};
