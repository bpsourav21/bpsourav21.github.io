"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "React Native", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "C#/.NET", level: 75 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Azure", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 75 },
      ],
    },
  ]

  const allSkills = [
    "React",
    "React-Native",
    "Expo",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Node.js",
    "C#",
    "F#",
    "Dotnet",
    "Python",
    "Redux",
    "Zustand",
    "Mobx",
    "SQL",
    "Postgres",
    "MongoDB",
    "CouchDB",
    "PouchDB",
    "Neon",
    "Prisma",
    "Redis",
    "Tailwind",
    "Bootstrap",
    "Figma",
    "Adobe XD",
    "Shadcn",
    "Axiom",
    "Analytics",
    "Kusto Query",
    "Git",
    "Azure",
    "Google Cloud Platform",
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Tags */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
