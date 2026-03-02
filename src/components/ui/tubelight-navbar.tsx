"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Flag, Lightbulb, TrendingUp, Globe, Users, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export const navItems = [
  { name: "YieldWalker", url: "#hero", icon: Home },
  { name: "Challenge", url: "#challenge", icon: Flag },
  { name: "Solution", url: "#solution", icon: Lightbulb },
  { name: "ROI", url: "#roi", icon: TrendingUp },
  { name: "Market", url: "#market", icon: Globe },
  { name: "Founder", url: "#founder", icon: Users },
  { name: "Contact", url: "#contact", icon: Mail },
]

export function TubelightNavbar() {
  const [activeSegment, setActiveSegment] = useState("YieldWalker")
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar Navbar no começo do Hero (Section 1)
      if (window.scrollY < window.innerHeight * 0.8) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      // Scroll Spy Logic
      const sections = navItems.map(item => item.url.replace("#", ""))
      let currentActive = "YieldWalker"

      // Checa de baixo para cima, a primeira visível ganha
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i]
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // A Section é considerada ativa se o seu topo já passou ou está entrando no terço superior da tela
          if (rect.top <= window.innerHeight * 0.4) {
            const activeItem = navItems.find(item => item.url === `#${id}`)
            if (activeItem) {
              currentActive = activeItem.name
              break
            }
          }
        }
      }

      // Check footer specifically, if it's very close to bottom
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 100) {
        currentActive = "Contact"
      }

      setActiveSegment(currentActive)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] mt-6 w-full max-w-[90vw] md:max-w-max flex justify-center"
        >
          <div className="flex items-center gap-1 md:gap-3 bg-[#0F232E]/70 border border-[#0F232E]/20 backdrop-blur-md py-1 px-4 md:px-1 rounded-full shadow-lg mx-4 md:mx-0">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSegment === item.name
              const isHome = item.name === 'YieldWalker';

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.url)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className={cn(
                    "relative cursor-pointer text-xs md:text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-all duration-300",
                    "text-[#D8D8D5] hover:text-[#D8D8D5]/80",
                    isActive && "text-white",
                    isHome && "hidden md:inline-block"
                  )}
                  style={{ fontFamily: "'Google Sans Flex', system-ui, sans-serif" }}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} className={isActive ? "text-[#FF5532]" : "text-[#D8D8D5]"} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-[#FF5532]/10 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FF5532] rounded-t-full">
                        <div className="absolute w-12 h-6 bg-[#FF5532]/30 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-[#FF5532]/30 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-[#FF5532]/30 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
