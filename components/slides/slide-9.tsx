"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Key, UserCheck, Database, CheckCircle2 } from "lucide-react"

export default function Slide9() {
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

  const securityFeatures = [
    {
      title: "Django Rest Framework",
      icon: Shield,
      color: "bg-green-600",
      description: "Système de permissions robuste pour les APIs",
      details: [
        "Contrôle d'accès granulaire",
        "Permissions basées sur les rôles",
        "Sécurisation des endpoints",
      ],
    },
    {
      title: "JWT Authentication",
      icon: Key,
      color: "bg-blue-600",
      description: "Authentification sécurisée via JSON Web Tokens",
      details: [
        "Tokens signés cryptographiquement",
        "Expiration automatique",
        "Authentification sans état",
      ],
    },
    {
      title: "Hachage de Mots de Passe",
      icon: Lock,
      color: "bg-purple-600",
      description: "Algorithmes de chiffrement Django pour sécuriser les données",
      details: [
        "PBKDF2 avec SHA256",
        "Salage automatique",
        "Itérations multiples",
      ],
    },
  ]

  const securityBenefits = [
    {
      title: "Protection des Données",
      icon: Database,
      description: "Sécurisation complète des informations sensibles des utilisateurs",
    },
    {
      title: "Authentification Fiable",
      icon: UserCheck,
      description: "Système d'authentification robuste contre les attaques",
    },
    {
      title: "Conformité Standards",
      icon: CheckCircle2,
      description: "Respect des meilleures pratiques de sécurité web",
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black min-h-screen w-full py-8">
      <motion.div className="container mx-auto px-4 h-full flex flex-col justify-between" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="flex items-center justify-center gap-3 mb-8" variants={itemVariants}>
          <Shield className="h-8 w-8 text-purple-600" />
          <motion.h1 className="text-center text-3xl font-bold gradient-text">
            Sécurité & <span className="text-purple-400">Authentication</span>
          </motion.h1>
        </motion.div>

        <motion.div className="flex flex-col gap-6">
          {/* Security Features Section */}
          <motion.div className="w-full max-w-5xl mx-auto" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-black/40 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-purple-500/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                    }}
                    whileHover={{ y: -3, boxShadow: "0 8px 20px -4px rgba(0, 0, 0, 0.2)" }}
                  >
                    <motion.div
                      className={`${feature.color} w-10 h-10 rounded-full flex items-center justify-center mb-3`}
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
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-300 mb-3">{feature.description}</p>
                    
                    <ul className="space-y-1.5">
                      {feature.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (index * 0.2) + (detailIndex * 0.1) }}
                        >
                          <div className="bg-purple-600/20 p-0.5 rounded-full mr-2 mt-0.5">
                            <CheckCircle2 className="h-2.5 w-2.5 text-purple-400" />
                          </div>
                          <span className="text-xs text-gray-300">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Security Benefits Section */}
          <motion.div 
            className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 max-w-5xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-base font-semibold mb-4 text-center text-white">Avantages de Notre Approche</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {securityBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-purple-900/20 rounded-lg p-3 shadow-md flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                    }}
                    whileHover={{ y: -3, boxShadow: "0 8px 20px -4px rgba(0, 0, 0, 0.2)" }}
                  >
                    <Icon className="h-6 w-6 text-purple-400 mb-2" />
                    <h4 className="font-medium text-white text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-300">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-6"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-gray-400 text-xs">La sécurité de Ticketster est conçue selon les meilleures pratiques de l'industrie, assurant une protection optimale des données utilisateurs et une expérience d'authentification fluide et sécurisée.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}