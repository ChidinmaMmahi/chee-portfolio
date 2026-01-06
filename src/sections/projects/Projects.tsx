import { motion } from "framer-motion";
import { projectList } from "./projectList";
import { Button, SectionLayout } from "../../components";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { Variants } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    backdropFilter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Projects = () => {
  const totalSlides = projectList.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const slidesPerView = isDesktop ? 2 : 1;
  const translatePercentage = isDesktop ? 50 : 100;
  const maxIndex = totalSlides - slidesPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <motion.section
      id="projects"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SectionLayout
        title="My Projects"
        extraClasses="relative flex flex-col items-center gap-y-6"
      >
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * translatePercentage}%)`,
            }}
          >
            {projectList.map((project, idx) => (
              <div
                key={project.title}
                className="min-w-full md:min-w-[50%] max-w-full md:max-w-[50%] px-4"
              >
                <div
                  className="relative border border-gray-200 dark:border-none dark:bg-white/10 bg-black/5 rounded-lg shadow-xl h-full flex flex-col justify-between"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-t-lg w-full object-cover"
                    />
                  )}

                  <div className="p-2 md:p-3">
                    <h3 className="md:text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-[10px] sm:text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] sm:text-[10px] bg-accent/60 dark:bg-accent/30 border border-accent px-2 py-1 rounded-full text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* HOVER OVERLAY */}
                  {hoveredIndex === idx && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute inset-0 bg-black/60 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                      <motion.div variants={buttonVariants}>
                        {project.webhref && (
                          <Button
                            title="Website"
                            href={project.webhref}
                            target="_blank"
                            variant="primary-outline"
                            extraClassnames="text-white !rounded-full hover:bg-accent"
                            startIcon={<TbWorld className="text-xl" />}
                            endIcon={<IoArrowForward />}
                          />
                        )}
                      </motion.div>

                      <motion.div variants={buttonVariants}>
                        {project.githref && (
                          <Button
                            title="Github"
                            href={project.githref}
                            target="_blank"
                            variant="primary-outline"
                            extraClassnames="text-white !rounded-full hover:bg-accent"
                            startIcon={<SiGithub className="text-xl" />}
                            endIcon={<IoArrowForward />}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ARROWS */}
        <button
          onClick={handlePrev}
          className="absolute left-3 lg:left-0 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <IoIosArrowBack className="text-2xl sm:text-4xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 lg:right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <IoIosArrowForward className="text-2xl sm:text-4xl" />
        </button>

        {/* ELLIPSES */}
        <div className="flex gap-1 sm:gap-2 mt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`size-2 sm:size-3 rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </SectionLayout>
    </motion.section>
  );
};
