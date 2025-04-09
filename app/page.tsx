"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <Image src="/logo-ticketster.svg" alt="Ticketster Logo" width={150} height={150} className="h-24 w-auto" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-primary">Ticket</span>ster
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Plateforme de billetterie et de gestion d'évènements
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-gray-400 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Par Nassreddine Larbi Aissa et Menouer Ismail
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => router.push("/presentation/1")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Démarrer la Présentation <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
