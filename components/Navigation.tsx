"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Chí Nguyên
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-sm transition-colors ${activeSection === link.id ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-xl transition-colors ${activeSection === link.id ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
