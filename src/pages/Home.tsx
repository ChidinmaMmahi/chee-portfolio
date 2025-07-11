import { motion } from "framer-motion";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="pb-[1000px]">
      <section className="relative h-screen flex justify-center items-center py-10">
        <div className="absolute inset-0 bg-cover bg-center z-0 bg-image" />
        <div className="absolute inset-0 bg-overlay dark:opacity-80 z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute max-w-[700px] lg:w-1/2 text-center z-20 p-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-text">
            Hi, I'm <span className="text-primary">Chidinma Mmahi</span>
          </h1>
          <p className="text-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cum
            eum praesentium cumque! Aliquam totam minus ut reprehenderit saepe!
            Odio, rem. Soluta id, numquam cumque quis magnam tenetur eaque quas!
          </p>
          <div className="space-x-2 mt-5">
            <Button
              title="View My Work"
              extraClassnames="bg-primary text-white"
            />
            <Button
              title="Contact Me"
              extraClassnames="border border-surface text-text"
            />
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Home;
