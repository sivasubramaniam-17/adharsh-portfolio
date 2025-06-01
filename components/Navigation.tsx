"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Film } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "vintage-glass shadow-xl border-b border-stone-200" : "bg-transparent"
      }`}
    >
      <div className="vintage-container">
        <div className="flex justify-between items-center py-5">
          {/* Professional Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-stone-800 hover:text-stone-600 transition-all duration-300 group"
          >
            <Film
              className="h-8 w-8 group-hover:rotate-6 transition-transform duration-300"
              style={{ color: scrolled ? "#fef395" : "gold" }}
            />
            <div className="flex flex-col">
              <span className="font-cinzel vintage-text-2xl font-semibold" style={{ color: scrolled? "var(--vintage-burgundy)" : "white" }}>
                 ADHARSH
              </span>
              <span className="text-sm font-medium" style={{ color: scrolled? "var(--vintage-burgundy)" : "white" }}> Frame the Dream</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`vintage-text-lg font-medium transition-all duration-300 relative group ${
                  pathname === item.href ? "text-stone-800" : "text-stone-700 hover:text-stone-900"
                }`}
                style={{
                  color: pathname === item.href ? "var(--vintage-burgundy)" : undefined,
                }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                  style={{ backgroundColor: "var(--vintage-burgundy)" }}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-700 hover:text-stone-900 transition-colors p-2 rounded-lg"
            style={{ color: "var(--vintage-burgundy)" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden vintage-glass rounded-xl mb-4 p-4 vintage-border shadow-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-4 px-4 vintage-text-lg font-medium transition-all duration-300 rounded-lg ${
                  pathname === item.href ? "bg-stone-100" : "hover:bg-stone-50"
                }`}
                style={{
                  color: pathname === item.href ? "var(--vintage-burgundy)" : "var(--vintage-text)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
