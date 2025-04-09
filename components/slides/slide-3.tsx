"use client"

import { motion } from "framer-motion"
import { Target, CheckCircle, TrendingUp, Shield, Globe } from "lucide-react"

export default function Slide3() {
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
      title: "Digitize",
      icon: CheckCircle,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Discover",
      icon: Globe,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Empower",
      icon: TrendingUp,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Secure",
      icon: Shield,
      color: "from-red-500 to-red-700",
    },
  ]

  const metrics = [
    { value: "50+", label: "Organizers" },
    { value: "200+", label: "Events/Month" },
    { value: "50K+", label: "Users" },
    { value: "99.9%", label: "Security" },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black min-h-screen w-full overflow-hidden">
      <motion.div className="h-full w-full p-8 md:p-12" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-center mb-8 md:mb-12" variants={itemVariants}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Target className="h-16 w-16 md:h-24 md:w-24 text-primary glow" />
          </motion.div>
          <motion.h1 className="slide-title mb-0 ml-4 md:ml-6 gradient-text" variants={itemVariants}>
            Objectives
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
          variants={containerVariants}
        >
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-500/30 h-28 md:h-36"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${objective.color.split(" ")[0].replace("from-", "")} 0%, ${objective.color.split(" ")[1].replace("to-", "")} 100%)`,
                  }}
                />
                <motion.div
                  className={`bg-gradient-to-br ${objective.color} rounded-full p-2 md:p-3 mb-2 md:mb-3`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </motion.div>
                <p className="text-lg md:text-xl font-bold text-center">{objective.title}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-2xl p-4 md:p-6"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Platform Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="text-2xl md:text-4xl font-bold mb-1"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1 + index * 0.2, type: "spring" }}
                >
                  {metric.value}
                </motion.div>
                <div className="text-sm md:text-base">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
