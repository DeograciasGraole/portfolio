import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'DESIGN STRATEGY',
      description: 'Aligning business goals with user needs through strategic thinking',
      color: 'teal'
    },
    {
      title: 'USER EXPERIENCE',
      description: 'Creating intuitive and delightful user journeys',
      color: 'pink'
    },
    {
      title: 'MOTION DESIGN',
      description: 'Bringing interfaces to life with thoughtful animations',
      color: 'orange'
    },
    {
      title: 'E-COMMERCE',
      description: 'Designing seamless online shopping experiences',
      color: 'yellow'
    },
    {
      title: 'BRANDING',
      description: 'Building cohesive brand identities and visual systems',
      color: 'light-blue'
    },
    {
      title: 'USABILITY TESTING',
      description: 'Validating designs through user research and testing',
      color: 'green'
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          SKILLS
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-card skill-${skill.color}`}
              initial={{ opacity: 0, y: 50, rotate: -5 + Math.random() * 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: (Math.random() > 0.5 ? 3 : -3),
                zIndex: 10
              }}
            >
              <h3 className="skill-card-title">{skill.title}</h3>
              <p className="skill-card-description">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

