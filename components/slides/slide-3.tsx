"use client"

import { motion } from "framer-motion"
import { Laptop, Shield, Search, TrendingUp, BarChart3 } from "lucide-react"

export default function ObjectivesSlide() {
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

  const objectives = [
    {
      title: "Make it Digital",
      description: "Transform analog processes into seamless digital experiences",
      icon: Laptop,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Make it Secure",
      description: "Protect data with enterprise-grade security protocols",
      icon: Shield,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Make Discovery Easy",
      description: "Intuitive interfaces that simplify finding what matters",
      icon: Search,
      color: "from-amber-500 to-amber-700",
    },
    {
      title: "Drive Growth",
      description: "Empower users with tools that accelerate success",
      icon: TrendingUp,
      color: "from-green-500 to-green-700",
    },
  ]

  const metrics = [
    { value: "50+", label: "Organizers", icon: BarChart3 },
    { value: "200+", label: "Events/Month", icon: BarChart3 },
    { value: "50K+", label: "Users", icon: BarChart3 },
    { value: "99.9%", label: "Security", icon: BarChart3 },
  ]

  return (
    <div className="slide bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 bg-repeat"></div>

      <motion.div
        className="relative h-full w-full p-8 md:p-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center justify-center mb-12 md:mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            variants={itemVariants}
          >
            Our Objectives
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
        >
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <motion.div
                key={index}
                className="relative flex flex-col h-full bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30 overflow-hidden group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${objective.color.split(" ")[0].replace("from-", "")} 0%, ${objective.color.split(" ")[1].replace("to-", "")} 100%)`,
                  }}
                />

                <motion.div
                  className={`bg-gradient-to-br ${objective.color} rounded-full p-3 mb-4 w-14 h-14 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: index * 0.1,
                  }}
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{objective.title}</h3>
                <p className="text-sm text-gray-300 mt-2 opacity-80">{objective.description}</p>

                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${objective.color.split(" ")[0].replace("from-", "")} 0%, ${objective.color.split(" ")[1].replace("to-", "")} 100%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
