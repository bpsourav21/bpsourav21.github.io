"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "../styles/header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          MAHADI HASAN SOURAV
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className={isActive("/")} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/experience" className={isActive("/experience")} onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className={isActive("/projects")} onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/education" className={isActive("/education")} onClick={closeMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact")} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
