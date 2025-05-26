"use client";

import {
  ArrowDown,
  ExternalLink,
  Github,
  Images,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumePopup from "./resume/ResumePopup";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const closeResumePopup = () => {
    setIsResumePopupOpen(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${
              mousePosition.y * -0.02
            }px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </div>

              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Mahadi Hasan Sourav
                </span>
                <br />
              </h1>

              <p className="text-xl text-secondary dark:text-gray-300 font-bold leading-relaxed max-w-lg">
                Full-Stack Software Engineer
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                Versatile and results-driven full-stack web developer with a
                strong emphasis on frontend architecture, experimentation
                platforms, and performance optimization. Proven track record of
                leading cross-functional initiatives, mentoring junior
                developers, and collaborating closely with product teams to
                deliver high-impact, scalable solutions. Passionate about
                building intuitive user experiences, evolving robust engineering
                practices, and contributing to product strategy in fast-paced,
                innovation-driven environments. Seeking a leadership-oriented
                role where technical expertise and product thinking converge to
                drive business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Let's Work Together</span>
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </button>

              <button
                onClick={() => setIsResumePopupOpen(true)}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-primary text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Images size={20} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/bpsourav21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bpsourav21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://bpsourav21.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Floating Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Main Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <Image
                  src="./propic2.jpg"
                  alt="Mahadi Hasan Sourav"
                  width={400}
                  height={400}
                  layout="responsive"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg border border-secondary dark:border-gray-700 animate-float">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  6+ Years
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg border border-secondary dark:border-gray-700 animate-float animation-delay-1000">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  50+ Projects
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
      {/* resume pop up block */}
      {isResumePopupOpen && <ResumePopup closeResumePopup={closeResumePopup} />}
    </section>
  );
}
