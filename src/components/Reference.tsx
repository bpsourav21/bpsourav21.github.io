"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import data from "../lib/data";

export default function Reference() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const references = data.ReferencesSection.references;

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
            References
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {references.map((ref, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-blue-500/20 border border-secondary/50 dark:border-gray-700/50 transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="mb-0">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {ref.name}
                  </h4>
                  <p className="text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {ref.title}
                  </p>
                  <p className="text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {ref.company}
                  </p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 text-sm"
                  >
                    {ref.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
