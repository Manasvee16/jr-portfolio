"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react"

export function ExperienceSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
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
            Experience
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-px"></div>

          {/* Housing.com Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative md:ml-auto md:w-1/2 md:pl-12 pb-16 md:pb-24"
          >
            {/* <div className="absolute left-0 md:-left-6 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div> */}

            <div className="ml-16 md:ml-0 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Upcoming</Badge>
                <Badge variant="outline" className="text-gray-300 border-gray-500">
                  <Calendar className="h-3 w-3 mr-1" /> May 2024 - Jul 2024
                </Badge>
                <Badge variant="outline" className="text-gray-300 border-gray-500">
                  <MapPin className="h-3 w-3 mr-1" /> Remote
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Software Development Intern</h3>
              <h4 className="text-xl text-purple-400 mb-4">Housing.com</h4>

              <p className="text-gray-300 mb-6">
                Upcoming internship at Housing.com, one of India's leading real estate platforms. Will be working on
                frontend development and contributing to the user experience of the platform.
              </p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Will be working on scalable application features using modern frontend technologies
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Will be collaborating with cross-functional teams to deliver high-quality user interfaces
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">Will be implementing responsive designs and optimizing performance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SalarySe Experience */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="relative md:w-1/2 md:pr-12"
          >
            {/* <div className="absolute left-0 md:-left-6 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div> */}

            <div className="ml-16 md:ml-0 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge variant="outline" className="text-gray-300 border-gray-500">
                  <Calendar className="h-3 w-3 mr-1" /> May 2023 - Jul 2023
                </Badge>
                <Badge variant="outline" className="text-gray-300 border-gray-500">
                  <MapPin className="h-3 w-3 mr-1" /> Gurgaon
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Software Development Intern</h3>
              <h4 className="text-xl text-purple-400 mb-4">SalarySe</h4>

              <p className="text-gray-300 mb-6">
                Worked on developing scalable application features and creating reusable UI components for mobile
                applications.
              </p>

              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Developed scalable application features using Flutter, Bloc Management, Firebase, and REST APIs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Created a Flutter plugin with reusable UI components, streamlining development processes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </div>
                  <p className="text-gray-300">
                    Delivered contact-saving app with Firestore integration, leveraging Bloc for efficient state
                    management
                  </p>
                </div>
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
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <p className="text-gray-300">
              Looking for opportunities to apply my skills and grow as a frontend developer.
              <span className="block mt-2 text-purple-400 font-medium">Open to internships and collaborations!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
