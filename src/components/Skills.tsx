"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Database, Zap } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
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
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "React Native", level: 85, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Python", level: 80, color: "bg-yellow-500" },
        { name: "C#/.NET", level: 75, color: "bg-purple-500" },
        { name: "SQL", level: 88, color: "bg-orange-500" },
      ],
    },
    {
      title: "Tools & Cloud",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90, color: "bg-red-500" },
        { name: "Azure", level: 80, color: "bg-blue-600" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "Redis", level: 75, color: "bg-red-600" },
      ],
    },
  ]

  const allSkills = [
    { name: "React", category: "frontend" },
    { name: "React-Native", category: "mobile" },
    { name: "Expo", category: "mobile" },
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Next.js", category: "framework" },
    { name: "Node.js", category: "backend" },
    { name: "C#", category: "language" },
    { name: "F#", category: "language" },
    { name: "Dotnet", category: "framework" },
    { name: "Python", category: "language" },
    { name: "Redux", category: "state" },
    { name: "Zustand", category: "state" },
    { name: "Mobx", category: "state" },
    { name: "SQL", category: "database" },
    { name: "Postgres", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "CouchDB", category: "database" },
    { name: "PouchDB", category: "database" },
    { name: "Neon", category: "database" },
    { name: "Prisma", category: "orm" },
    { name: "Redis", category: "cache" },
    { name: "Tailwind", category: "styling" },
    { name: "Bootstrap", category: "styling" },
    { name: "Figma", category: "design" },
    { name: "Adobe XD", category: "design" },
    { name: "Shadcn", category: "ui" },
    { name: "Axiom", category: "monitoring" },
    { name: "Analytics", category: "monitoring" },
    { name: "Kusto Query", category: "query" },
    { name: "Git", category: "version" },
    { name: "Azure", category: "cloud" },
    { name: "Google Cloud Platform", category: "cloud" },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      frontend: "bg-blue-500",
      mobile: "bg-cyan-500",
      language: "bg-purple-500",
      framework: "bg-green-500",
      backend: "bg-orange-500",
      state: "bg-pink-500",
      database: "bg-indigo-500",
      orm: "bg-teal-500",
      cache: "bg-red-500",
      styling: "bg-yellow-500",
      design: "bg-rose-500",
      ui: "bg-violet-500",
      monitoring: "bg-emerald-500",
      query: "bg-amber-500",
      version: "bg-gray-600",
      cloud: "bg-sky-500",
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Constantly learning and evolving with the latest technologies to build amazing digital experiences.
          </p>
        </div>

        {/* Skill Progress Bars with Enhanced Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium group-hover/skill:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color} relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Skills Cloud */}
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
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer border-2 border-transparent hover:border-blue-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                } ${hoveredSkill === skill.name ? "scale-110 shadow-lg" : ""}`}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <span className="relative">
                  {skill.name}
                  <span
                    className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
