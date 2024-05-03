import { motion } from "framer-motion";

function Transition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
