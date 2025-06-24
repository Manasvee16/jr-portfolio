"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("frontend")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skills = {
    frontend: [
      "React.js", "Next.js", "Tailwind CSS", "TypeScript", "Flutter",
      "WebdriverIO", "Appium"
    ],
    languages: [
      "JavaScript", "C++", "Java", "Python", "C"
    ],
    tools: [
      "Visual Studio", "Eclipse", "Vercel", "Prisma", "Firebase",
      "CI/CD Pipeline"
    ],
    concepts: [
      "Data Structures", "Algorithms", "OOP", "REST APIs", "Prompt Engineering",
      "Drizzle ORM", "PostgreSQL", "Xata", "BunnyCDN"
    ],
  }

  const [animatedSkills, setAnimatedSkills] = useState(skills.frontend)

  useEffect(() => {
    setAnimatedSkills([])

    const timer = setTimeout(() => {
      setAnimatedSkills(skills[activeTab as keyof typeof skills])
    }, 300)

    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <section id="skills" className="py-20 px-4 relative">
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
            My Skills
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            Technical Expertise
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {animatedSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <span className="text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Professional Competencies</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Frontend Development",
                "User Interface Design",
                "Code Reviews",
                "Troubleshooting",
                "Communication Skills",
                "Attention to Detail",
                "Agile Methodologies",
                "Problem Solving",
                "Analytical Skills",
                "Team Collaboration",
                "Business Requirements Analysis",
                "Quality Assurance",
                "Software Solution Delivery",
              ].map((competency, index) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border-white/10 hover:from-pink-500/30 hover:to-purple-500/30 px-3 py-1">
                    {competency}
                  </Badge>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Value Addition</h4>
              <ul className="space-y-3">
                {[
                  "Advanced Programming Proficiency",
                  "Algorithmic and Data Exposure",
                  "Comprehensive System Knowledge",
                  "Database and Networking Excellence",
                  "Familiarity with Emerging Technologies",
                ].map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 mt-1 mr-3 flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
