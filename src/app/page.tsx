"use client"

import { useEffect, useState } from "react"
import ThemeProvider from "@/src/components/ThemeProvider"
import Header from "@/src/components/Header"
import Hero from "@/src/components/Hero"
import About from "@/src/components/About"
import Skills from "@/src/components/Skills"
import Experience from "@/src/components/Experience"
import Projects from "@/src/components/Projects"
import Contact from "@/src/components/Contact"
import Footer from "@/src/components/Footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
