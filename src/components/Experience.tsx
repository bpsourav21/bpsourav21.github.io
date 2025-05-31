"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Calendar, Building } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Software Engineer II",
      company: "Optimizely",
      period: "10/2024 - Present",
      location: "Dhaka, Bangladesh",
      description: "Digital Experience Platform (DXP)",
      highlights: [
        "Developed high-performance frontend features for experimentation platform using React, Nuclear JS, Python",
        "Partnered with product managers to rapidly prototype A/B testing UI components",
        "Created reusable UI libraries improving developer velocity across teams",
        "Optimized performance reducing initial load time by 35% through lazy-loading strategies",
        "Championed testing best practices with comprehensive unit and integration test coverage",
      ],
    },
    {
      title: "Software Engineer (level-3)",
      company: "Chaldal Limited",
      period: "10/2018 - 10/2024",
      location: "Dhaka, Bangladesh",
      description: "Online Grocery E-commerce",
      highlights: [
        "Wrote clean code leveraging React, React-Native, Redux, Mobx, Node.js, C#, F#",
        "Evaluated project requirements and proposed alternatives using research and data",
        "Contributed to sprint planning, prioritizing backlogs to meet new demands",
        "Exceeded client expectations working closely with product and QA teams",
        "Developed testable software using agile methodologies",
      ],
    },
    {
      title: "Frontend Developer (Remote)",
      company: "Pattern Technologies",
      period: "04/2023 - 11/2023",
      location: "Lahore, Pakistan",
      description: "Online Food Service",
      highlights: [
        "Participated in pre-project analysis and technical assessments",
        "Built reusable code to minimize costs and improve efficiency",
        "Designed layout and graphics to enhance app aesthetics",
        "Managed project and web strategic planning for entire team",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white  mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative z-10">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600 hidden md:block rounded-full shadow-lg"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Enhanced Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 hidden md:block">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-xl animate-pulse"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Enhanced Content Card */}
                <div className="flex-1 group">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-secondary/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2">
                    {/* Company badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
                      <Building size={16} className="mr-2" />
                      {exp.company}
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-secondary dark:text-gray-400 italic mb-4 text-lg">{exp.description}</p>
                      </div>
                      <div className="lg:text-right space-y-3 lg:ml-6">
                        <div className="flex items-center space-x-2 text-secondary dark:text-gray-400">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-secondary dark:text-gray-400">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start space-x-4 text-gray-700 dark:text-gray-300 group/item"
                        >
                          <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                          <span className="leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
