"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import data from "../lib/data";

function ProjectDescription({
  description,
  isExpanded,
  onToggle,
}: {
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const textRef = useRef<HTMLDivElement>(null);
  const [wasTruncated, setWasTruncated] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el && !isExpanded) {
      const checkTruncation = () => {
        const truncated = el.scrollHeight > el.clientHeight + 1;
        setWasTruncated(truncated);
      };

      checkTruncation();
      setTimeout(checkTruncation, 200); // allow layout to settle
    }
  }, [description, isExpanded]);

  return (
    <div className="relative z-10 mb-6 text-secondary dark:text-gray-300">
      <div
        ref={textRef}
        className="whitespace-pre-line"
        style={{
          display: isExpanded ? "block" : "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : 5,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </div>

      {(wasTruncated || isExpanded) && (
        <button
          className="mt-2 text-sm py-1 px-2 rounded-3xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
          onClick={onToggle}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);

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

  const projects = data.ProjectsSection.projects;
  const gradients = [
    "from-blue-400 to-purple-500",
    "from-green-400 to-blue-500",
    "from-teal-400 to-cyan-500",
    "from-yellow-400 to-orange-500",
    "from-pink-400 to-red-500",
    "from-purple-400 to-pink-500",
    "from-pink-400 to-orange-500",
    "from-teal-400 to-red-500",
    "from-green-400 to-blue-500",
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/30 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white  mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-purple-500/20 overflow-hidden border border-secondary/50 dark:border-gray-700/50 transition-all duration-700 transform hover:-translate-y-6 hover:rotate-1 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Project Header with gradient */}
              <div
                className={`h-3 bg-gradient-to-r ${gradients[index]} relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="p-8 relative">
                {/* Category and Featured Badge */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${gradients[index]} text-white text-sm font-medium rounded-full shadow-lg`}
                  >
                    {project.category}
                  </span>

                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <button className="p-2 bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Github size={16} />
                    </button>
                  </div>
                </div>

                {/* Project Title and Actions */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <div className="flex items-center space-x-1 text-yellow-500 animate-pulse">
                      <Star size={18} fill="currentColor" />
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  <ProjectDescription
                    description={project.description.join(" ")}
                    isExpanded={detailsIndex === index}
                    onToggle={() =>
                      setDetailsIndex(detailsIndex === index ? null : index)
                    }
                  />
                </div>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-default shadow-sm"
                    >
                      {tech}
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
