"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code, Laptop, Briefcase, GraduationCap, Award, Users } from "lucide-react"

export function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-pink-900/10 mix-blend-multiply" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-purple-500 text-purple-400">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a highly motivated Computer Science Engineering student at Vellore Institute of Technology with a
                strong passion for frontend development. My journey in tech began with a curiosity about how digital
                experiences are crafted, which led me to explore various programming languages and frameworks.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                With a keen eye for detail and a commitment to delivering high-quality user interfaces, I've developed a
                diverse skill set that allows me to create engaging and intuitive web experiences. I'm constantly
                learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <Code className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-white">Frontend Development</h4>
                <p className="text-xs text-gray-400 mt-1">React, Next.js, Tailwind</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <Laptop className="h-8 w-8 text-pink-400 mb-3" />
                <h4 className="font-semibold text-white">Programming</h4>
                <p className="text-xs text-gray-400 mt-1">C++, Java, Python, JavaScript</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <Briefcase className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-white">Experience</h4>
                <p className="text-xs text-gray-400 mt-1">SDE Intern at Housing.com</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <GraduationCap className="h-8 w-8 text-pink-400 mb-3" />
                <h4 className="font-semibold text-white">Education</h4>
                <p className="text-xs text-gray-400 mt-1">B.Tech at VIT (CGPA: 8.1)</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeIn}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center">
            <Award className="h-10 w-10 text-purple-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Achievements</h4>
              <p className="text-sm text-gray-400 mt-1">Multiple hackathons & technical events</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center">
            <Users className="h-10 w-10 text-pink-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Leadership</h4>
              <p className="text-sm text-gray-400 mt-1">Core committee roles in tech clubs</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center">
            <GraduationCap className="h-10 w-10 text-purple-400 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-white">Certifications</h4>
              <p className="text-sm text-gray-400 mt-1">Microsoft Azure, DSA, AI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
