import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children, extraDelay }) => {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 + (extraDelay || 0), ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
