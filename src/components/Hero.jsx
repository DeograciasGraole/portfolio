import React from "react";
import { motion } from "framer-motion";
import aboutMe from "../assets/about-me.png";
import aboutGraole from "../assets/Aboutmepic.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* Top Section - Black Background */}
      <section className="hero-top">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SOFTWARE CODER
          </motion.h1>

          <div className="hero-intro">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I’m DeoGracias a web and mobile developer and a passionate
              singer. I see code as more than just a tool for building apps and
              websites—it’s a way to solve real problems and make a meaningful
              difference
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I’m a passionate software developer who combines research, clean
              architecture, and thoughtful design to create scalable, impactful
              digital products.
            </motion.p>
            <motion.a
              href="#contact"
              className="hero-cta"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
              <span className="arrow">→</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="hero-spotlight">
        <div className="spotlight-grid">
          <div className="spotlight-top">
            <span className="spotlight-logo">DEOGRACE GRAOLE</span>
            <button className="spotlight-menu">
              Menu <span>—</span>
            </button>
          </div>

          <div className="spotlight-middle">
            <motion.div
              className="spotlight-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <p className="spotlight-tagline">
                Hey👋, I’m a Software engineer
              </p>
              <h2 className="spotlight-title">DEOGRACE GRAOLE</h2>
              <span className="spotlight-year">©2026</span>
            </motion.div>

            <motion.div
              className="spotlight-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="spotlight-glow"></div>
              <img src={aboutGraole} alt="Graole portrait" loading="lazy" />
            </motion.div>

            <motion.div
              className="spotlight-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p>
                I specialize in creating clean, user-focused applications that
                are both functional and intuitive. Whether I’m developing
                software, performing on stage, or training at home, I bring
                creativity, discipline, and heart to everything I do.
              </p>
              <div className="spotlight-links">
                {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter (X)
                </a> */}
                <a
                  href="www.linkedin.com/in/deogracias-wampoyi-oleko-8399b1226"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/DeograciasGraole"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="https://codepen.io" target="_blank" rel="noreferrer">
                  CodePen
                </a>
              </div>
            </motion.div>
          </div>

          <div className="spotlight-bottom">
            <div className="spotlight-contact">
              <p>Developer</p>
              <p> And a passionate singer</p>
            </div>
            <div className="spotlight-scroll">
              <span>SCROLL</span>
              <div className="scroll-line"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
