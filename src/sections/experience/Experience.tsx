import { motion } from "framer-motion";
import { ExperienceList } from "./experienceList";
import { Button, SectionLayout } from "../../components";
import { GoArrowUpRight } from "react-icons/go";

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
    <section id="experience" className="bg-surface-200">
      <SectionLayout title="Experience">
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
                    {experience.employer}
                  </span>
                </h3>

                <p className="mt-4 space-y-2 text-gray-400">
                  {experience.responsibilities}
                </p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            href="/resume.pdf"
            target="_blank"
            title="View full resume"
            variant="tertiary"
            extraClassnames="!rounded-full !px-5 !py-3 !text-base"
            endIcon={<GoArrowUpRight className="text-xl" />}
          />
        </div>
      </SectionLayout>
    </section>
  );
};
