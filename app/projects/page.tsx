"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import MediaModal from "@/components/MediaModal"
import Image from "next/image"
import { Play, Eye, Calendar, Users, Music } from "lucide-react"
import Navigation1 from "@/components/navigation1"

export default function ProjectsPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [filter, setFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
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
      id: 2,
      title: "Kanna Kuzhi Alagi",
      category: "direction",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Traditional Tamil song album capturing village life and cultural heritage with authentic storytelling",
      year: "2024",
      role: "Actor & Director",
      duration: "Music Album",
      cast: "Village Theme",
      status: "In Progress",
      producer: "JD Production"
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

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "writing", label: "Writing" },
    { id: "acting", label: "Acting" },
    { id: "direction", label: "Direction" },
  ]

  return (
    <>
      <Navigation1 />
      <main className={`min-h-screen pt-20 ${isVisible ? "vintage-page-enter" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden cinematic-film-grain">
          <div className="absolute inset-0 vintage-gradient opacity-95" />
          <div className="absolute inset-0 vintage-spotlight" />

          <div className="relative z-10 vintage-container text-center">
            <h1 className="font-cinzel vintage-text-6xl text-amber-100 mb-8 font-light tracking-widest vintage-text-shadow">
              My Projects
            </h1>
            <p className="vintage-text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              A showcase of my creative journey in Tamil cinema - from heartfelt stories to compelling characters
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 vintage-light-bg">
          <div className="vintage-container">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category.id ? "text-white" : "border-2 hover:text-white"
                  }`}
                  style={{
                    backgroundColor: filter === category.id ? "var(--vintage-burgundy)" : "transparent",
                    borderColor: filter === category.id ? "transparent" : "var(--vintage-burgundy)",
                    color: filter === category.id ? "white" : "var(--vintage-burgundy)",
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer vintage-elegant-hover"
                  onClick={() => setSelectedMedia(project)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-white border shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={project.src || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Play button overlay for videos */}
                      {project.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="text-white p-4 rounded-full transition-colors group-hover:scale-110"
                            style={{ backgroundColor: "var(--vintage-burgundy)" }}
                          >
                            {project.category === "direction" && project.title === "Kanna Kuzhi Alagi" ? (
                              <Music className="h-8 w-8" />
                            ) : (
                              <Play className="h-8 w-8" />
                            )}
                          </div>
                        </div>
                      )}

                      {/* Status Badge for In Progress Projects */}
                      {project.status === "In Progress" && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {project.status}
                          </div>
                        </div>
                      )}

                      {/* View icon for images */}
                      {project.type === "video" && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 text-white p-2 rounded-full">
                            <Eye className="h-5 w-5" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="inline-block text-white px-3 py-1 rounded-full text-sm font-semibold capitalize"
                          style={{ backgroundColor: "var(--vintage-burgundy)" }}
                        >
                          {project.category}
                        </span>
                        <span className="text-stone-600 text-sm">{project.year}</span>
                      </div>

                      <h3 className="font-cinzel text-xl mb-2 font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                        {project.title}
                      </h3>
                      <p className="text-stone-700 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="space-y-2 text-xs text-stone-600">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" style={{ color: "var(--vintage-burgundy)" }} />
                          <span>{project.role}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" style={{ color: "var(--vintage-burgundy)" }} />
                            <span>{project.duration}</span>
                          </div>
                          <span>{project.cast}</span>
                        </div>
                        {project.producer && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">Producer:</span>
                            <span>{project.producer}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden cinematic-film-grain">
          <div className="absolute inset-0 vintage-gradient opacity-95" />
          <div className="absolute inset-0 vintage-spotlight" />

          <div className="relative z-10 vintage-container text-center">
            <h2 className="font-cinzel vintage-text-5xl text-amber-100 mb-8 font-light tracking-widest vintage-text-shadow">
              Let's Create Together
            </h2>
            <p className="vintage-text-xl text-stone-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              I'm always looking for new opportunities to collaborate on meaningful Tamil cinema projects
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-stone-100 text-stone-800 px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Discuss Your Project
            </a>
          </div>
        </section>
      </main>

      {selectedMedia && (
        <MediaModal isOpen={!!selectedMedia} onClose={() => setSelectedMedia(null)} media={selectedMedia} />
      )}
    </>
  )
}