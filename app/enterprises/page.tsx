"use client"

import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Building2, Users, TrendingUp, Handshake } from "lucide-react"

export default function EnterprisesPage() {
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
              Partenaires Entreprises
            </motion.h1>

            <motion.div className="mb-10" variants={itemVariants}>
              <Card className="p-8 shadow-lg border-purple-100 bg-gradient-to-r from-purple-50 to-white">
                <div className="flex items-center mb-6">
                  <Building2 className="h-10 w-10 text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Notre Orientation Entreprise</h2>
                </div>
                <p className="text-xl mb-4">
                  Ticketster est développé en partenariat avec les principales entreprises de gestion d'événements en Algérie pour
                  répondre à leurs besoins et défis spécifiques.
                </p>
              </Card>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" variants={itemVariants}>
              <Card className="p-6 shadow-md border-purple-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Entreprises Cibles</h3>
                </div>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Entreprises de gestion d'événements
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Organisateurs de concerts et festivals
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Centres de conférences et d'expositions
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Lieux sportifs et organisations
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Institutions culturelles et théâtres
                  </li>
                </ul>
              </Card>

              <Card className="p-6 shadow-md border-purple-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Avantages pour les Entreprises</h3>
                </div>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Flux de travail simplifié pour la gestion d'événements
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Analyses et rapports en temps réel
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Réduction des coûts opérationnels
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Amélioration de l'expérience client
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    Prévention des fraudes et sécurité
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Card className="p-6 max-w-2xl shadow-lg border-purple-100 bg-purple-50">
                <div className="flex justify-center mb-4">
                  <Handshake className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">Approche de Partenariat</h3>
                <p className="text-center text-lg">
                  Nous travaillons en étroite collaboration avec nos partenaires entreprises pour garantir que Ticketster réponde à leurs
                  exigences spécifiques tout en offrant une expérience fluide aux participants d'événements à travers l'Algérie.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </PageTransition>
    </>
  )
}
