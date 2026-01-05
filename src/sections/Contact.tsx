import { motion } from "framer-motion";
import { TypingText } from "../components";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-2">
        <div>
          <TypingText
            text="Let’s build something together"
            className="text-xl sm:text-3xl font-bold mb-4"
          />
        </div>
        <div>
          <TypingText
            text="Open to roles, freelance work, and collaborations."
            className="text-gray-400 mb-8"
          />
        </div>

        <motion.a
          href="mailto:mmahichidinma336@outlook.com"
          className="bg-primary px-5 py-2.5 text-white rounded-md border-[0.5px] bg-accent inline-block mt-6"
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
          Email Me
        </motion.a>
      </div>
    </section>
  );
};
