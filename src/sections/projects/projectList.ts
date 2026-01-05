import coinlytics from "../../assets/project-screenshots/coinlytics.png";
import recursiveMenu from "../../assets/project-screenshots/recursive-menu.png";
import multiStepForm from "../../assets/project-screenshots/mutli-step-form.png";

interface ProjectProps {
  image?: string;
  title: string;
  description: string;
  href?: string;
  techStack?: string[];
}

export const projectList: ProjectProps[] = [
  {
    image: multiStepForm,
    title: "Multi-Step Form System",
    description:
      "A React/TypeScript 5-step form (account setup, profile, contact, phone OTP verification, summary) with Zustand state management and localStorage persistence. Features responsive UI, theme switching, form validation, step navigation, and progress tracking.",
    href: "https://chi-multistepform.netlify.app",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    image: coinlytics,
    title: "Crypto Dashboard",
    description:
      "An interactive crypto market explorer that lets users search, sort, and view detailed cryptocurrency prices in multiple currencies, featuring infinite scrolling, real-time data, and a responsive, high-performance UI.",
    href: "https://coinlyticscrypto.netlify.app",
    techStack: [
      "React",
      "TypeScript",
      "TanStack React Query",
      "Tailwind CSS",
      "Ant Design",
      "Framer Motion",
      "React Router",
      "CoinGecko API",
    ],
  },
  {
    image: recursiveMenu,
    title: "Recursive Menu Feature",
    description:
      "A component-driven app with a recursive tree structure (like VS Code’s file explorer) hosting interactive UI tools and mini-apps, including a star rating system, image slider, accordion, tic-tac-toe, QR code generator, and GitHub profile finder. Built for scalability, reusability, and clean state management.",
    href: "https://components-menu.netlify.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
  },
  {
    image: recursiveMenu,
    title: "Vics Oil Web",
    description:
      "VicsOil is an AI-powered e-commerce and marketing system for a red oil brand, automating sales, WhatsApp ordering, bulk pricing, custom souvenir packaging, and content marketing using AI and workflow automation.",
    href: "https://vicsoil.netlify.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
