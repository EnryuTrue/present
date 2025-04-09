"use client"

import { motion } from "framer-motion"
import { Building2, Globe, Palette, Users, TrendingUp, Code } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Slide2() {
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

  const services = [
    {
      name: "Développement Web",
      icon: Code,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Marketing Digital",
      icon: TrendingUp,
      color: "from-green-500 to-green-700",
    },
    {
      name: "Design Graphique",
      icon: Palette,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Gestion de Communauté",
      icon: Users,
      color: "from-red-500 to-red-700",
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen overflow-hidden">
      <motion.div 
        className="h-full flex flex-col justify-between p-4 gap-4" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
  className="flex justify-center items-center gap-4" 
  variants={itemVariants}
>
  <Image 
    src="/logo-01.png" 
    alt="Company Logo" 
    width={200} 
    height={200} 
    className="rounded-full object-contain" // Added object-contain for better image scaling
  />
  <motion.h1 className="slide-title gradient-text text-2xl font-bold leading-none mt-7">
   Entreprise
  </motion.h1>
</motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[60vh]">
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full p-3 bg-black/40 backdrop-blur-sm border-purple-500/30">
              <div className="flex flex-col h-full justify-between space-y-3">
                <div className="flex items-start">
                  <Globe className="h-8 w-8 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold mb-1">Profil de l'Entreprise</h3>
                    <p className="text-xs text-gray-300">
                      Agence spécialisée fondée en 2020, NEW WORLD DIGITAL a évolué d'une petite agence locale à une
                      entreprise reconnue dans le domaine du digital en Algérie.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1">
                  <Image 
                    src="/logo-01.png"
                    alt="Company Logo"
                    width={150}
                    height={150}
                    className="object-contain opacity-50"
                  />
                </div>
                <div className="flex items-start">
                  <TrendingUp className="h-8 w-8 text-primary mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold mb-1">Expertise Reconnue</h3>
                    <p className="text-xs text-gray-300">
                      Reconnue pour ses stratégies publicitaires personnalisées et la création de sites web de qualité
                      adaptés aux besoins spécifiques de chaque client.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 h-full">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="relative bg-black/40 backdrop-blur-sm p-2 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${service.color} rounded-full p-3 mb-2`}
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
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <p className="text-center text-xs font-medium">{service.name}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
