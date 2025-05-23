"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Star, Eye } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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
      stats: { stars: 45, views: 1200 },
    },
    {
      title: "MRCS Web App",
      description: "A platform for MRCS medical exam with separate admin panel for organizing questions and results.",
      tech: ["Next.js", "Postgres", "Prisma", "Redux"],
      category: "Educational Platform",
      link: "https://mrcs-web-app.com",
      featured: true,
      stats: { stars: 32, views: 890 },
    },
    {
      title: "Chaldal E-commerce",
      description:
        "Online grocery shopping platform with multi-city support, payment integration, and real-time delivery tracking.",
      tech: ["React", "Node.js", "C#", "SQL", "Service Fabric"],
      category: "E-commerce",
      link: "https://chaldal.com",
      featured: true,
      stats: { stars: 67, views: 2100 },
    },
    {
      title: "Pattern Mobile App",
      description: "Dynamic food ordering app with rewards system, geolocation, and social media integration.",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      stats: { stars: 28, views: 650 },
    },
    {
      title: "Pomodoro Time Counter",
      description: "Cross-platform productivity app with customizable timers and detailed reporting.",
      tech: ["React Native", "Expo", "SQLite"],
      category: "Productivity",
      stats: { stars: 19, views: 420 },
    },
    {
      title: "Chaldal Mobile Apps",
      description: "iOS and Android apps for grocery shopping with real-time tracking and payment integration.",
      tech: ["React Native", "Mobx", "TypeScript"],
      category: "Mobile App",
      stats: { stars: 41, views: 980 },
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Web Application": "from-blue-500 to-cyan-500",
      "Educational Platform": "from-green-500 to-emerald-500",
      "E-commerce": "from-purple-500 to-pink-500",
      "Mobile App": "from-orange-500 to-red-500",
      Productivity: "from-indigo-500 to-purple-500",
    }
    return colors[category] || "from-gray-500 to-gray-600"
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-20 h-20 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-purple-300 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-pink-300 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${project.featured ? "ring-2 ring-blue-200" : ""}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(project.category)}`}></div>

              <div className="p-6">
                {/* Category and Featured Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-medium rounded-full`}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Project Title and Actions */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <button className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110">
                      <Github size={18} />
                    </button>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                {/* Project Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star size={14} />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{project.stats.views}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium transition-all duration-300 ${
                        hoveredProject === index ? "bg-blue-100 text-blue-700" : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
