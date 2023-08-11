import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        HOME
      </motion.div>
    </>
  );
}

export default Home;
