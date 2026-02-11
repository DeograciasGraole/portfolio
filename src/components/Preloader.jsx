import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

const Preloader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="preloader-content">
            <motion.div
              className="preloader-ring"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            />
            <motion.div
              className="preloader-pill"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "70%", "100%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="preloader-meta">
              <p className="preloader-label">Preparing Experience</p>
              <p className="preloader-title">DEOGRACE GRAOLE</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
