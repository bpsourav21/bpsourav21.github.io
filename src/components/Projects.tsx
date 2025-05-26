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
      gradient: "from-blue-400 to-purple-500",
      featured: true,
    },
    {
      title: "MRCS Web App",
      description: "A platform for MRCS medical exam with separate admin panel for organizing questions and results.",
      tech: ["Next.js", "Postgres", "Prisma", "Redux"],
      category: "Educational Platform",
      link: "https://mrcs-web-app.com",
      gradient: "from-green-400 to-blue-500",
      featured: false,
    },
    {
      title: "Chaldal E-commerce",
      description:
        "Online grocery shopping platform with multi-city support, payment integration, and real-time delivery tracking.",
      tech: ["React", "Node.js", "C#", "SQL", "Service Fabric"],
      category: "E-commerce",
      link: "https://chaldal.com",
      gradient: "from-pink-400 to-red-500",
      featured: false,
    },
    {
      title: "Pattern Mobile App",
      description: "Dynamic food ordering app with rewards system, geolocation, and social media integration.",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      gradient: "from-yellow-400 to-orange-500",
      featured: false,
    },
    {
      title: "Pomodoro Time Counter",
      description: "Cross-platform productivity app with customizable timers and detailed reporting.",
      tech: ["React Native", "Expo", "SQLite"],
      category: "Productivity",
      gradient: "from-teal-400 to-cyan-500",
      featured: false,
    },
    {
      title: "Chaldal Mobile Apps",
      description: "iOS and Android apps for grocery shopping with real-time tracking and payment integration.",
      tech: ["React Native", "Mobx", "TypeScript"],
      category: "Mobile App",
      gradient: "from-purple-400 to-pink-500",
      featured: false,
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/30 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-purple-500/20 overflow-hidden border border-secondary/50 dark:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Project Header with gradient */}
              <div className={`h-3 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="p-8 relative">
                {/* Floating background element */}
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500`}
                ></div>

                {/* Category and Featured Badge */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-full shadow-lg`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500 animate-pulse">
                      <Star size={18} fill="currentColor" />
                    </div>
                  )}
                </div>

                {/* Project Title and Actions */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Github size={16} />
                    </button>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-secondary dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-default shadow-sm"
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
