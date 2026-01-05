import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 sm:pt-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left ">
        <h2 className="text-3xl font-bold mb-6 text-accent">About Me</h2>
        <p className="mb-4">
          Hi! I’m Chidinma Mmahi, a passionate web developer with experience in
          building responsive and interactive websites using React, Tailwind
          CSS, and TypeScript. I enjoy turning ideas into functional and
          beautiful digital experiences.
        </p>
        <p className="mb-6">
          When I’m not coding, I love exploring new design trends, learning new
          technologies, and working on creative side projects.
        </p>
      </div>
    </motion.section>
  );
};
