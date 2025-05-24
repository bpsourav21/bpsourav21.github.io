"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Palette, Users, Zap } from "lucide-react"

export default function About() {
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

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern frameworks and best practices.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Excellence",
      description: "Crafting beautiful, intuitive interfaces that users love to interact with.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Delivering lightning-fast applications with superior user experience.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams and mentoring developers to achieve excellence.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              Versatile and results-driven full-stack web developer with a strong emphasis on frontend architecture,
              experimentation platforms, and performance optimization. Proven track record of leading cross-functional
              initiatives, mentoring junior developers, and collaborating closely with product teams to deliver
              high-impact, scalable solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              Passionate about building intuitive user experiences, evolving robust engineering practices, and
              contributing to product strategy in fast-paced, innovation-driven environments. Seeking a
              leadership-oriented role where technical expertise and product thinking converge to drive business growth.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-8">
          {[
            { number: "6+", label: "Years Experience", icon: "🚀" },
            { number: "50+", label: "Projects Completed", icon: "💼" },
            { number: "5", label: "Companies", icon: "🏢" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
