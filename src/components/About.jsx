import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ABOUT
          </motion.h2>

          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p>
                My journey into coding began with a curiosity about electronics.
                I wasn’t very skilled in it, but I loved the idea of building
                things. One day, I found Java and C++ tutorials on my sister’s
                computer—she was studying programming at university. Though she
                didn’t encourage me to dive in, worried it would take up too
                much of my time.
              </p>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Still, my curiosity pushed me to start learning in secret. After
                finishing high school and earning my diploma, I moved abroad to
                continue my education. That small, quiet beginning sparked a
                lasting passion for software development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
