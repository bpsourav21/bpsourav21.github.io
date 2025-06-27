"use client";

import { useEffect, useRef, useState } from "react";
import data from "../lib/data";

export default function Skills() {
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

  const skills = data.SkillsSection.skillsByGroup;

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: skills.group1,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Backend Development",
      skills: skills.group2,
      color: "from-green-400 to-green-600",
    },
    {
      title: "State Management",
      skills: skills.group3,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Databases & Storage",
      skills: skills.group4,
      color: "from-red-400 to-red-600",
    },
    {
      title: "UI/UX & Design",
      skills: skills.group5,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Tools & Platforms",
      skills: skills.group6,
      color: "from-yellow-400 to-yellow-600",
    },
  ];

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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-blue-500/20 border border-secondary/50 dark:border-gray-700/50 transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-center items-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <span className="text-3xl font-bold text-white">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="flex-1 ml-4 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
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
      </div>
    </section>
  );
}
