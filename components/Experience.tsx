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
      responsibilities: [
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
      responsibilities: [
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
      responsibilities: [
        "Participated in pre-project analysis and technical assessments",
        "Built reusable code to minimize costs and improve efficiency",
        "Designed layout and graphics to enhance app aesthetics",
        "Managed project and web strategic planning for entire team",
      ],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start space-x-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-blue-600 font-medium mb-2">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <p className="text-gray-600 italic text-sm">{exp.description}</p>
                    </div>
                    <div className="mt-2 lg:mt-0 lg:text-right space-y-1">
                      <div className="flex items-center space-x-1 text-gray-600 text-sm">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 text-sm">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-2 text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
