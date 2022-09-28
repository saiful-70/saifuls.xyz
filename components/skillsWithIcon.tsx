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
} from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";

export const skills = {
  main: [
    // {
    //   name: "Javascript",
    //   icon: <IoLogoJavascript />,
    // },
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
};
