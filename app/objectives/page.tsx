"use client"

import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Target, CheckCircle, TrendingUp, Shield, Globe } from "lucide-react"

export default function ObjectivesPage() {
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
      title: "Numériser la Billetterie",
      description: "Remplacer les billets papier par des alternatives numériques sécurisées pour réduire la fraude et améliorer l'accessibilité.",
      icon: CheckCircle,
    },
    {
      title: "Améliorer la Découverte d'Événements",
      description: "Créer une plateforme centralisée permettant aux Algériens de découvrir et d'assister à des événements dans tout le pays.",
      icon: Globe,
    },
    {
      title: "Autonomiser les Organisateurs",
      description: "Fournir des outils puissants pour la gestion d'événements, les analyses et la communication avec les participants.",
      icon: TrendingUp,
    },
    {
      title: "Assurer la Sécurité",
      description: "Mettre en place des systèmes de vérification robustes pour éliminer les billets contrefaits et les entrées non autorisées.",
      icon: Shield,
    },
  ]

  return (
    <>
      <Navigation />
      <PageTransition>
        <div className="slide-container">
          <motion.div className="slide-content" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="flex items-center justify-center mb-12" variants={itemVariants}>
              <Target className="h-12 w-12 text-primary mr-4" />
              <h1 className="slide-title mb-0">Nos Objectifs</h1>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={itemVariants}>
              {objectives.map((objective, index) => {
                const Icon = objective.icon
                return (
                  <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="p-6 h-full shadow-md border-purple-100 hover:shadow-lg transition-all">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-3 rounded-full mr-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold">{objective.title}</h3>
                      </div>
                      <p className="text-lg">{objective.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Indicateurs de Performance Clés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg">Organisateurs d'Événements</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-lg">Événements Par Mois</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-lg">Utilisateurs Mensuels</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-lg">Prévention des Fraudes</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </>
  )
}
