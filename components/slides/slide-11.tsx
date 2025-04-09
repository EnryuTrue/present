"use client"

import { motion } from "framer-motion"
import { Smartphone, Sparkles, Globe, ArrowRight, Rocket } from "lucide-react"

export default function Slide10() {
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

  const perspectives = [
    {
      title: "Application Mobile",
      icon: Smartphone,
      color: "bg-blue-600",
      description: "Développement d'une expérience mobile native",
      details: [
        "Interface utilisateur intuitive",
        "Notifications en temps réel",
        "Billetterie hors ligne",
        "Scan de QR code intégré",
      ],
    },
    {
      title: "Nouvelles Fonctionnalités",
      icon: Sparkles,
      color: "bg-purple-600",
      description: "Enrichissement de l'offre de services",
      details: [
        "Système de fidélité",
        "Marketplace pour organisateurs",
        "Analyse de données avancée",
        "Intégration de paiements multiples",
      ],
    },
    {
      title: "Expansion Internationale",
      icon: Globe,
      color: "bg-green-600",
      description: "Déploiement progressif dans de nouveaux marchés",
      details: [
        "Adaptation aux marchés locaux",
        "Partenariats stratégiques",
        "Support multilingue",
        "Conformité réglementaire",
      ],
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-full overflow-hidden">
      <motion.div className="h-full flex flex-col justify-between px-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-center gap-3 pt-4" variants={itemVariants}>
          <Rocket className="h-6 w-6 text-purple-600" />
          <motion.h1 className="text-center text-2xl font-bold gradient-text">
            Perspectives <span className="text-purple-400">Futures</span>
          </motion.h1>
        </motion.div>

        <motion.div className="flex-1 grid grid-cols-3 gap-4 px-2 py-4">
          {perspectives.map((perspective, index) => {
            const Icon = perspective.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-black/40 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-purple-500/30 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    className={`${perspective.color} w-10 h-10 rounded-full flex items-center justify-center`}
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{perspective.title}</h3>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">{perspective.description}</p>
                
                <div className="flex-1">
                  <ul className="space-y-2">
                    {perspective.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (index * 0.2) + (detailIndex * 0.1) }}
                      >
                        <ArrowRight className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center pb-4"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-gray-400 text-xs">Ticketster évolue constamment pour offrir une expérience de billetterie innovante et adaptée aux besoins du marché mondial.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}