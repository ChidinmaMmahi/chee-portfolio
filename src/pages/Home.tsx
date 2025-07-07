import { motion } from "framer-motion";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="text-gray-600 ">
      <main className="relative h-screen flex justify-center items-center py-10 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-1/2 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="text-green-700 animate-bounce">
              Chidinma Mmahi
            </span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cum
            eum praesentium cumque! Aliquam totam minus ut reprehenderit saepe!
            Odio, rem. Soluta id, numquam cumque quis magnam tenetur eaque quas!
          </p>
          <div className="space-x-2 mt-5">
            <Button
              title="View My Work"
              extraClassnames="bg-green-500 text-gray-100"
            />
            <Button
              title="Contact Me"
              extraClassnames="border border-gray-300"
            />
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default Home;
