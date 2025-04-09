"use client"

import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Server, Database, Layout, Layers } from "lucide-react"

export default function TechnologiesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const technologies = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces with reusable components",
      category: "Frontend",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Django",
      description: "High-level Python web framework that encourages rapid development",
      category: "Backend",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Python",
      description: "Programming language used for backend logic and data processing",
      category: "Backend",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "JavaScript",
      description: "Programming language for interactive frontend functionality",
      category: "Frontend",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      category: "Frontend",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <>
      <Navigation />
      <PageTransition>
        <div className="slide-container">
          <motion.div className="slide-content" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="flex items-center justify-center mb-12" variants={itemVariants}>
              <Code className="h-12 w-12 text-primary mr-4" />
              <h1 className="slide-title mb-0">Technologies & Frameworks</h1>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={itemVariants}>
              <Card className="p-6 shadow-lg border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <div className="flex items-center mb-4">
                  <Layout className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Frontend Stack</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">React:</span> Component-based UI library for building interactive
                      interfaces
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">JavaScript:</span> Core language for frontend functionality and
                      user interactions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">Tailwind CSS:</span> Utility-first CSS framework for rapid and
                      responsive UI development
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 shadow-lg border-purple-100 bg-gradient-to-br from-purple-50 to-white">
                <div className="flex items-center mb-4">
                  <Server className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Backend Stack</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">Django:</span> High-level Python web framework with built-in
                      security and scalability
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">Python:</span> Versatile programming language for backend logic
                      and data processing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 mt-2"></span>
                    <div>
                      <span className="font-semibold">RESTful APIs:</span> For seamless communication between frontend
                      and backend
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.h2 className="text-3xl font-bold text-primary mb-6" variants={itemVariants}>
              Technology Stack Overview
            </motion.h2>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
              {technologies.map((tech, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-5 h-full shadow-md border-purple-100 hover:shadow-lg transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-purple-50 p-4 rounded-full mb-4">
                        <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-16 w-16" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-3">
                        {tech.category}
                      </span>
                      <p>{tech.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="bg-black text-white rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Architecture Overview</h2>
              <div className="flex flex-col md:flex-row items-center justify-around">
                <div className="text-center mb-8 md:mb-0">
                  <Layers className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Frontend Layer</h3>
                  <p className="max-w-xs">React components and Tailwind CSS for responsive and interactive UI</p>
                </div>
                <div className="text-center mb-8 md:mb-0">
                  <Server className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Backend Layer</h3>
                  <p className="max-w-xs">Django and Python for business logic, authentication, and API endpoints</p>
                </div>
                <div className="text-center">
                  <Database className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Data Layer</h3>
                  <p className="max-w-xs">Secure database for storing user, event, and ticket information</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </>
  )
}
