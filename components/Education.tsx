"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
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

  const education = [
    {
      degree: "BSC Engineering, Computer Science & Engineering",
      institution: "Rajshahi University of Engineering & Technology",
      period: "01/2012 - 12/2016",
      location: "Rajshahi",
      gpa: "3.15/4.0",
    },
    {
      degree: "Higher-Secondary School Certificate, Science",
      institution: "Notre Dame College, Dhaka",
      period: "01/2009 - 12/2011",
      location: "Dhaka",
      gpa: "5.0/5.0",
    },
    {
      degree: "Secondary School Certificate Science",
      institution: "Motijheel Govt Boys' High School",
      period: "01/2000 - 12/2009",
      location: "Dhaka",
      gpa: "5.0/5.0",
    },
  ]

  const references = [
    {
      name: "Keith Treu",
      title: "Director, Software Engineering",
      company: "Optimizely",
      email: "keith.treu@optimizely.com",
    },
    {
      name: "Tejas Viswanath",
      title: "CTO & Founder",
      company: "Chaldal Limited",
      email: "tejas@chaldal.net",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & References</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-green-600 font-bold mb-1">
                        <Award size={16} className="mr-1" />
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">References</h3>
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{ref.name}</h4>
                  <p className="text-blue-600 font-medium mb-1">{ref.title}</p>
                  <p className="text-gray-700 mb-3">{ref.company}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
