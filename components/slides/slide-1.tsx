"use client"

import { motion } from "framer-motion"
import { Ticket, AlertTriangle, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Ticketlogo from "@/public/logo-ticketster.svg"

export default function Slide1() {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      },
    },
  }

  const problemItems = [
    { icon: AlertTriangle, text: "Billets Papier" },
    { icon: AlertTriangle, text: "Contrefaçon" },
    { icon: AlertTriangle, text: "Analyses Limitées" },
    { icon: AlertTriangle, text: "Découverte Difficile" },
  ]

  const solutionItems = [
    { icon: Calendar, text: "Découverte d'Événements" },
    { icon: Ticket, text: "Billets Numériques" },
    { icon: Users, text: "Outils Organisateur" },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-screen overflow-hidden">
      <motion.div 
        className="h-full w-full flex flex-col justify-center px-8" 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-5xl text-center gradient-text mb-12" variants={itemVariants}>
          Le Problème & La Solution
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 h-full max-h-[70vh]">
          {/* Problem Section */}
          <motion.div className="flex-1 h-full flex flex-col" variants={itemVariants}>
            <motion.div className="flex justify-center mb-4" variants={iconVariants}>
              <div className="relative">
                <AlertTriangle className="h-12 md:h-16 w-12 md:w-16 text-red-500 icon-pulse" />
                <motion.div
                  className="absolute inset-0 bg-red-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-red-400" variants={itemVariants}>
              Défis Actuels
            </motion.h2>

            <motion.div className="grid grid-cols-2 gap-3 flex-1" variants={containerVariants}>
              {problemItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-red-900/50"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-red-400 mb-2" />
                    <p className="text-center font-medium text-xs md:text-sm">{item.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-0.5 w-full md:h-full md:w-0.5 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          {/* Solution Section */}
          <motion.div className="flex-1 h-full flex flex-col" variants={itemVariants}>
            <motion.div className="flex justify-center mb-4" variants={iconVariants}>
              <div className="relative">
                <Image src={Ticketlogo} alt="ticketster logo" width={150} height={150} />
              </div>
            </motion.div>

            <motion.h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-primary" variants={itemVariants}>
              Solution Ticketster
            </motion.h2>

            <motion.div className="grid grid-cols-1 gap-3 flex-1" variants={containerVariants}>
              {solutionItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-center bg-purple-900/20 backdrop-blur-sm p-3 rounded-xl border border-purple-500/30"
                    variants={itemVariants}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary mr-3" />
                    <p className="font-medium text-sm md:text-base">{item.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
