interface ExperienceProps {
  jobDuration: string;
  jobTitle: string;
  employer: string;
  responsibilities: string;
}

export const ExperienceList: ExperienceProps[] = [
  {
    jobDuration: "January 2025 – Present",
    jobTitle: "Software Engineer",
    employer: "Moniepoint Plc (via Seadans Solutions)",
    responsibilities:
      "Developed web onboarding features for Moniepoint users using React, TypeScript, and Tailwind CSS. Integrated front-end interfaces with backend services via TanStack Query, implemented feature flags to reduce deployment risks, and leveraged the Kamona component library for consistent UI. Wrote unit and integration tests and collaborated with the team using Git for code reviews and releases.",
  },
  {
    jobDuration: "January 2025 – Present",
    jobTitle: "Frontend Developer",
    employer: "Stears (via Seadans Solutions)",
    responsibilities:
      "Developed responsive UI components with React, TypeScript, and Tailwind CSS, ensuring visual consistency. Integrated GraphQL APIs for real-time data insights and supported feature flag rollouts for experimental updates. Wrote unit and integration tests with Jest and collaborated with engineering and data teams using Git on dashboards, insight pages, and internal tools.",
  },
  {
    jobDuration: "September 2024 – December 2024",
    jobTitle: "Frontend Developer",
    employer: "Seadan Solutions",
    responsibilities:
      "Assisted in developing Terrachain, a platform addressing rental challenges for immigrants, using React, JavaScript, and Tailwind CSS. Helped build responsive UI components for property listings, virtual tours, and credit assessments. Supported real-time notifications, digital contracts, and automated lease renewals, collaborating with the team using Git and following code quality practices with ESLint and Prettier.",
  },
  {
    jobDuration: "January 2021 - January 2022",
    jobTitle: "Secretary to The General Manager",
    employer: "Paulo Compu-Serve",
    responsibilities:
      "Provided customer support by responding to client inquiries and assisting with requests. Helped coordinate logistics for events like conferences, workshops, and seminars, while following company policies and procedures. Collaborated with team members and external contacts, demonstrating multitasking, problem-solving, and attention to detail.",
  },
];
