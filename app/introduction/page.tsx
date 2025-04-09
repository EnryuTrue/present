"use client"

import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Ticket, AlertTriangle, Calendar, Users } from "lucide-react"

export default function IntroductionPage() {
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
    <>
      <Navigation />
      <PageTransition>
        <div className="slide-container">
          <motion.div className="slide-content" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 className="slide-title" variants={itemVariants}>
              Introduction & Énoncé du Problème
            </motion.h1>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" variants={itemVariants}>
              <Card className="p-6 shadow-lg border-purple-100">
                <div className="flex items-center mb-4">
                  <Ticket className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Qu'est-ce que Ticketster ?</h2>
                </div>
                <p className="text-lg">
                  Ticketster est une application web complète conçue pour révolutionner la gestion d'événements et la billetterie
                  en Algérie. Notre plateforme connecte les organisateurs d'événements avec les participants à travers une expérience
                  numérique fluide.
                </p>
              </Card>

              <Card className="p-6 shadow-lg border-purple-100">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Le Problème</h2>
                </div>
                <p className="text-lg">
                  L'Algérie fait face à des défis importants dans la gestion d'événements et la billetterie, notamment :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Manque d'infrastructure de billetterie numérique</li>
                  <li>Canaux de promotion d'événements inefficaces</li>
                  <li>Accès limité aux analyses pour les organisateurs</li>
                  <li>Prévalence des billets contrefaits</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={itemVariants}>
              <Card className="p-5 bg-purple-50 border-purple-100">
                <Calendar className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Découverte d'Événements</h3>
                <p className="text-center">Plateforme centralisée pour découvrir et explorer des événements à travers l'Algérie</p>
              </Card>

              <Card className="p-5 bg-purple-50 border-purple-100">
                <Ticket className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Billetterie Sécurisée</h3>
                <p className="text-center">Billets numériques avec vérification pour éliminer la fraude et la contrefaçon</p>
              </Card>

              <Card className="p-5 bg-purple-50 border-purple-100">
                <Users className="h-10 w-10 text-primary mb-3 mx-auto" />
                <h3 className="text-xl font-semibold text-center mb-2">Outils pour Organisateurs</h3>
                <p className="text-center">
                  Tableau de bord complet pour la gestion d'événements, les analyses et la communication avec les participants
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </>
  )
}
