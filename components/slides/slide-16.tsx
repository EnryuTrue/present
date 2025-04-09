"use client"

import { motion } from "framer-motion"
import { Database, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DiagrammeBaseDeDonnees() {
  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Variants for the title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    },
  }

  // Variants for the button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.5,
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      }
    },
    tap: {
      scale: 0.95,
    }
  }

  // Generate circles for the background
  const cercles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + (i * 10),
    y: 50 + (Math.sin(i) * 20),
    size: 100 + (Math.random() * 200),
    duration: 20 + (Math.random() * 40),
    delay: i * 0.5,
    color: i % 2 === 0 ? "purple" : "blue",
    opacity: 0.05 + (Math.random() * 0.1),
  }))

  return (
    <div className="slide bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 min-h-screen w-full overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 bg-repeat"></div>
      
      {/* Background animated circles */}
      {cercles.map((cercle) => (
        <motion.div
          key={cercle.id}
          className={`absolute rounded-full ${cercle.color === "purple" ? "bg-purple-600" : "bg-blue-600"}`}
          style={{
            left: `${cercle.x}%`,
            top: `${cercle.y}%`,
            width: cercle.size,
            height: cercle.size,
            opacity: cercle.opacity,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: cercle.duration,
            repeat: Infinity,
            delay: cercle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div 
        className="relative h-full w-full p-8 md:p-12 max-w-7xl mx-auto flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title with database icon */}
        <motion.div className="flex items-center justify-center mb-12 md:mb-16" variants={titleVariants}>
          <Database className="h-12 w-12 text-purple-500 mr-4" />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={titleVariants}
          >
            Schéma de Base de Données
          </motion.h1>
        </motion.div>

        {/* Database diagram container */}
        <motion.div 
          className="relative w-full max-w-4xl h-[400px] md:h-[500px] bg-black/40 backdrop-blur-md rounded-2xl border border-purple-500/30 overflow-hidden mb-10 md:mb-12"
          variants={titleVariants}
        >
          {/* Placeholder for database diagram - in a real implementation, you might embed an iframe or image here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Database className="h-24 w-24 text-purple-400 mx-auto mb-6 opacity-50" />
              <p className="text-xl text-gray-300">Diagramme Conceptuel de la Base de Données</p>
              <p className="text-sm text-gray-400 mt-2">Cliquez sur le bouton ci-dessous pour voir le diagramme interactif</p>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 opacity-10"
          />
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-10"
          />
        </motion.div>

        {/* Button to external link */}
        <motion.a
          href="https://dbdiagram.io/d/67f6a0754f7afba184fafa1f"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-8 rounded-full shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Voir le Diagramme MCD Interactif</span>
          <ExternalLink className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </div>
  )
}