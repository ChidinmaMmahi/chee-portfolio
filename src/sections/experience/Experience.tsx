import { motion } from "framer-motion";
import { ExperienceList } from "./experienceList";

const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-accent">Experience</h2>

        <div className="grid sm:grid-cols-2 gap-20">
          {ExperienceList.map((experience, index) => {
            const isEven = index % 2 === 0;
            const direction = isEven ? "left" : "right";

            return (
              <motion.div
                key={index}
                variants={slideVariants[direction]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-l-[0.5px] border-accent/80 pl-6"
              >
                <span className="text-sm text-primary">
                  {experience.jobDuration}
                </span>

                <h3 className="text-xl font-semibold mt-1">
                  {experience.jobTitle} -{" "}
                  <span className="text-base font-normal">
                    {experience.employmentType}
                  </span>
                </h3>

                <ul className="mt-4 space-y-2 text-gray-400 list-disc ml-4">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
