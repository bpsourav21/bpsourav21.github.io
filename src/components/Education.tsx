"use client";

import { Award, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import data from "../lib/data";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = data.EducationSection.educations;

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white  mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>

        <div className="flex flex-col items-center justify-center flex-wrap gap-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6 relative z-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-secondary/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-green-600 font-bold mb-1">
                      <Award size={16} className="mr-1" />
                      {edu.gpa}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
