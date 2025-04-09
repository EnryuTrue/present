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
        className="w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Column */}
        <motion.div
          className="text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="flex justify-start mb-6">
            <Image src="/logo-insfp.png" alt="INSFP Logo" width={120} height={120} className="h-20 w-auto" />
          </div>

          <h2 className="text-lg text-gray-300 mb-4">
            République Algérienne Démocratique et Populaire
          </h2>

          <h3 className="text-md text-gray-400 mb-6">
            Ministère de la Formation et de l'Enseignement Professionnels
          </h3>

          <h1 className="text-2xl font-bold text-white mb-4">
            INSFP en Arts et Industries Graphiques Khalil ZYAT - Blida
          </h1>

          <p className="text-xl text-primary mb-6">
            Option : Développement Web et Multimédia
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="text-right md:border-l md:border-gray-700 md:pl-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-xl text-gray-300 mb-4">Soutenance de fin de formation</h3>
          <p className="text-lg text-gray-400 mb-6">
            Pour l'obtention du diplôme de Technicien Supérieur en Informatique
          </p>

          <div className="mb-8">
            <p className="text-lg text-gray-300 mb-2">Présenté par :</p>
            <p className="text-gray-400">M. Larbi Aissa Nassreddine</p>
            <p className="text-gray-400">M. Menouer Ismail</p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-300 mb-2">Encadré par :</p>
            <p className="text-gray-400">M. Salmi Nabil</p>
            <p className="text-gray-400">M. HASSAN Noufel</p>
          </div>
        </motion.div>

        {/* Center Content - Full Width */}
        <motion.div
          className="text-center md:col-span-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl text-white mb-8">
          Plateforme de billetterie et de gestion d’évènements
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              onClick={() => router.push("/presentation/1")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Démarrer la Présentation <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
