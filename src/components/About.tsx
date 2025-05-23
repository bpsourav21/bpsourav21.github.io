"use client"

import { useEffect, useRef, useState } from "react"

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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Versatile and results-driven full-stack web developer with a strong emphasis on frontend architecture,
              experimentation platforms, and performance optimization. Proven track record of leading cross-functional
              initiatives, mentoring junior developers, and collaborating closely with product teams to deliver
              high-impact, scalable solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Passionate about building intuitive user experiences, evolving robust engineering practices, and
              contributing to product strategy in fast-paced, innovation-driven environments. Seeking a
              leadership-oriented role where technical expertise and product thinking converge to drive business growth.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            {[
              { number: "6+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "5", label: "Companies Worked" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
