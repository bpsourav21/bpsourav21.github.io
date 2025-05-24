"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Star } from "lucide-react"

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
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "MRCS Web App",
      description: "A platform for MRCS medical exam with separate admin panel for organizing questions and results.",
      tech: ["Next.js", "Postgres", "Prisma", "Redux"],
      category: "Educational Platform",
      link: "https://mrcs-web-app.com",
      featured: true,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Chaldal E-commerce",
      description:
        "Online grocery shopping platform with multi-city support, payment integration, and real-time delivery tracking.",
      tech: ["React", "Node.js", "C#", "SQL"],
      category: "E-commerce",
      link: "https://chaldal.com",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Pattern Mobile App",
      description: "Dynamic food ordering app with rewards system, geolocation, and social media integration.",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Pomodoro Timer",
      description: "Cross-platform productivity app with customizable timers and detailed reporting.",
      tech: ["React Native", "Expo", "SQLite"],
      category: "Productivity",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Chaldal Mobile Apps",
      description: "iOS and Android apps for grocery shopping with real-time tracking and payment integration.",
      tech: ["React Native", "Mobx", "TypeScript"],
      category: "Mobile App",
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                {/* Category and Featured Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                    </div>
                  )}
                </div>

                {/* Project Title and Actions */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                      <Github size={18} />
                    </button>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
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
