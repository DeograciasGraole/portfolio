import React from 'react'
import { motion } from 'framer-motion'
import './ProfessionalEdge.css'

const stats = [
  { label: 'Products Launched', value: '48', detail: 'from MVP to scale' },
  { label: 'Teams Led', value: '12', detail: 'design & research' },
  { label: 'Client NPS', value: '92', detail: 'avg satisfaction' }
]

const specialties = [
  {
    title: 'Strategy & Ops',
    description:
      'Partnered with founders and VPs to translate business roadmaps into tangible product opportunities.',
    badge: '01',
    detail: 'Roadmapping / OKRs / Stakeholder facilitation'
  },
  {
    title: 'Experience Systems',
    description:
      'Architected scalable design systems with accessibility baked in, enabling faster delivery across squads.',
    badge: '02',
    detail: 'Design tokens / Component libraries / QA rituals'
  },
  {
    title: 'Measurement',
    description:
      'Closed the research loop with experimentation, usability testing, and KPI dashboards to prove ROI.',
    badge: '03',
    detail: 'Research ops / Experimentation / Insights'
  }
]

const ProfessionalEdge = () => {
  return (
    <section className="professional-edge">
      <div className="professional-container">
        <motion.div
          className="professional-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="professional-label">Professional Edge</p>
          <h2>Bridging business intent with crafted execution.</h2>
          <p>
            I operate at the intersection of design, product, and engineering—balancing measurable outcomes
            with expressive, human interfaces. Every engagement is grounded in research, aligned with KPIs,
            and delivered with systems thinking.
          </p>

          <div className="professional-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="professional-stat">
                <span>{stat.value}</span>
                <p>{stat.label}</p>
                <small>{stat.detail}</small>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="professional-specialties">
          {specialties.map((item, index) => (
            <motion.article
              key={item.title}
              className="professional-card"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="professional-card-badge">{item.badge}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.detail}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalEdge


