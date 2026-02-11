import React from 'react'
import { motion } from 'framer-motion'
import './TechStack.css'

const stacks = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'SPA architecture, hooks, performance profiling, design systems.',
    tag: '⚛',
    experience: '7 yrs'
  },
  {
    name: 'Laravel',
    category: 'Backend',
    description: 'API design, authentication flows, queue / event orchestration.',
    tag: '🎯',
    experience: '6 yrs'
  },
  {
    name: 'Flutter',
    category: 'Cross-Platform',
    description: 'Native-feel product launches on iOS, Android, and desktop.',
    tag: '💠',
    experience: '4 yrs'
  },
  {
    name: 'C++',
    category: 'Systems',
    description: 'High-performance modules, WebAssembly bridges, realtime logic.',
    tag: '🧠',
    experience: '5 yrs'
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    description: 'Modern ES standards, toolchains, testing, and runtime ergonomics.',
    tag: '⚡',
    experience: '9 yrs'
  },
  {
    name: 'Docker',
    category: 'DevOps',
    description: 'Containerized pipelines, local parity, and scalable deployments.',
    tag: '🐳',
    experience: '5 yrs'
  }
]

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <motion.div
          className="tech-stack-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tech-stack-label">Tech Stack</p>
          <h2>The tools I rely on to move products from idea to impact.</h2>
          <p>
            From polished mobile apps to resilient backend services, I combine proven frameworks with modern
            deployment practices to keep velocity high without sacrificing craft.
          </p>
        </motion.div>

        <div className="tech-stack-grid">
          {stacks.map((stack, index) => (
            <motion.article
              key={stack.name}
              className="tech-stack-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="tech-stack-card-top">
                <span className="tech-stack-tag">{stack.tag}</span>
                <span className="tech-stack-exp">{stack.experience}</span>
              </div>
              <h3>{stack.name}</h3>
              <p>{stack.description}</p>
              <span className="tech-stack-category">{stack.category}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack


