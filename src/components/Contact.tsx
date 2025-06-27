"use client";

import type React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import data from "../lib/data";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const [state, handleSubmit] = useForm("mdkzdqbr");

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


  const contactInfo = data.ProfileSection.connect;
  const socialLinks = data.ProfileSection.connectSocial;

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-secondary dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6 relative z-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-6 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-secondary/50 dark:border-gray-700/50 hover:border-transparent hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.label}
                    </p>
                    <p className="text-secondary dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-secondary dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-secondary dark:border-gray-700 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-secondary/50 dark:border-gray-700/50 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Send a Message
                </h3>
                {state.succeeded ? (
                  <div className="text-xl font-bold text-gray-900 dark:text-white mb-8">
                    Message sent successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border border-secondary dark:border-primary rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your full name"
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border border-secondary dark:border-primary rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                      >
                        Message
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border border-secondary dark:border-primary rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                        placeholder="Your message here..."
                        required
                        id="message"
                        name="message"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                    <button
                      disabled={state.submitting}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl font-semibold text-lg"
                    >
                      <Send size={24} />
                      <span>
                        {state.submitting
                          ? "Sending Message..."
                          : "Send Message"}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
