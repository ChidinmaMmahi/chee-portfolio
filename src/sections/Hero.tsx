import { motion } from "framer-motion";
import { Button } from "../components";
import { useScrollTo } from "../hooks";

export const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="sm:min-h-screen mt-32 sm:mt-0 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-32 sm:gap-10 px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Frontend Developer <br />
            crafting clean web experiences.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            I build modern, responsive interfaces using React, TypeScript, and
            Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4">
            <Button title="View My Work" onClick={() => scrollTo("projects")} />

            <Button
              title="Contact Me"
              onClick={() => scrollTo("contact")}
              variant="secondary-outline"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <motion.img
            src="/me.jpg"
            alt="Chidinma Mmahi"
            className="size-56 lg:size-96 rounded-full object-cover border-4 bg-accent"
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0px 20px 30px var(--shadow-100)",
                "0px 10px 15px var(--shadow-100)",
                "0px 20px 30px var(--shadow-100)",
              ],
            }}
            transition={{
              delay: 2,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};
