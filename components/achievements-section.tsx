"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Users, Mic, Code, Lightbulb, Laptop } from "lucide-react"
import Link from "next/link"

export function AchievementsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const achievements = [
    {
      title: "Prudentia Hackathon",
      date: "Mar 2024",
      icon: <Code className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Euclid 3D Modelling Workshop",
      date: "Mar 2024",
      icon: <Laptop className="h-5 w-5" />,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Technical Innovation Workshop",
      date: "Mar 2024",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Best Speaker Award",
      date: "Oct 2023",
      icon: <Mic className="h-5 w-5" />,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Devsoc Hackathon Participant",
      date: "Jun 2023",
      icon: <Code className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "SimplifAI Workshop",
      date: "Jun 2023",
      icon: <Laptop className="h-5 w-5" />,
      color: "from-pink-500 to-purple-500",
    },
  ]

  const leadership = [
    {
      role: "Core Committee Member",
      organization: "Apple Developers Group",
      period: "Feb 2023 - Present",
      icon: <Users className="h-5 w-5" />,
    },
    {
      role: "Core Committee Member",
      organization: "CodeChef",
      period: "Feb 2023 - Present",
      icon: <Code className="h-5 w-5" />,
    },
    {
      role: "Secretary",
      organization: "Toastmasters International (SOL VIT)",
      period: "Jul 2023 - Dec 2023",
      icon: <Mic className="h-5 w-5" />,
    },
    {
      role: "Technical Fest Organizer",
      organization: "Gravitas (Ideathon)",
      period: "Sep 2023",
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ]

  const certificates = [
    {
      title: "Microsoft Azure Fundamentals AI 900",
      issuer: "Microsoft Azure",
      icon: <Laptop className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-purple-500",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    },
    {
      title: "Data Structures and Algorithms in C Language",
      issuer: "MySirG",
      icon: <Code className="h-6 w-6 text-white" />,
      color: "from-purple-500 to-pink-500",
      link: "https://www.mysirg.com/",
    },
    {
      title: "Learn to Code with AI",
      issuer: "Scrimba",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "from-pink-500 to-purple-500",
      link: "https://scrimba.com/learn/codeai",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 relative">
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
            Achievements & Leadership
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Accomplishments & Roles
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
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div
                      className={`h-10 w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mr-3 flex-shrink-0`}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{achievement.title}</h4>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Leadership Roles</h3>
              </div>

              <div className="space-y-4">
                {leadership.map((role, index) => (
                  <motion.div
                    key={role.organization}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                        {role.icon}
                      </div>
                      <h4 className="font-semibold text-white">{role.role}</h4>
                    </div>
                    <div className="ml-11">
                      <p className="text-purple-400">{role.organization}</p>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        {role.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-white/10"
              >
                <p className="text-gray-300 text-center">
                  Passionate about leadership and community involvement, with a focus on technology and innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeIn}
          className="mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group"
                >
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col items-center text-center group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                      <div
                        className={`h-16 w-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4`}
                      >
                        {cert.icon}
                      </div>
                      <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
