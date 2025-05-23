"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Optimizely Visual Editor",
      description:
        "A WYSIWYG editor that loads user's website and lets them adjust the visitor experience for various experiments.",
      tech: ["React", "Zustand", "Webpack", "TypeScript"],
      category: "Web Application",
    },
    {
      title: "MRCS Web App",
      description: "A platform for MRCS medical exam with separate admin panel for organizing questions and results.",
      tech: ["Next.js", "Postgres", "Prisma", "Redux"],
      category: "Educational Platform",
      link: "https://mrcs-web-app.com",
    },
    {
      title: "Chaldal E-commerce",
      description:
        "Online grocery shopping platform with multi-city support, payment integration, and real-time delivery tracking.",
      tech: ["React", "Node.js", "C#", "SQL", "Service Fabric"],
      category: "E-commerce",
      link: "https://chaldal.com",
    },
    {
      title: "Pattern Mobile App",
      description: "Dynamic food ordering app with rewards system, geolocation, and social media integration.",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
    },
    {
      title: "Pomodoro Time Counter",
      description: "Cross-platform productivity app with customizable timers and detailed reporting.",
      tech: ["React Native", "Expo", "SQLite"],
      category: "Productivity",
    },
    {
      title: "Chaldal Mobile Apps",
      description: "iOS and Android apps for grocery shopping with real-time tracking and payment integration.",
      tech: ["React Native", "Mobx", "TypeScript"],
      category: "Mobile App",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
