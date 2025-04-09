"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Palette, Layout, Type, Smartphone, Monitor, Layers, Sliders, EyeIcon } from "lucide-react"

export default function Slide8() {
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

  const colorPalette = [
    { name: "Purple", color: "bg-purple-600", hex: "#9333EA" },
    { name: "White", color: "bg-white", hex: "#FFFFFF", textColor: "text-gray-800" },
    { name: "Gray", color: "bg-gray-200", hex: "#E5E7EB", textColor: "text-gray-800" },
    { name: "Black", color: "bg-black", hex: "#000000" },
  ]

  const uiComponents = [
    {
      title: "Typographie",
      icon: Type,
      color: "bg-purple-600",
      description: "Système de typographie hiérarchique et lisible",
    },
    {
      title: "Composants",
      icon: Layers,
      color: "bg-black",
      description: "Bibliothèque de composants réutilisables",
    },
    {
      title: "Responsive",
      icon: Smartphone,
      color: "bg-purple-600",
      description: "Design adaptatif pour tous les appareils",
    },
    {
      title: "Accessibilité",
      icon: EyeIcon,
      color: "bg-black",
      description: "Interface accessible à tous les utilisateurs",
    },
  ]

  return (
    <div className="slide bg-white h-screen w-full">
      <motion.div className="container mx-auto px-4 h-full flex flex-col justify-between py-4" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="text-center text-4xl font-bold text-black mb-4" variants={itemVariants}>
          Design et <span className="text-purple-600">UI</span>
        </motion.h1>

        <motion.div className="flex-1 flex flex-col justify-center gap-8">
          {/* Color Palette Section */}
          <motion.div className="w-full max-w-5xl mx-auto" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-black">Palette de Couleurs</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colorPalette.map((color, index) => (
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
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`${color.color} w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-md border border-gray-200`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={color.textColor ? color.textColor : "text-white"}>{color.hex}</span>
                  </motion.div>
                  <p className="text-xs font-medium text-gray-700">{color.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* UI Components Section */}
          <motion.div 
            className="bg-gray-200 rounded-xl p-6 border border-gray-300 max-w-5xl mx-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center text-black">Principes de Design</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {uiComponents.map((component, index) => {
                const Icon = component.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                    }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                  >
                    <motion.div
                      className={`${component.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}
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
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h4 className="font-medium text-black mb-1">{component.title}</h4>
                    <p className="text-xs text-gray-600">{component.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* UI Mockups Section */}
          <motion.div className="w-full max-w-5xl mx-auto" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Layout className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold text-black">Interfaces Utilisateur</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-purple-600 text-white p-2 text-center text-sm font-medium">
                  Interface Utilisateur
                </div>
                <div className="p-4 flex flex-col items-center">
                  <Monitor className="h-16 w-16 text-black mb-2" />
                  <p className="text-gray-700 text-sm text-center">Design intuitif et moderne pour une expérience utilisateur optimale</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-black text-white p-2 text-center text-sm font-medium">
                  Interface Mobile
                </div>
                <div className="p-4 flex flex-col items-center">
                  <Smartphone className="h-16 w-16 text-purple-600 mb-2" />
                  <p className="text-gray-700 text-sm text-center">Version mobile optimisée pour une utilisation en déplacement</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-4"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="text-gray-600 text-sm">Le design de Ticketster met l'accent sur l'expérience utilisateur avec une interface claire, moderne et accessible, utilisant une palette de couleurs minimaliste pour renforcer l'identité de la marque.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}