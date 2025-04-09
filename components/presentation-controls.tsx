"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Maximize, Minimize, Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"

interface PresentationControlsProps {
  currentSlide: number
  totalSlides: number
  autoPlay?: boolean
}

export function PresentationControls({ currentSlide, totalSlides, autoPlay = false }: PresentationControlsProps) {
  const router = useRouter()
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentSlide < totalSlides) {
          router.push(`/presentation/${currentSlide + 1}`)
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentSlide > 1) {
          router.push(`/presentation/${currentSlide - 1}`)
        }
      } else if (e.key === "Home") {
        router.push(`/presentation/1`)
      } else if (e.key === "End") {
        router.push(`/presentation/${totalSlides}`)
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      } else if (e.key === "Escape" && isFullscreen) {
        exitFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, totalSlides, router, isFullscreen])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        if (currentSlide < totalSlides) {
          router.push(`/presentation/${currentSlide + 1}`)
        } else {
          setIsPlaying(false)
        }
      }, 8000) // 8 seconds per slide
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentSlide, totalSlides, router])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      exitFullscreen()
    }
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const goToSlide = (slideNumber: number) => {
    router.push(`/presentation/${slideNumber}`)
  }

  const goToHome = () => {
    router.push("/")
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <div className="slide-indicator">
        Slide {currentSlide} / {totalSlides}
      </div>

      <div className="slide-progress" style={{ width: `${(currentSlide / totalSlides) * 100}%` }}></div>

      <div className="presentation-controls">
        <Button variant="ghost" size="icon" onClick={goToHome} className="text-white hover:bg-white/20">
          <Home className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => goToSlide(Math.max(1, currentSlide - 1))}
          disabled={currentSlide === 1}
          className="text-white hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => goToSlide(Math.min(totalSlides, currentSlide + 1))}
          disabled={currentSlide === totalSlides}
          className="text-white hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:bg-white/20">
          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
        </Button>
      </div>
    </>
  )
}
