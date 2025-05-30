"use client"

import { useState, useEffect } from "react"
import { Film } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 600)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => {
            setLoading(false)
            onLoadingComplete?.()
          }, 1000)
          return 100
        }
        return prev + 0.7
      })
    }, 25)

    return () => {
      clearTimeout(contentTimer)
      clearInterval(progressTimer)
    }
  }, [onLoadingComplete])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 vintage-loading vintage-center">
      <div className="text-center vintage-container max-w-md">
        {/* Vintage Cinema Icon */}
        <div
          className={`mb-12 transition-all duration-1000 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative vintage-center">
            <Film className="h-20 w-20 text-amber-400 opacity-90" />
            <div className="absolute inset-0 bg-amber-400/10 blur-2xl rounded-full scale-150"></div>
          </div>
        </div>

        {/* Professional Title */}
        <div
          className={`mb-10 transition-all duration-1000 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="font-cinzel vintage-text-5xl text-amber-100 font-light tracking-widest mb-4 vintage-typewriter">
            Adarsh
          </h1>
          <p className="vintage-text-xl text-stone-300 font-light tracking-wide">Writer • Director • Actor</p>
        </div>

        {/* Vintage Progress Bar */}
        <div
          className={`mb-8 transition-all duration-1000 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-full max-w-sm mx-auto">
            <div className="h-0.5 bg-stone-700 rounded-full overflow-hidden vintage-loading-shimmer">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 transition-all duration-300 ease-out vintage-loading-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Loading Status */}
        <div
          className={`transition-all duration-1000 delay-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-stone-400 vintage-text-lg font-light tracking-wide">
            {progress < 100 ? "Preparing Portfolio..." : "Welcome"}
          </p>
        </div>
      </div>
    </div>
  )
}
