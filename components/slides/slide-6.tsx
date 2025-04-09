"use client"

import { motion } from "framer-motion"
import { CheckCircle, Ticket, Calendar, Users, CreditCard, BarChart } from "lucide-react"

export default function Slide6() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const features = [
    { title: "Spécifications", icon: Ticket, color: "bg-purple-600" },
    { title: "Conception BDD", icon: Calendar, color: "bg-blue-600" },
    { title: "Dév Front-End", icon: Users, color: "bg-green-600" },
    { title: "Dév Back-End", icon: CreditCard, color: "bg-yellow-600" },
    { title: "Tests & Déploiement", icon: BarChart, color: "bg-red-600" },
  ]

  const timeline = [
    { phase: "Spécifications", time: "5 jours", tasks: ["Définir l'architecture", "Définir les besoins"] },
    { phase: "Conception BDD", time: "10 jours", tasks: ["Modèle conceptuel", "Modèle logique"] },
    { phase: "Développement", time: "30 jours", tasks: ["Front-end", "Back-end", "API"] },
    { phase: "Tests & Déploiement", time: "15 jours", tasks: ["UAT", "Production"] },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-screen overflow-hidden">
      <motion.div 
        className="h-full flex flex-col px-6 py-4" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.h1 
          className="slide-title text-center gradient-text text-3xl mb-4" 
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(168, 85, 247, 0.4)",
          }}
        >
          Planification du Projet
        </motion.h1>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 260,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <motion.div
                  className={`${feature.color} w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow-lg`}
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    boxShadow: [
                      "0 0 0 rgba(168, 85, 247, 0.4)",
                      "0 0 20px rgba(168, 85, 247, 0.6)",
                      "0 0 0 rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <p className="text-xs font-medium">{feature.title}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-2 gap-4 h-[calc(100vh-280px)]">
          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-center">Chronologie</h3>
            <div className="relative h-[calc(100%-2rem)]">
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-purple-600/50"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col mb-3 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                >
                  <div className="flex items-start">
                    <motion.div
                      className="bg-purple-600 rounded-full h-4 w-4 flex items-center justify-center z-10 mr-2"
                      whileHover={{ scale: 1.2 }}
                    >
                      <CheckCircle className="h-2 w-2 text-white" />
                    </motion.div>
                    <div className="text-sm">
                      <span className="font-semibold">{item.phase}</span>
                      <span className="ml-1 text-purple-300">({item.time})</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <ul className="list-disc text-xs text-purple-200 mt-1">
                      {item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-center">Priorités</h3>
            <ul className="space-y-3 h-[calc(100%-2rem)]">
              {[
                { task: "Définir l'architecture", priority: "Haute" },
                { task: "Conception de la base de données", priority: "Moyenne" },
                { task: "React & Tailwind", priority: "Moyenne" },
                { task: "Django & PostgreSQL", priority: "Haute" },
                { task: "Tests & Déploiement", priority: "Moyenne" },
              ].map((step, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-between text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className="text-purple-400 mr-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <CheckCircle className="h-4 w-4" />
                    </motion.div>
                    <span>{step.task}</span>
                  </div>
                  <motion.span 
                    className={`text-xs px-2 py-1 rounded-full ${step.priority === 'Haute' ? 'bg-red-500' : 'bg-yellow-500'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.priority}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
