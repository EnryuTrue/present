"use client"

import { motion } from "framer-motion"
import { BookOpen, FileText, Globe, Lightbulb } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Slide0() {
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

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div className="w-full max-w-7xl px-4 py-8" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="slide-title text-center gradient-text mb-8" variants={itemVariants}>
          Introduction
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Card className="p-4 h-full bg-black/40 backdrop-blur-sm border-purple-500/30">
              <div className="flex items-start mb-4">
                <Globe className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contexte</h3>
                  <p className="text-gray-300 text-sm">
                    Une application web accessible via navigateur, offrant une compatibilité multiplateforme et une
                    gestion en temps réel des événements et des ventes de billets.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Lightbulb className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problématique</h3>
                  <p className="text-gray-300 text-sm">
                    Malgré la montée des solutions numériques en Algérie, le secteur de la billetterie reste
                    traditionnel, entraînant des processus d'achat longs, un accès limité aux informations et des
                    risques de fraude.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-4 h-full bg-black/40 backdrop-blur-sm border-purple-500/30">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Structure du Mémoire</h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Partie théorique :</span> Présentation de l'entreprise, des
                      technologies utilisées et étude comparative.
                    </li>
                    <li>
                      <span className="font-medium">Partie pratique :</span> Conception et implémentation de
                      l'application avec démonstration.
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-4 bg-gradient-to-r from-purple-900/40 to-purple-700/40 backdrop-blur-sm border-purple-500/30">
            <motion.p
              className="text-lg text-center text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Ce projet vise à révolutionner le secteur de la billetterie en Algérie en offrant une solution numérique
              complète pour les organisateurs d'événements et les participants.
            </motion.p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
