import { motion } from "framer-motion";
import { Button, SectionLayout } from "../components";
import { useScrollTo } from "../hooks";
import profilePic from "/profile-pic.png";

export const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <section
      id="home"
      className="sm:min-h-screen mt-32 sm:mt-0 flex items-center justify-center"
    >
      <SectionLayout extraClasses="flex flex-col items-center sm:flex-row gap-32 sm:gap-10 !py-0">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Frontend Developer <br />
            crafting clean web experiences.
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Turning designs into responsive, high-performance interfaces.
          </p>

          <div className="mt-8 flex gap-4">
            <Button title="View My Work" onClick={() => scrollTo("projects")} />

            <Button
              title="Contact Me"
              href="mailto:mmahichidinma336@outlook.com"
              variant="secondary-outline"
            />
          </div>
        </div>

        <motion.img
          src={profilePic}
          alt="Chidinma Mmahi"
          className="w-56 h-full md:w-80 lg:w-96 rounded-full object-cover object-center border-4 aspect-square"
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
      </SectionLayout>
    </section>
  );
};
