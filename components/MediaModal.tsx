"use client"

import { useState, useEffect } from "react"
import { X, Play } from "lucide-react"
import Image from "next/image"

interface MediaModalProps {
  isOpen: boolean
  onClose: () => void
  media: {
    type: "image" | "video"
    src: string
    title: string
    description?: string
  }
}

export default function MediaModal({ isOpen, onClose, media }: MediaModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm vintage-center p-4">
      <div className="relative max-w-6xl w-full max-h-[95vh] vintage-glass rounded-2xl overflow-hidden vintage-border shadow-2xl vintage-page-enter">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {media.type === "image" ? (
            <div className="relative">
              <Image
                src={media.src || "/placeholder.svg"}
                alt={media.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-xl max-h-[70vh] object-contain shadow-2xl"
              />
            </div>
          ) : (
            <div className="relative">
              <video
                src={media.src}
                className="w-full h-auto rounded-xl max-h-[70vh] shadow-2xl"
                controls
                autoPlay={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl text-white"
                  style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  aria-label="Play video"
                >
                  <Play className="h-10 w-10" />
                </button>
              )}
            </div>
          )}

          <div className="mt-8 text-center">
            <h3
              className="font-cinzel vintage-text-3xl mb-4 font-medium vintage-text-shadow"
              style={{ color: "var(--vintage-burgundy)" }}
            >
              {media.title}
            </h3>
            {media.description && (
              <div className="vintage-readable-center">
                <p className="text-stone-600 vintage-text-xl leading-relaxed">{media.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
