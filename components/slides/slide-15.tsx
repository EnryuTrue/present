"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function Slide11() {
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

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  // Generate circles for the background
  const circles = Array.from({ length: 8 }, (_, i) => ({
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
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-full overflow-hidden relative">
      {/* Background animated circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className={`absolute rounded-full ${circle.color === "purple" ? "bg-purple-600" : "bg-blue-600"}`}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: circle.size,
            height: circle.size,
            opacity: circle.opacity,
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            delay: circle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0.6,
          }}
          animate={{
            y: [
              particle.y,
              particle.y - 20 - Math.random() * 30,
              particle.y,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div 
        className="h-full flex flex-col items-center justify-center px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central title with sparkles */}
        <motion.div 
          className="relative"
          variants={titleVariants}
        >
          <motion.div
            className="absolute -inset-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.h1 
            className="text-6xl font-bold gradient-text relative"
            animate={{
              textShadow: [
                "0 0 5px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.8)",
                "0 0 5px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
           Realisation
          </motion.h1>

          {/* Sparkles around the title */}
          <motion.div
            className="absolute -top-6 -right-6"
            animate={{
              rotate: [0, 20, 0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-8 w-8 text-yellow-400" />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6"
            animate={{
              rotate: [0, -20, 0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Sparkles className="h-8 w-8 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Animated rings around the title */}
        <motion.div
          className="absolute w-40 h-40 rounded-full border-2 border-purple-500/30"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-60 h-60 rounded-full border-2 border-blue-500/20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full border-2 border-purple-400/10"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </div>
  )
}