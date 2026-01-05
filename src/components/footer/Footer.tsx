import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";

const socialLinks = [
  { href: "https://github.com/ChidinmaMmahi", icon: <LuGithub /> },
  { href: "https://www.linkedin.com/in/chidinma-dev", icon: <FiLinkedin /> },
  { href: "https://wa.me/08114910021", icon: <MdWhatsapp /> },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between md:items-end px-4 sm:px-10 py-14 bg-surface-200">
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
        <div className="flex justify-end gap-x-5 mb-4">
          {socialLinks.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              {icon}
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
