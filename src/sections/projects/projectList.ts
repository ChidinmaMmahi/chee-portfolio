interface ProjectProps {
  image?: string;
  title: string;
  description: string;
  webhref?: string;
  githref?: string;
  techStack?: string[];
}

export const projectList: ProjectProps[] = [
  {
    image: "/project-screenshots/multi-step-form.png",
    title: "Multi-Step Form System",
    description:
      "A React/TypeScript 5-step form (account setup, profile, contact, phone OTP verification, summary) with Zustand state management and localStorage persistence. Features responsive UI, theme switching, form validation, step navigation, and progress tracking.",
    webhref: "https://chi-multistepform.netlify.app",
    githref: "https://github.com/ChidinmaMmahi/multi-step-form-system",
    techStack: ["React", "TypeScript", "Tailwind"],
  },
  {
    image: "/project-screenshots/coinlytics.png",
    title: "Crypto Dashboard",
    description:
      "An interactive crypto market explorer that lets users search, sort, and view detailed cryptocurrency prices in multiple currencies, featuring infinite scrolling, real-time data, and a responsive, high-performance UI.",
    webhref: "https://coinlyticscrypto.netlify.app",
    githref: "https://github.com/ChidinmaMmahi/crypto-dashboard",
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
    image: "/project-screenshots/recursive-menu.png",
    title: "Recursive Menu Feature",
    description:
      "A component-driven app with a recursive tree structure (like VS Code’s file explorer) hosting interactive UI tools and mini-apps, including a star rating system, image slider, accordion, tic-tac-toe, QR code generator, and GitHub profile finder. Built for scalability, reusability, and clean state management.",
    webhref: "https://components-menu.netlify.app",
    githref: "https://github.com/ChidinmaMmahi/Recursive-menu-feature",
    techStack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
  },
  {
    image: "/project-screenshots/vicsoil.jpg",
    title: "Vics Oil Web",
    description:
      "VicsOil is an AI-powered e-commerce and marketing system for a red oil brand, automating sales, WhatsApp ordering, bulk pricing, custom souvenir packaging, and content marketing using AI and workflow automation.",
    webhref: "",
    githref: "https://github.com/ChidinmaMmahi/vics-oil-web",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
