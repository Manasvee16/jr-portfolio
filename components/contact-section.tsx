"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-purple-900/10 mix-blend-multiply" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-pink-500 text-pink-400">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:manasveerathie@gmail.com"
                    className="text-white font-medium hover:text-pink-400 transition-colors"
                  >
                    manasveerathie@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919521198431" className="text-white font-medium hover:text-pink-400 transition-colors">
                    +91-9521198431
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Connect With Me</h4>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/manasveerathie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">LinkedIn</h5>
                      <p className="text-xs text-gray-400">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Manasvee16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">GitHub</h5>
                      <p className="text-xs text-gray-400">View my code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
