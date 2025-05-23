"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="py-10 px-4 relative">
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Manasvee Rathie
            </h3>
            <p className="text-gray-400 mt-2">Frontend Developer | Problem Solver | Tech Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
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
            <Link
              href="https://drive.google.com/file/d/1KJk4r3AAPtUZ6VdG3jNjw05zL8khLqgI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Download className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-white/10 text-gray-400 hover:bg-white/10"
            onClick={scrollToTop}
          >
            Back to Top <ArrowUp className="ml-2 h-3 w-3" />
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
