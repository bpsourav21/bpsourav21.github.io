"use client";

import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import ThemeProvider from "@/src/providers/ThemeProvider";
import { useEffect, useState } from "react";
import Education from "../components/Education";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
