"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Palette, Shield, Rocket, Calendar, Layout, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Slide12() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      }
    },
  }

  const sections = [
    {
      title: "Introduction",
      icon: BookOpen,
      color: "from-purple-500 to-purple-700",
      slides: [
        { number: 1, title: "Introduction" },
        { number: 2, title: "Le Problème & La Solution" },
        { number: 3, title: "Entreprise" },
        { number: 4, title: "Objectifs" },
      ],
    },
    {
      title: "Aspects Techniques",
      icon: Code,
      color: "from-blue-500 to-blue-700",
      slides: [
        { number: 5, title: "Technologies" },
        { number: 6, title: "Outils de Développement" },
        { number: 10, title: "Sécurité" },
      ],
    },
    {
      title: "Fonctionnalités",
      icon: Layout,
      color: "from-green-500 to-green-700",
      slides: [
        { number: 7, title: "Planification" },
        { number: 8, title: "Parcours Utilisateur" },
        { number: 9, title: "Interface Utilisateur" },
      ],
    },
    {
      title: "Perspectives",
      icon: Rocket,
      color: "from-orange-500 to-orange-700",
      slides: [
        { number: 11, title: "Perspectives d'Évolution" },
        { number: 12, title: "Conclusion" },
      ],
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black min-h-screen w-full flex items-center justify-center overflow-hidden p-8">
      <motion.div 
        className="w-full max-w-7xl" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-12" 
          variants={titleVariants}
        >
          Plan de Travail
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full bg-black/40 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/60 transition-all">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} mr-3`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.slides.map((slide, slideIndex) => (
                    <motion.li 
                      key={slideIndex}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (slideIndex * 0.1) + (index * 0.2) }}
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-900/60 text-xs">
                        {slide.number}
                      </span>
                      <span>{slide.title}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}