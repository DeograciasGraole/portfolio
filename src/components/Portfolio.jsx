import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with seamless checkout and user experience",
      category: "E-COMMERCE",
      color: "yellow",
      image: "/assets/Ecomerce.png",
      github: "https://github.com/DeograciasGraole/ecommerce/tree/main",
      preview: "https://ecommercecodigo.netlify.app/",
      icon: "🛒",
      highlights: ["HTML/CSS/JavaScript", "UI DESIGN", "RESPONSIVE DESIGN"],
    },
    {
      id: 2,
      title: "Omnifood App Front-end",
      description:
        "User-centered website application with intuitive navigation and delightful interactions",
      category: "html/css/JavaScript/UI DESIGN",
      color: "pink",
      image: "/assets/project1.png",
      github: "https://github.com/DeograciasGraole/omnifood",
      preview: "https://codigo-omnifood.netlify.app/",
      icon: "📱",
      highlights: ["HTML/CSS/JavaScript", "UI DESIGN", "RESPONSIVE DESIGN"],
    },
    {
      id: 3,
      title: "Book-review Website",
      description:
        "Book-review website built with Laravel that allows users to easily discover and explore books. The platform includes search functionality and smart filters for finding top-rated books based on different time periods.",
      category: "Laravel",
      color: "light-blue",
      image: "/assets/project2.png",
      github: "https://github.com/DeograciasGraole/Book-review",

      icon: "🎨",
      highlights: ["Laravel", "PHP", "MySQL"],
    },
    {
      id: 4,
      title: "blogApi-with-Laravel",
      description:
        "BlogApi-with-Laravel is a web application built with Laravel that allows users to easily create, read, update, and delete blog posts.",
      category: "Laravel",
      color: "teal",
      image: "/assets/project3.png",
      github: "https://github.com/DeograciasGraole/blogApi-with-Laravel",
      icon: "⚙️",
      highlights: ["Laravel", "PHP", "SQLITE"],
    },
    {
      id: 5,
      title: "Language learning Api with Laravel",
      description:
        "Language learning Api with Laravel is api backend for language learning app that allows users to easily read, update ,query lessson ,grammars vocabulary quizzes and tracking their progress, and delete language learning data.",
      category: "Laravel",
      color: "teal",
      image: "/assets/project1.png",
      github: "https://github.com/DeograciasGraole/api",
      icon: "📱",
      highlights: ["Laravel", "PHP", "SQLITE"],
    },
    {
      id: 6,
      title: "language learning Front-end with Flutter",
      description:
        "A Laravel application for creating and managing language learning app, with tracking progress and quizzes.",
      category: "Laravel",
      color: "teal",
      image: "/assets/project1.png",
      github: "https://github.com/DeograciasGraole/lang",
      icon: "⚙️",
      highlights: ["Flutter", "Dart", "DIO"],
    },
    {
      id: 7,
      title: "Events Management with Laravel",
      description:
        "A Laravel application for creating and managing events, with attendee tracking and automated email reminders.",
      category: "Laravel",
      color: "teal",
      image: "/assets/project1.png",
      github: "https://github.com/DeograciasGraole/eventsManagement",
      icon: "⚙️",
      highlights: ["Laravel", "PHP", "SQLITE"],
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          WORK
        </motion.h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -12 }}
            >
              <div className="portfolio-card">
                <header className="portfolio-meta">
                  <span className={`portfolio-pill portfolio-${project.color}`}>
                    {project.category}
                  </span>
                  <span className="portfolio-icon">{project.icon}</span>
                </header>

                <div className="portfolio-hero">
                  <div className="portfolio-hero-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="portfolio-icon-fallback"
                      style={{ display: "none" }}
                    >
                      <span className="portfolio-icon-emoji">
                        {project.icon}
                      </span>
                    </div>
                    <div className="portfolio-hero-glow"></div>
                  </div>
                  <span className="portfolio-index">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="portfolio-info">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="portfolio-actions">
                  <motion.a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-cta"
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View case study
                    <span className="portfolio-cta-icon">↗</span>
                  </motion.a>

                  <div className="portfolio-links-inline">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="View on GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-link-icon"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Live Preview"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
