import { motion } from "framer-motion";
import { SectionLayout } from "../components";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => {
  return (
    <motion.section
      id="about"
      className="sm:pt-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SectionLayout title="About Me">
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
      </SectionLayout>
    </motion.section>
  );
};
