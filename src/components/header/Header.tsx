import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../provider";
import { Button } from "../Button";
import { useScrollTo } from "../../hooks";
import { motion } from "framer-motion";
import { useActiveSection } from "../../hooks";

type HeaderProps = {
  onAnimationComplete?: () => void;
  showContent?: boolean;
};

const navLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export const Header = ({ onAnimationComplete, showContent }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const scrollTo = useScrollTo();
  const activeSection = useActiveSection(navLinks, showContent);
  const darkMode = theme === "dark";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={onAnimationComplete}
      className="p-4 sm:px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-[10px] text-black dark:text-white"
    >
      <p className="text-3xl font-bold italic">
        CM<span className="text-accent">.</span>
      </p>

      <nav className="hidden sm:flex items-center gap-6">
        {navLinks.map((link) => (
          <motion.div key={link} className="relative">
            <motion.button
              onClick={() => scrollTo(link)}
              className="capitalize cursor-pointer text-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link}
            </motion.button>

            {activeSection === link && (
              <motion.span
                className="absolute left-0 right-0 h-[2px] bg-[var(--accent)] -bottom-1 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </motion.div>
        ))}
      </nav>

      <div className="flex items-center gap-x-2">
        <Button
          href=""
          title="Resume"
          variant="primary-outline"
          extraClassnames="hover:bg-accent hover:text-white hover:opacity-500 font-semibold"
        />

        <button
          className="p-2 rounded-full cursor-pointer bg-accent hover:opacity-50"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <MdOutlineLightMode className="text-xl text-white" />
          ) : (
            <MdOutlineDarkMode className="text-xl text-white" />
          )}
        </button>
      </div>
    </motion.header>
  );
};
