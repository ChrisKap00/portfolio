import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <span id={id}></span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
