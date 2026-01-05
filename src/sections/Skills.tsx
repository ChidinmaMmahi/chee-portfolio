import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-[image:var(--image-background)] relative bg-cover bg-center bg-fixed text-white/70"
    >
      {/* overlay */}
      <span className="absolute inset-0 bg-black/60 dark:bg-[#0f172a]/80 z-0"></span>

      {/* content */}
      <motion.div
        className="relative max-w-4xl mx-auto px-6 z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl text-accent font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-white/70 rounded-lg p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
