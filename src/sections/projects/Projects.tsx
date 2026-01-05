import { motion } from "framer-motion";
import { projectList } from "./projectList";
import { SectionLayout } from "../../components";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = projectList.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
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
        title="Projects"
        extraClasses="relative overflow-hidden flex flex-col items-center gap-y-5"
      >
        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {projectList.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ translateY: -5 }}
              className="min-w-[50%] max-w-[50%] px-4"
            >
              <div className="border border-t-0 border-gray-200 dark:border-none dark:bg-white/10 bg-black/5 rounded-lg shadow-xl">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-lg"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-accent/60 dark:bg-accent/30 border border-accent px-2 py-1 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition hover:scale-110"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition hover:scale-110"
        >
          →
        </button>

        <div className="flex gap-2">
          {projectList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
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
