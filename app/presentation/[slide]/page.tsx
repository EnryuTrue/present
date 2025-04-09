"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { PresentationControls } from "@/components/presentation-controls"
import Slide0 from "@/components/slides/slide-0"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide5 from "@/components/slides/slide-5"
import Slide6 from "@/components/slides/slide-6"
import Slide7 from "@/components/slides/slide-7"
import Slide8 from "@/components/slides/slide-8"
import Slide9 from "@/components/slides/slide-9"
import Slide10 from "@/components/slides/slide-10"
import Slide11 from "@/components/slides/slide-11"
import Slide12 from "@/components/slides/slide-12"
import Slide13 from "@/components/slides/slide-13"
import Slide14 from "@/components/slides/slide-14"
import Slide15 from "@/components/slides/slide-15"
const TOTAL_SLIDES = 16

export default function SlidePage({ params }: { params: { slide: string } }) {
  const router = useRouter()
  const slideNumber = Number.parseInt(params.slide)

  // Validate slide number
  useEffect(() => {
    if (isNaN(slideNumber) || slideNumber < 1 || slideNumber > TOTAL_SLIDES) {
      router.push("/presentation/1")
    }
  }, [slideNumber, router])

  // Render the appropriate slide based on the slide number
  const renderSlide = () => {
    switch (slideNumber) {
      case 1:
        return <Slide12 />
      case 2:
        return <Slide0 />
      case 3:
        return <Slide1 />
      case 4:
        return <Slide2 />
      case 5:
        return <Slide3 />
      case 6:
        return <Slide4 />
      case 7:
        return <Slide5 />
      case 8:
        return <Slide14 />
      case 9:
        return <Slide7 />
      case 10:
        return <Slide6 />
      case 11:
        return <Slide8 />
      case 12:
        return <Slide15 />
      case 13:
        return <Slide9 />
      case 14:
        return <Slide10 />
      case 15:
        return <Slide11 />
      case 16:
        return <Slide13 />
      default:
        return <Slide0 />
    }
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideNumber}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 py-4 group">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PresentationControls currentSlide={slideNumber} totalSlides={TOTAL_SLIDES} />
        </div>
      </div>
    </div>
  )
}
