import { motion } from "framer-motion";
import { SectionLayout, TypingText } from "../components";

export const Contact = () => {
  return (
    <section id="contact" className="text-center">
      <SectionLayout>
        <div>
          <TypingText
            text="Let’s build something together"
            className="text-xl sm:text-3xl font-bold mb-10"
          />
        </div>
        <div>
          <TypingText
            text="Open to roles, freelance work, and collaborations."
            className="text-gray-400 mb-20"
          />
        </div>

        <motion.div
          className="inline-block mt-6 p-[2px] rounded-md bg-gradient-to-r from-red-400 to-pink-500"
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              "0px 20px 30px var(--shadow-100)",
              "0px 10px 15px var(--shadow-100)",
              "0px 20px 30px var(--shadow-100)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="mailto:mmahichidinma336@outlook.com"
            className="block px-5 py-2.5 rounded-md bg-red-900/50 hover:bg-red-900/70 text-white"
          >
            Email Me
          </a>
        </motion.div>
      </SectionLayout>
    </section>
  );
};
