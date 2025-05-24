"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Building } from "lucide-react"

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
      period: "Oct 2024 - Present",
      location: "Dhaka, Bangladesh",
      description: "Digital Experience Platform (DXP)",
      highlights: [
        "Developed high-performance frontend features for experimentation platform",
        "Optimized performance reducing initial load time by 35%",
        "Created reusable UI libraries improving developer velocity",
        "Championed testing best practices with comprehensive coverage",
      ],
    },
    {
      title: "Software Engineer (Level-3)",
      company: "Chaldal Limited",
      period: "Oct 2018 - Oct 2024",
      location: "Dhaka, Bangladesh",
      description: "Online Grocery E-commerce",
      highlights: [
        "Led cross-functional initiatives and mentored junior developers",
        "Built scalable solutions using React, Node.js, and cloud technologies",
        "Contributed to sprint planning and product strategy",
        "Exceeded client expectations through close collaboration with product teams",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Pattern Technologies",
      period: "Apr 2023 - Nov 2023",
      location: "Lahore, Pakistan (Remote)",
      description: "Food Service Platform",
      highlights: [
        "Built reusable components to minimize costs and improve efficiency",
        "Designed responsive layouts enhancing user experience",
        "Managed project planning and strategic development",
        "Collaborated with international teams across different time zones",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 hidden md:block">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 group">
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium mb-2">
                          <Building size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 italic text-sm mb-4">{exp.description}</p>
                      </div>
                      <div className="lg:text-right space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
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
