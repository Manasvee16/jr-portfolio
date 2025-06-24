"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Gamepad2, ShoppingBag, Utensils } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "PathwayAI – AI-Powered Career Guidance Platform",
      description:
        "Developed a full-stack web application to deliver personalized career guidance and job search tools. Integrated Google GenAI for Resume/CV generation and mock interview with automated feedback, enhancing user experience with intelligent, real-time suggestions. Implemented secure authentication and user management with Clerk, ensuring robust data privacy and access control.",
      icon: <Gamepad2 className="h-6 w-6" />,
      tags: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
      link: "https://pathway-ai-sand.vercel.app/",
    },
    {
      id: 2,
      title: "VibeStream – Full Stack Video Sharing Platform",
      description:
        "Developed a full-stack web application for secure screen recording, video uploads, and sharing. Integrated Google OAuth authentication, user profiles, and privacy controls for a seamless and secure user experience. Built a scalable backend for efficient video storage and delivery.",
      icon: <ShoppingBag className="h-6 w-6" />,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "Xata", "BunnyCDN"],
      link: "https://vibe-stream-eight.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
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
            Projects
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
            My Creative Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.length === 2 ? (
            <>
              <div className="hidden md:block" />
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  variants={fadeIn}
                  className="cursor-pointer group md:col-span-1"
                  style={{ gridColumn: index === 0 ? 1 : 3 }}
                  onClick={() => setActiveProject(index)}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 h-full flex flex-col ${
                      activeProject === index
                        ? "border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                        : "hover:border-pink-500/30 hover:shadow-[0_0_10px_rgba(236,72,153,0.2)]"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs text-gray-300 border-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                variants={fadeIn}
                className="cursor-pointer group"
                onClick={() => setActiveProject(index)}
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 h-full flex flex-col ${
                    activeProject === index
                      ? "border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                      : "hover:border-pink-500/30 hover:shadow-[0_0_10px_rgba(236,72,153,0.2)]"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs text-gray-300 border-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeIn}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{projects[activeProject].title}</h3>

            <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border-white/10 px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link href={projects[activeProject].link} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.7 }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <Link href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              <Code className="h-4 w-4 mr-2" /> View All Projects on GitHub
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
