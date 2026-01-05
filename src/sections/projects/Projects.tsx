import { motion } from "framer-motion";
import { projectList } from "./projectList";

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2 className="max-w-4xl px-6 mx-auto text-3xl text-accent font-bold mb-10">
        Projects
      </h2>
      <div className="mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-8">
          {projectList.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="blank"
              whileHover={{
                translateY: -5,
                transition: { duration: 0.75, ease: "easeOut" },
              }}
              className="border-[0.5px] border-accent/40 dark:bg-white/10 bg-black/5 rounded-lg p-6 shadow-xl cursor-pointer inline-block"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex items-center gap-x-1">
                {project.techStack?.map((techStack) => (
                  <p className="text-[10px] bg-accent/60 dark:bg-accent/30 border-[0.5px] border-accent py-1 px-2 rounded-full text-white">
                    {techStack}
                  </p>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
