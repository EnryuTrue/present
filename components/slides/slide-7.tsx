"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, User, Calendar, ShoppingCart, CreditCard, Download, Eye } from "lucide-react"

export default function Slide7() {
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

  const flowSteps = [
    {
      title: "Page d'Accueil",
      icon: User,
      color: "bg-blue-600",
      description: "L'utilisateur arrive sur la plateforme",
    },
    {
      title: "Créer un Compte / Connexion",
      icon: User,
      color: "bg-purple-600",
      description: "L'utilisateur crée un compte ou se connecte",
    },
    {
      title: "Parcourir les Événements",
      icon: Calendar,
      color: "bg-green-600",
      description: "L'utilisateur parcourt les événements disponibles",
    },
    {
      title: "Ajouter au Panier",
      icon: ShoppingCart,
      color: "bg-yellow-600",
      description: "L'utilisateur sélectionne des billets à acheter",
    },
    {
      title: "Confirmer la Commande",
      icon: CreditCard,
      color: "bg-red-600",
      description: "L'utilisateur finalise le processus de paiement",
    },
    {
      title: "Télécharger les Billets",
      icon: Download,
      color: "bg-indigo-600",
      description: "L'utilisateur reçoit les billets numériques",
    },
    {
      title: "Voir les Billets",
      icon: Eye,
      color: "bg-teal-600",
      description: "L'utilisateur peut accéder aux billets dans son compte",
    },
  ]

  const organizerFlow = [
    {
      title: "Devenir Organisateur",
      icon: User,
      color: "bg-orange-600",
      description: "",
    },
    {
      title: "Créer des Événements",
      icon: Calendar,
      color: "bg-pink-600",
      description: "",
    },
    {
      title: "Configurer les Billets",
      icon: ShoppingCart,
      color: "bg-emerald-600",
      description: "",
    },
    {
      title: "Promouvoir les Événements",
      icon: Eye,
      color: "bg-blue-600",
      description: "",
    },
    {
      title: "Suivre les Ventes",
      icon: CreditCard,
      color: "bg-cyan-600",
      description: "",
    },
    {
      title: "Analyser les Données",
      icon: Download,
      color: "bg-violet-600",
      description: "",
    },
    {
      title: "Gérer le Compte",
      icon: User,
      color: "bg-amber-600",
      description: "",
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-full">
      <motion.div className="container mx-auto px-4 h-full flex flex-col justify-between py-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="slide-title text-center gradient-text mb-4" variants={itemVariants}>
          Flux de Parcours de la Plateforme
        </motion.h1>

        <motion.div className="flex-1 flex flex-col justify-center gap-4">
          <motion.div className="relative w-full max-w-5xl mx-auto" variants={itemVariants}>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-purple-600/50 -translate-y-1/2 z-0"></div>
            
            <div className="flex justify-between relative z-10">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <motion.div
                      className={`${step.color} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <p className="text-[10px] md:text-xs font-medium text-center max-w-[70px]">{step.title}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Connecting arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-16 -translate-y-1/2 z-0 pointer-events-none">
              {Array(flowSteps.length - 1).fill(0).map((_, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <ArrowRight className="h-5 w-5 text-purple-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 max-w-5xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-center gradient-text">Parcours de l'Organisateur</h3>
            <p className="text-center text-purple-200 text-xs mb-4">Comment les organisateurs créent et gèrent des événements réussis sur notre plateforme</p>
            
            <div className="relative w-full">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange-600/50 -translate-y-1/2 z-0"></div>
              
              <div className="flex justify-between relative z-10">
                {organizerFlow.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex flex-col items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <motion.div
                        className={`${step.color} w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="h-4 w-4 text-white" />
                      </motion.div>
                      <p className="text-[10px] font-medium text-center max-w-[70px]">{step.title}</p>
                      <motion.p 
                        className="text-[8px] text-center text-purple-300 max-w-[80px] mt-1 hidden md:block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Connecting arrows */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-16 -translate-y-1/2 z-0 pointer-events-none">
                {Array(organizerFlow.length - 1).fill(0).map((_, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <ArrowRight className="h-4 w-4 text-orange-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-4"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <p className="text-purple-300 text-xs md:text-sm">La plateforme Ticketster offre une expérience fluide pour les utilisateurs et les organisateurs d'événements, avec des outils puissants pour la création, la gestion et l'analyse d'événements</p>
        </motion.div>
      </motion.div>
    </div>
  )
}