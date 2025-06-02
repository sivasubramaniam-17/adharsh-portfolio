"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
} from "lucide-react";
import Navigation1 from "@/components/navigation1";
import Navigation from "@/components/Navigation";

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight =
          containerRef.current.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "image1.jpg",
      title: "Professional Portrait",
      description: "Character depth and versatility showcase",
    },
    {
      id: 2,
      type: "video",
      src: "vide02.mp4",
      poster:
        "image2.jpg",
      title: "Kamal Hassan Tribute Reel",
      description: "Recreating iconic scenes",
    },
    {
      id: 3,
      type: "image",
      src: "image3.jpg",
      title: "Behind the Scenes - Vindhu",
      description: "Dubbing preparation",
    },
    {
      id: 4,
      type: "video",
      src: "video3.mp4",
      poster:"thumbnail1.png",
      title: "Dance Reel",
      description: "Dance performance showcase",
    },
    {
      id: 5,
      type: "image",
      src: "image4.jpg",
      title: "Photoshoot Session",
      description: "Creative process in action",
    },
    {
      id: 6,
      type: "video",
      src: "video4.mp4",
      poster:
        "thumbnail2.png",
      title: "Dance Reel",
      description: "Dance performance showcase"
    },
    {
      id: 7,
      type: "image",
      src: "image5.jpg",
      title: "On Set - Kana",
      description: "Performance preparation",
    },
    {
      id: 8,
      type: "video",
      src: "video5.mp4",
      poster:"image7.jpg",
      title: "Character Study Reel",
      description: "Exploring different personas",
    },
    {
      id: 9,
      type: "image",
      src: "image8.jpg",
      title: "Location Scouting",
      description: "Finding perfect cinematic spaces",
    },
    {
      id: 10,
      type: "video",
      src: "video6.mp4",
      poster:
        "thumbnail3.png",
      title: "Montage song reel",
      description: "montage song reel showcasing various scenes",
    },
    {
      id: 11,
      type: "image",
      src: "image9.jpg",
      title: "Costume Fitting",
      description: "Character transformation process",
    },
    {
      id: 12,
      type: "image",
      src: "image11.jpg",
  
      title: "Improvisation Reel",
      description: "Spontaneous acting moments",
    },
  ];

  const openViewer = (item: any, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    document.body.style.overflow = "unset";
  };

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const prevItem = () => {
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") closeViewer();
        if (e.key === "ArrowRight") nextItem();
        if (e.key === "ArrowLeft") prevItem();
        if (e.key === " ") {
          e.preventDefault();
          if (selectedItem?.type === "video") togglePlay();
        }
        if (e.key === "m") toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedItem, currentIndex, isPlaying]);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;600&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }

        .vintage-page-enter {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .vintage-fade-in {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen vintage-center overflow-hidden cinematic-film-grain">
        <div className="absolute inset-0 vintage-gradient opacity-95" />
        <div className="absolute inset-0 vintage-spotlight" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="vintage-fade-in">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl text-amber-100 mb-8 font-light tracking-widest"
              style={{
                fontFamily: "Cinzel, serif",
                textShadow:
                  "0 0 10px rgba(217, 119, 6, 0.5), 0 0 20px rgba(217, 119, 6, 0.3)",
                transform: `translateY(${scrollProgress * 0.2}px)`,
              }}
            >
              Visual Journey
            </h1>
            <p
              className="text-lg md:text-xl lg:text-2xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollProgress * 0.1}px)`,
              }}
            >
              Explore my creative world through photos and reels that capture
              the essence of Tamil cinema storytelling
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{
            opacity: 1 - scrollProgress / 20,
            display: scrollProgress > 15 ? "none" : "block",
          }}
        >
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section
        className="py-20 bg-white relative"
        ref={galleryRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Floating Light Effects */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
            isHovering ? "opacity-30" : "opacity-10"
          }`}
        >
          <div
            className="absolute w-64 h-64 rounded-full bg-amber-400 blur-3xl opacity-20"
            style={{
              top: "20%",
              left: "10%",
              animation: "float 15s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-96 h-96 rounded-full bg-red-800 blur-3xl opacity-20"
            style={{
              bottom: "15%",
              right: "10%",
              animation: "float 18s ease-in-out infinite 3s",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2
            className="font-cinzel vintage-text-5xl text-center mb-16 font-light tracking-wide"
            style={{ color: "var(--vintage-burgundy)" }}
          >
            Cinematic Moments
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                onClick={() => openViewer(item, index)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white/5 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/50 transition-all duration-500">
                  <div className="relative aspect-[3/4]">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="relative h-full">
                        <img
                          src={item.poster}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                            <Play className="h-8 w-8 text-red-800" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3
                          className="text-white text-lg font-bold mb-1"
                          style={{ fontFamily: "Cinzel, serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Label */}
            
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Modal Viewer */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeViewer}
            className="absolute top-4 right-4 z-30 bg-red-800/80 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-30 text-white font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {currentIndex + 1} / {galleryItems.length}
          </div>

          {/* Main Content Container */}
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={selectedItem.src}
                  poster={selectedItem.poster}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  controls={false}
                />

                {/* Video Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-amber-400 transition-colors duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-amber-400 transition-colors duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="h-6 w-6" />
                    ) : (
                      <Volume2 className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevItem}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-600/80 hover:bg-amber-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group shadow-lg"
          >
            <ChevronLeft className="h-8 w-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-600/80 hover:bg-amber-600 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group shadow-lg"
          >
            <ChevronRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center transform transition-all duration-500 hover:bg-black/60">
              <h3
                className="text-white text-xl md:text-2xl font-bold mb-2"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {selectedItem.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                {selectedItem.description}
              </p>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedItem(galleryItems[index]);
                  setIsPlaying(false);
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? "bg-amber-400 w-6" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
