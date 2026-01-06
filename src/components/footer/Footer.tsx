import type { ReactNode } from "react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

type socialLinksProps = {
  href: string;
  icon: ReactNode;
};

const socialLinks: socialLinksProps[] = [
  {
    href: "https://github.com/ChidinmaMmahi",
    icon: <SiGithub className=" " />,
  },
  {
    href: "https://www.linkedin.com/in/chidinma-dev",
    icon: <SiLinkedin className="text-[#0A66C2]" />,
  },
  {
    href: "https://wa.me/08114910021",
    icon: <SiWhatsapp className="text-[#25D366]" />,
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between md:items-end px-4 sm:px-10 py-14  bg-black/20">
      <div className="mb-10 md:mb-0">
        <h2 className="text-2xl font-bold mb-5">
          Chidinma Mmahi<span className="text-accent">.</span>
        </h2>
        <p className="w-[80%] md:w-[60%]">
          Frontend developer passionate about creating beautiful, accessible,
          and user-friendly web experiences.
        </p>
      </div>
      <div>
        <div className="flex justify-end mb-4 gap-x-1">
          {socialLinks.map((socials) => (
            <a
              key={socials.href}
              href={socials.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl p-2 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-700/50"
            >
              {socials.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-end">
          &copy; 2025 Chidinma Mmahi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
