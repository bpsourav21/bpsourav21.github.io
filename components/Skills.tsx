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
      skills: ["React", "TypeScript", "Next.js", "React Native"],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "C#/.NET", "SQL"],
      color: "from-green-400 to-green-600",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Azure", "MongoDB", "Redis"],
      color: "from-red-400 to-red-600",
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
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 transition-all duration-500"
    >
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-blue-500/20 border border-gray-200/50 dark:border-gray-700/50 transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <span className="text-3xl font-bold text-white">{category.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
