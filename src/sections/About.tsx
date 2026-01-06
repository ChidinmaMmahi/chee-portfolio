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
      <SectionLayout
        title="About Me"
        extraClasses="lg:bg-[#fff4e392] lg:dark:bg-[#5d5d5a76] -mb-20 z-100 lg:rounded-t-xl"
      >
        <p className="mb-4 text-justify">
          Hey there! I'm <b className="text-accent text-lg">Chidinma Mmahi</b>,
          a frontend-focused engineer passionate about creating intuitive
          digital experiences. I work primarily with React, TypeScript, and
          Tailwind CSS, and I enjoy collaborating with cross-functional teams to
          ship reliable, well-designed products. I’m always learning, refining
          my craft, and exploring better ways to build for users and developers
          alike.
        </p>
        <p className="mb-6 text-justify">
          When I’m not coding, I love exploring new design trends, learning new
          technologies, and working on creative side projects.
        </p>
      </SectionLayout>
    </motion.section>
  );
};
