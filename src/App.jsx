import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatButton from "./components/ChatButton";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import "./App.css";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const finishLoading = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // After preloader hides: clear hash and scroll to top so hero shows (not footer)
  useEffect(() => {
    if (!isLoading) {
      // Remove hash from URL so browser doesn't scroll to #contact on load
      if (window.location.hash) {
        navigate(location.pathname || "/", { replace: true });
      }
      const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      scrollToTop();
      const t1 = setTimeout(scrollToTop, 50);
      const t2 = setTimeout(scrollToTop, 150);
      const t3 = setTimeout(scrollToTop, 400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isLoading, navigate, location.pathname]);

  return (
    <>
      <Preloader isVisible={isLoading} />
      <div className={`App ${isLoading ? "app-loading" : ""}`}>
        <CustomCursor />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <TechStack />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={
              <div
                style={{
                  padding: "120px 40px",
                  background: "var(--beige)",
                  minHeight: "80vh",
                }}
              >
                <h1 style={{ fontSize: "3rem", fontWeight: 900 }}>BLOG</h1>
                <p>Coming soon...</p>
              </div>
            }
          />
        </Routes>
        <Footer />
        <ChatButton />
      </div>
    </>
  );
}

function App() {
  // Match Vite base so "/" route works when app is served at /portfolio/
  const basename = import.meta.env.BASE_URL;
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;
