"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Mail, Linkedin, Github, Globe, Download, Sparkles } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = ["Full-Stack Developer", "Frontend Architect", "React Expert", "Problem Solver"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentWord.length) {
            setTypedText(currentWord.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentWordIndex, words])

  const contactInfo = [
    { icon: Phone, text: "+8801671820025", href: "tel:+8801671820025" },
    { icon: Mail, text: "bpsourav21@gmail.com", href: "mailto:bpsourav21@gmail.com" },
    { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/bpsourav21" },
    { icon: Github, text: "GitHub", href: "https://github.com/bpsourav21" },
    { icon: Globe, text: "Portfolio", href: "https://bpsourav21.github.io" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                <span className="text-blue-600 font-medium">Welcome to my portfolio</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-fadeInUp">Hi, I'm</span>
                <br />
                <span className="text-blue-600 inline-block animate-fadeInUp animation-delay-300">Mahadi</span>
                <br />
                <span className="inline-block animate-fadeInUp animation-delay-600">Hasan Sourav</span>
              </h1>

              <div className="h-8 flex items-center">
                <span className="text-xl text-gray-600 font-medium">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed animate-fadeInUp animation-delay-900">
              Versatile and results-driven developer with expertise in frontend architecture, experimentation platforms,
              and performance optimization. Passionate about building intuitive user experiences that make a difference.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 1200}ms` }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
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
                className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get In Touch</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              <button className="group px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                <Download size={20} className="group-hover:animate-bounce" />
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
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-spin-slow opacity-75 blur-sm"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/propic2.jpg-PX1o61cxunzcNRLPqBuP2xn3pPw4s0.jpeg"
                  alt="Mahadi Hasan Sourav"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-semibold">Let's Connect!</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping"></div>

              {/* Skill Badges Floating Around */}
              <div className="absolute -top-8 left-1/4 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium text-blue-600 animate-float">
                React
              </div>
              <div className="absolute -bottom-8 right-1/4 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium text-purple-600 animate-float animation-delay-1000">
                TypeScript
              </div>
              <div className="absolute top-1/4 -left-12 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium text-green-600 animate-float animation-delay-2000">
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
