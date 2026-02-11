import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "xgolobez";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GET IN TOUCH
          </motion.h2>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let's create something
                amazing together.
              </p>
              <div className="contact-details">
                <a href="mailto:hello@devanta.com" className="contact-link">
                  Send me an email
                </a>
                <a href="tel:+905338613619" className="contact-link">
                  Tell me on whatsapp
                </a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-input form-textarea"
                />
              </div>
              {status === "success" && (
                <p className="form-message form-message--success">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="form-message form-message--error">
                  {errorMessage}
                </p>
              )}
              <motion.button
                type="submit"
                className="form-submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { scale: 1.05, x: 5 } : {}}
                whileTap={status !== "loading" ? { scale: 0.95 } : {}}
              >
                {status === "loading" ? "Sending..." : "SEND MESSAGE →"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
