import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiJest,
  SiReactquery,
  SiGraphql,
  SiAntdesign,
  SiChakraui,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsPhone } from "react-icons/bs";
import { MdOutlineStorage, MdFlag, MdAnimation } from "react-icons/md";
import type { ReactNode } from "react";

type Skill =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Tailwind CSS"
  | "TanStack Query"
  | "Git"
  | "GitHub"
  | "REST APIs"
  | "Responsive Design"
  | "Framer Motion"
  | "Zustand"
  | "Testing (Jest)"
  | "GraphQL"
  | "Feature Flags"
  | "Ant Design"
  | "Chakra UI";

export const skillsMap: Record<Skill, ReactNode> = {
  HTML: <SiHtml5 className="text-[#E34F26]" />,
  CSS: <SiCss3 className="text-[#1572B6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38B2AC]" />,
  "TanStack Query": <SiReactquery className="text-[#FF4154]" />,
  Git: <SiGit className="text-[#F05032]" />,
  GitHub: <SiGithub className="text-white" />,
  "REST APIs": <TbApi className="text-[#22C55E]" />,
  "Responsive Design": <BsPhone className="text-[#0EA5E9]" />,
  "Framer Motion": <MdAnimation className="text-[#FF2C83]" />,
  Zustand: <MdOutlineStorage className="text-[#FACC15]" />,
  "Testing (Jest)": <SiJest className="text-[#C21325]" />,
  GraphQL: <SiGraphql className="text-[#E535AB]" />,
  "Feature Flags": <MdFlag className="text-[#FBBF24]" />,
  "Ant Design": <SiAntdesign className="text-[#1677FF]" />,
  "Chakra UI": <SiChakraui className="text-[#319795]" />,
};
