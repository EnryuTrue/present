"use client"

import { motion } from "framer-motion"
import { Code, Server, Database, Layers } from "lucide-react"
import Image from "next/image"

export default function Slide4() {
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
      icon: "/react.svg?height=80&width=80",
      color: "bg-blue-600",
    },
    {
      name: "Django",
      icon: "/django.svg?height=80&width=80",
      color: "bg-green-300",
    },
    {
      name: "Python",
      icon: "/python.svg?height=80&width=80",
      color: "bg-yellow-500",
    },
    {
      name: "JavaScript",
      icon: "/javascript.svg?height=80&width=80",
      color: "bg-yellow-300",
    },
    {
      name: "Tailwind",
      icon: "/tailwind-css.svg?height=80&width=80",
      color: "bg-cyan-900",
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen overflow-hidden">
      <motion.div className="slide-content h-full flex flex-col justify-between py-8" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Code className="h-12 w-12 md:h-16 md:w-16 text-primary glow" />
          </motion.div>
          <motion.h1 className="slide-title mt-7 ml-4 gradient-text text-3xl md:text-4xl" variants={itemVariants}>
            Technologies
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-4"
          variants={containerVariants}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.div
                className={`${tech.color} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 shadow-lg`}
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-6 w-6 md:h-8 md:w-8" />
              </motion.div>
              <p className="text-sm md:text-base font-bold text-center">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-black text-white rounded-2xl p-4 md:p-6 shadow-xl border border-purple-800"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Architecture</h2>
          <div className="flex flex-col md:flex-row items-center justify-around">
            <motion.div className="text-center mb-4 md:mb-0" whileHover={{ scale: 1.1 }}>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Layers className="h-12 w-12 md:h-16 md:w-16 text-purple-400 mx-auto mb-2" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">React</h3>
            </motion.div>

            <motion.div className="text-center mb-4 md:mb-0" whileHover={{ scale: 1.1 }}>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                <Server className="h-12 w-12 md:h-16 md:w-16 text-purple-400 mx-auto mb-2" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">Django</h3>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <Database className="h-12 w-12 md:h-16 md:w-16 text-purple-400 mx-auto mb-2" />
              </motion.div>
              <h3 className="text-base md:text-lg font-semibold">PostgresSql</h3>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
