import { motion } from "framer-motion";

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 100 }}
      transition={{ duration: 0.5 }}
      className="ml-0 p-4 bg-blue-500 text-white pt-20"
    >
      I fade in and move right!
    </motion.div>
  );
};
export default AnimatedBox;
