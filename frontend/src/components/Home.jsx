import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Home
      </motion.div>
    </>
  );
}

export default Home;
