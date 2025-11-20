import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import aboutPic from "../assets/aboutmepic.png";

const Hero = () => {
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((layer) => {
        if (!layer) return;
        const speed = parseFloat(layer.dataset.speed || "0.2");
        const offset = window.scrollY * speed;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      {/* Top Section - Black Background */}
      <section className="hero-top">
        <div className="hero-ambient">
          {[0.12, 0.25, 0.38].map((speed, index) => (
            <span
              key={speed}
              className={`hero-parallax-layer hero-layer-${index + 1}`}
              data-speed={speed}
              ref={(el) => (parallaxRefs.current[index] = el)}
            ></span>
          ))}
        </div>
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SOFTWAR ENGINEER
          </motion.h1>

          <div className="hero-intro">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm currently orchestrating experiences at Hero Digital for a
              leading tech company that rhymes with Snapple, headquartered in
              Cupertino, California.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm a passionate designer with many years of experience who uses
              research, data, and thoughtful design to create delightful
              products that scale.
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
              Singer <span>—</span>
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
                Hey👋, I’m a Software developer
              </p>
              <h2 className="spotlight-title">DEGRACE GRAOLE</h2>
              <span className="spotlight-year">©2025</span>
            </motion.div>

            <motion.div
              className="spotlight-image"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="spotlight-glow"></div>
              <img
                src={aboutPic}
                alt="Devanta Ebison portrait"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              className="spotlight-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p>
                I build thoughtful, scalable product experiences across the
                entire customer journey. From research-backed design strategy to
                interaction design and usability testing, I create digital
                products that feel modern and human.
              </p>
              <div className="spotlight-links">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter (X)
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
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
              <p>E graolewillwamp@gmail.com</p>
              <p>T +90 533 861 3619</p>
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
