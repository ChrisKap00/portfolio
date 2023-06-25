import React from "react";
import { motion } from "framer-motion";

const variants = {
  closed: {
    x: "calc(200px + 2rem)",
    transition: {
      delay: 0.15,
    },
  },

  open: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const Menu = ({ children, style, isOpen, setIsOpen }) => {
  return (
    <motion.div
      style={style}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      exit="closed"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Menu;
