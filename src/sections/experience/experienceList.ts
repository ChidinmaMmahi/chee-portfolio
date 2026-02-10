interface ExperienceProps {
  jobDuration: string;
  jobTitle: string;
  employer: string;
  responsibilities?: string;
}

export const ExperienceList: ExperienceProps[] = [
  {
    jobDuration: "July 2025 – Present",
    jobTitle: "Software Engineer",
    employer: "Seadans Solutions",
    responsibilities: "React · TypeScript · Tailwind · TanStack Query",
  },
  {
    jobDuration: "May 2025 – June 2025",
    jobTitle: "Frontend Developer",
    employer: "Supreme Technologies",
    responsibilities: "React · TypeScript · GraphQL · Jest",
  },
  {
    jobDuration: "November 2023 – April 2024",
    jobTitle: "Frontend Developer",
    employer: "Seadan Solutions",
    responsibilities: "React · JavaScript · Tailwind CSS",
  },
  {
    jobDuration: "January 2021 - January 2022",
    jobTitle: "Secretary to The General Manager",
    employer: "Paulo Compu-Serve",
  },
];
