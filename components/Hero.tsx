"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail, Linkedin, Github, Globe, Download } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    { icon: Phone, text: "+8801671820025", href: "tel:+8801671820025" },
    { icon: Mail, text: "bpsourav21@gmail.com", href: "mailto:bpsourav21@gmail.com" },
    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/bpsourav21" },
    { icon: Github, text: "GitHub", href: "https://github.com/bpsourav21" },
    { icon: Globe, text: "Portfolio", href: "https://bpsourav21.github.io" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Mahadi</span>
                <br />
                Hasan Sourav
              </h1>
              <p className="text-xl text-gray-600 font-medium">Full-Stack Web Developer</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Versatile and results-driven developer with expertise in frontend architecture, experimentation platforms,
              and performance optimization. Passionate about building intuitive user experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transform transition-all duration-500 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/profile-photo.jpg"
                  alt="Mahadi Hasan Sourav"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
