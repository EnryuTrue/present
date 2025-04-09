"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Slide5() {
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

  const outilsDeDeveloppement = [
    {
      name: "VS Code",
      icon: "/vscode.svg?height=200&width=200",
      description: "Éditeur de Code",
      color: "bg-blue-300",
    },
    {
      name: "Postman",
      icon: "/postman.svg?height=200&width=200",
      description: "Test d'API",
      color: "bg-orange-400",
    },
    {
      name: "pgAdmin4",
      icon: "/postgresql.svg?height=200&width=200",
      description: "Gestion de Base de Données",
      color: "bg-blue-600",
    },
  ]

  const outilsDeConception = [
    {
      name: "Spline",
      icon: "/Spline_logo.webp?height=200&width=200",
      description: "Intégration 3D",
      color: "bg-purple-600",
    },
    {
      name: "Blender",
      icon: "/blender.svg?height=200&width=200",
      description: "Modélisation 3D",
      color: "bg-orange-300",
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-full overflow-auto">
      <motion.div className="container mx-auto px-4 h-full flex flex-col justify-between py-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-center mb-2" variants={itemVariants}>
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
          </motion.div>
          <motion.h1 className="slide-title mt-6 ml-4 gradient-text text-2xl md:text-3xl" variants={itemVariants}>
            Outils de Développement
          </motion.h1>
        </motion.div>

        <motion.div className="flex-1 flex flex-col justify-center gap-4">
          <motion.div className="mb-4" variants={containerVariants}>
            <motion.h2 
              className="text-lg md:text-xl font-bold mb-4 text-center text-purple-400"
              variants={itemVariants}
            >
              Environnement de Développement
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto" variants={containerVariants}>
              {outilsDeDeveloppement.map((outil, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-purple-800/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`${outil.color} w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 shadow-lg`}
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Image 
                      src={outil.icon}
                      alt={`Icône ${outil.name}`}
                      width={28}
                      height={28}
                      className="text-white"
                    />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold">{outil.name}</h3>
                  <p className="text-xs text-gray-300">{outil.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.h2 
              className="text-lg md:text-xl font-bold mb-4 text-center text-purple-400"
              variants={itemVariants}
            >
              Outils de Conception & 3D
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto" variants={containerVariants}>
              {outilsDeConception.map((outil, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-purple-800/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`${outil.color} w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-2 shadow-lg`}
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Image 
                      src={outil.icon}
                      alt={`Icône ${outil.name}`}
                      width={28}
                      height={28}
                      className="text-white"
                    />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold">{outil.name}</h3>
                  <p className="text-xs text-gray-300">{outil.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
