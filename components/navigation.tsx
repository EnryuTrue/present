"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Info, Building2, Target, Code, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Introduction", path: "/introduction", icon: Info },
  { name: "Enterprises", path: "/enterprises", icon: Building2 },
  { name: "Objectives", path: "/objectives", icon: Target },
  { name: "Technologies", path: "/technologies", icon: Code },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm border-purple-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Desktop navigation */}
      <div className="fixed top-0 left-0 right-0 z-40 hidden md:block">
        <div className="flex justify-center py-4 bg-white/80 backdrop-blur-sm border-b border-purple-100">
          <nav className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon

              return (
                <Link href={item.path} key={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "relative px-4 py-2",
                      isActive ? "bg-primary text-white" : "text-gray-700 hover:text-primary",
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        layoutId="navbar-indicator"
                      />
                    )}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <div className="absolute inset-0 bg-white">
          <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon

              return (
                <Link href={item.path} key={item.path} onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "relative w-4/5 mx-auto justify-start py-6",
                      isActive ? "bg-primary text-white" : "text-gray-700",
                    )}
                  >
                    <Icon className="mr-4 h-5 w-5" />
                    <span className="text-lg">{item.name}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
}
