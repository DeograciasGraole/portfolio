import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Portfolio />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<div style={{padding: '120px 40px', background: 'var(--beige)', minHeight: '80vh'}}><h1 style={{fontSize: '3rem', fontWeight: 900}}>BLOG</h1><p>Coming soon...</p></div>} />
        </Routes>
        <Footer />
        <ChatButton />
      </div>
    </Router>
  )
}

export default App

