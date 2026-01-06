import { motion } from "framer-motion";
import { SectionLayout } from "../../components";
import { skillsMap } from "./skillsMap";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[image:var(--image-background)] relative bg-cover bg-center bg-fixed text-white/70"
    >
      {/* OVERLAY */}
      <span className="absolute inset-0 bg-black/60 dark:bg-[#0f172a]/80 z-0"></span>

      <motion.div
        className="relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <SectionLayout title="Skills & Technologies">
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
            {Object.entries(skillsMap).map(([skill, icon]) => (
              <div
                key={skill}
                className="flex items-center justify-center gap-3 bg-black/20 dark:bg-black/30 py-3"
              >
                <span className="text-2xl">{icon}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </SectionLayout>
      </motion.div>
    </section>
  );
};
