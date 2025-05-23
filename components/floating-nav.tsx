"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Code, Award, Mail, Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="h-4 w-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.id)

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      // Otherwise check which section is in view
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/70" : "bg-black/30"} backdrop-blur-md`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Manasvee Rathie
              </div>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white hover:bg-white/10">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex justify-between items-center h-16">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Manasvee Rathie
              </div>
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(item.id)
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 80, // Adjust for navbar height
                          behavior: "smooth",
                        })
                      }
                      setActiveSection(item.id)
                      if (isMobile) setIsMenuOpen(false)
                    }}
                    className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex items-center justify-center pt-16"
        >
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(item.id)
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80, // Adjust for navbar height
                      behavior: "smooth",
                    })
                  }
                  setActiveSection(item.id)
                  setIsMenuOpen(false)
                }}
                className={`flex items-center px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
