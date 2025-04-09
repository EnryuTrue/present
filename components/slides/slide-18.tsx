"use client"

import { motion } from "framer-motion"
import { Route, LayoutDashboard, User, ShoppingCart, Building2, LogIn, FileText, Map, Settings, Search } from "lucide-react"

export default function Slide18() {
  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Variants for item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  // Route categories with their respective route components
  const routeCategories = [
    {
      name: "Routes d'Authentification",
      icon: LogIn,
      color: "bg-blue-600",
      routes: [
        { path: "/connexion", element: "<Connexion />" },
        { path: "/inscription", element: "<Inscription />" },
        { path: "/verification-2fa", element: "<Verification2FA />" },
        { path: "/reinitialiser-mot-de-passe", element: "<ReinitialiserMotDePasse />" },
      ],
    },
    {
      name: "Navigation Principale",
      icon: Route,
      color: "bg-purple-600",
      routes: [
        { path: "/evenements", element: "<ParcoursEvenements />" },
        { path: "/evenements/:eventId", element: "<PageEvenement />" },
        { path: "/conventions/:conventionId", element: "<DetailsConvention />" },
      ],
    },
    {
      name: "Profil Utilisateur",
      icon: User,
      color: "bg-green-600",
      routes: [
        { path: "/profil", element: "<PageProfil />" },
        { path: "/profil/billets", element: "<MesBillets />" },
        { path: "/profil/favoris", element: "<PageFavoris />" },
      ],
    },
    {
      name: "Processus de Paiement",
      icon: ShoppingCart,
      color: "bg-amber-600",
      routes: [
        { path: "/panier", element: "<PagePanier />" },
        { path: "/paiement", element: "<RecapitulatifCommande />" },
        { path: "/paiement/reglement", element: "<PagePaiement />" },
      ],
    },
    {
      name: "Section Organisation",
      icon: Building2,
      color: "bg-red-600",
      routes: [
        { path: "/organisation/tableau-de-bord", element: "<TableauDeBordOrg />" },
        { path: "/organisation/evenements", element: "<ListeEvenementsOrg />" },
        { path: "/organisation/analytique", element: "<AnalytiqueOrg />" },
      ],
    },
    {
      name: "Fonctionnalités Spéciales",
      icon: Map,
      color: "bg-teal-600",
      routes: [
        { path: "/personnalisation-stand", element: "<PersonnalisationStand />" },
        { path: "/carte-stands", element: "<CarteStands />" },
        { path: "/scanner", element: "<ScannerQR />" },
      ],
    },
  ]

  return (
    <div className="slide bg-gradient-to-br from-black via-purple-950 to-black h-screen w-screen overflow-hidden relative p-6">
      <motion.div
        className="w-full h-full flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold text-center mb-4 text-white" 
          variants={itemVariants}
        >
          React Router <span className="text-purple-400">Configuration des Routes</span>
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-1"
          variants={containerVariants}
        >
          {routeCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 flex flex-col"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
            >
              <div className="flex items-center mb-2">
                <div className={`${category.color} p-1.5 rounded-md mr-2`}>
                  <category.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-1.5 flex-1 text-[0.7rem]">
                {category.routes.map((route, routeIndex) => (
                  <motion.div
                    key={routeIndex}
                    className="text-gray-300 bg-black/30 p-1.5 rounded border border-gray-800"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.05) + (routeIndex * 0.02) }}
                    whileHover={{ x: 5, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                  >
                    <code>{`<Route path="${route.path}" element={${route.element}} />`}</code>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-2 text-center text-xs text-gray-400"
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          <p>Implémentation React Router v6 avec routes protégées et imbriquées</p>
        </motion.div>
      </motion.div>
    </div>
  )
}