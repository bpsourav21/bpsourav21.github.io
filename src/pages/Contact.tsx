"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Linkedin, GitlabIcon as GitHub } from "lucide-react"
import "../styles/contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message. I'll get back to you soon!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">CONTACT ME</h1>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h2>Get In Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+8801787162035</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>bpsourav21@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Linkedin className="contact-icon" />
                  <a href="https://www.linkedin.com/in/bpsourav21" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/bpsourav21
                  </a>
                </div>
                <div className="contact-item">
                  <GitHub className="contact-icon" />
                  <a href="https://github.com/bpsourav21" target="_blank" rel="noopener noreferrer">
                    github.com/bpsourav21
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && <div className="submit-message">{submitMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
