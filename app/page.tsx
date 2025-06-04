"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Film, Camera, Edit3, Award, Users, Clock, Play } from "lucide-react"
import Navigation from "@/components/Navigation"
import LoadingScreen from "@/components/LoadingScreen"
import MediaModal from "@/components/MediaModal"

export default function HomePage() {
  const [showContent, setShowContent] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<any>(null)

  const handleLoadingComplete = () => {
    setShowContent(true)
  }

  const featuredWorks = [
     {
      id: 1,
      title: "Vindhu",
      category: "writing",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "A short film exploring emotional connections between a father and son",
      year: "2024",
      role: "Writer & Actor",
      duration: "15 min",
      cast: "4 actors",
    },
    {
      id: 3,
      title: "Maanavan Manathu Vaithal",
      category: "writing",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Emotional journey of a student's aspirations and challenges",
      year: "2024",
      role: "Writer",
      duration: "7 min",
      cast: "3 actors",
    },
    {
      id: 4,
      title: "Kana",
      category: "acting",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Story of dreams and reality that transcends social boundaries",
      year: "2023",
      role: "Actor",
      duration: "18 min",
      cast: "5 actors",
    },
  ]

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <Navigation />

      {showContent && (
        <main className="min-h-screen vintage-page-enter">
          {/* Hero Section */}
          <section className="relative min-h-screen vintage-center overflow-hidden cinematic-film-grain">
            <div className="absolute inset-0 vintage-gradient opacity-95" />
            <div className="absolute inset-0 vintage-spotlight" />

            <div className="relative z-10 text-center vintage-container">
              <div className="vintage-fade-in">
                <h1 className="font-cinzel vintage-text-7xl font-light text-amber-100 mb-6 vintage-text-shadow tracking-widest">
                  ADHARSH
                </h1>
                <h2 className="vintage-text-3xl text-stone-200 mb-8 font-light tracking-wide vintage-text-shadow">
                  Writer • Director • Actor
                </h2>
                <div className="vintage-readable-center mb-16">
                  <p className="vintage-text-xl text-stone-300 font-light leading-relaxed">
                    Crafting compelling stories that resonate with the heart of Tamil culture and cinema. Seeking
                    opportunities to collaborate with visionary directors and producers to create meaningful cinema that
                    entertains, inspires, and preserves our rich cultural heritage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto mt-8">
                  <Link href="/projects" className="vintage-button w-full sm:w-auto">
                    View My Work
                  </Link>
                  <Link href="/gallery" className="vintage-button-outline w-full sm:w-auto text-white">
                    View My Gallery
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-amber-400 opacity-70" />
            </div>
          </section>

          {/* Skills Section */}
          <section className="vintage-section-padding vintage-light-bg">
            <div className="vintage-container">
              <h2
                className="font-cinzel vintage-text-5xl text-center mb-16 font-light tracking-wide"
                style={{ color: "var(--vintage-burgundy)" }}
              >
                Creative Expertise
              </h2>

              <div className="vintage-grid vintage-grid-3">
                <div className="vintage-card text-center vintage-elegant-hover">
                  <div className="vintage-center mb-6">
                    <div
                      className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Edit3 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3
                    className="font-cinzel vintage-text-2xl mb-4 font-medium"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    Writing
                  </h3>
                  <div className="vintage-readable">
                    <p className="vintage-text-lg text-stone-600 leading-relaxed">
                      Crafting authentic Tamil narratives that capture the essence of our culture and traditions,
                      creating stories that resonate with audiences and honor our cinematic heritage.
                    </p>
                  </div>
                </div>

                <div className="vintage-card text-center vintage-elegant-hover">
                  <div className="vintage-center mb-6">
                    <div
                      className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Film className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3
                    className="font-cinzel vintage-text-2xl mb-4 font-medium"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    Directing
                  </h3>
                  <div className="vintage-readable">
                    <p className="vintage-text-lg text-stone-600 leading-relaxed">
                      Bringing stories to life with visual storytelling that honors Tamil cinema traditions while
                      embracing modern filmmaking techniques and innovative narrative approaches.
                    </p>
                  </div>
                </div>

                <div className="vintage-card text-center vintage-elegant-hover">
                  <div className="vintage-center mb-6">
                    <div
                      className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Camera className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3
                    className="font-cinzel vintage-text-2xl mb-4 font-medium"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    Acting
                  </h3>
                  <div className="vintage-readable">
                    <p className="vintage-text-lg text-stone-600 leading-relaxed">
                      Embodying characters with depth and authenticity that resonates with Tamil audiences, bringing
                      emotional truth and cultural nuance to every performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Works */}
          <section className="vintage-section-padding vintage-dark-bg">
            <div className="vintage-container">
              <h2 className="font-cinzel vintage-text-5xl text-center text-amber-100 mb-16 font-light tracking-wide vintage-text-shadow">
                Featured Works
              </h2>

              <div className="vintage-grid vintage-grid-3">
                {featuredWorks.map((work, index) => (
                  <div
                    key={work.id}
                    className="group cursor-pointer vintage-elegant-hover"
                    onClick={() => setSelectedMedia(work)}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl vintage-glass vintage-border shadow-2xl">
                      <div className="relative">
                        <Image
                          src={work.src || "/placeholder.svg"}
                          alt={work.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {work.type === "video" && (
                          <div className="absolute inset-0 vintage-center">
                            <div
                              className="p-4 rounded-full transition-all duration-300 group-hover:scale-110 shadow-lg"
                              style={{ backgroundColor: "var(--vintage-burgundy)" }}
                            >
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide text-white"
                            style={{ backgroundColor: "var(--vintage-burgundy)" }}
                          >
                            {work.category}
                          </span>
                        </div>
                        <h3 className="font-cinzel vintage-text-2xl text-stone-800 mb-3 font-medium">{work.title}</h3>
                        <p className="text-stone-600 vintage-text-lg leading-relaxed">{work.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="vintage-section-padding vintage-light-bg">
            <div className="vintage-container">
              <div className="vintage-grid vintage-grid-3 text-center">
                <div className="vintage-card vintage-elegant-hover">
                  <Award
                    className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                  <h3
                    className="font-cinzel vintage-text-4xl mb-3 font-light"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    5+
                  </h3>
                  <p className="text-stone-600 vintage-text-xl font-medium">Projects Completed</p>
                </div>

                <div className="vintage-card vintage-elegant-hover">
                  <Users
                    className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                  <h3
                    className="font-cinzel vintage-text-4xl mb-3 font-light"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    10+
                  </h3>
                  <p className="text-stone-600 vintage-text-xl font-medium">Collaborations</p>
                </div>

                <div className="vintage-card vintage-elegant-hover">
                  <Clock
                    className="h-16 w-16 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                  <h3
                    className="font-cinzel vintage-text-4xl mb-3 font-light"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    3+
                  </h3>
                  <p className="text-stone-600 vintage-text-xl font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="vintage-section-padding vintage-dark-bg">
            <div className="vintage-container text-center">
              <h2 className="font-cinzel vintage-text-5xl text-amber-100 mb-8 font-light tracking-wide vintage-text-shadow">
                Ready to Create Something Amazing?
              </h2>
              <div className="vintage-readable-center mb-12">
                <p className="vintage-text-xl text-stone-300 font-light leading-relaxed">
                  I'm passionate about collaborating with visionary directors and producers to bring authentic Tamil
                  stories to life. Let's work together to create cinema that entertains, inspires, and preserves our
                  rich cultural heritage for future generations.
                </p>
              </div>
              <Link href="/contact" className="vintage-button mt-8">
                Start a Conversation
              </Link>
            </div>
          </section>
        </main>
      )}

      {selectedMedia && (
        <MediaModal isOpen={!!selectedMedia} onClose={() => setSelectedMedia(null)} media={selectedMedia} />
      )}
    </>
  )
}
