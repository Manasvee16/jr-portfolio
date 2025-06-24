"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Frontend Developer | Problem Solver | Tech Enthusiast"

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl font-bold">
                MR
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">
              SDE Intern
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Manasvee Rathie
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-8 mt-4"
        >
          <p className="text-lg md:text-xl text-gray-300">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
          Computer Science Engineering student at VIT with a passion for frontend development. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="https://github.com/Manasvee16"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1KJk4r3AAPtUZ6VdG3jNjw05zL8khLqgI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link href="https://www.linkedin.com/in/manasveerathie/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://github.com/Manasvee16" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:manasveerathie@gmail.com">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://wa.me/919521198431" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
              <Phone className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
