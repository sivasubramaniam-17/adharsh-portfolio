"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import MediaModal from "@/components/MediaModal"
import Image from "next/image"
import { Play, Eye, Calendar, Users } from "lucide-react"

export default function ProjectsPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Kadhal Kavithai",
      category: "writing",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "A romantic drama exploring modern relationships in Tamil society",
      year: "2024",
      role: "Writer & Director",
      duration: "15 min",
      cast: "4 actors",
    },
    {
      id: 2,
      title: "Veeran",
      category: "acting",
      type: "image" as const,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-18%20at%2021.20.12_0c9c2732.jpg-l7bhjvzqlJuIUP0nLhgogF6wKKplNK.jpeg",
      description: "Character study of a village hero fighting for justice",
      year: "2023",
      role: "Lead Actor",
      duration: "20 min",
      cast: "6 actors",
    },
    {
      id: 3,
      title: "Amma",
      category: "directing",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Emotional journey of a mother-son relationship",
      year: "2024",
      role: "Director",
      duration: "12 min",
      cast: "3 actors",
    },
    {
      id: 4,
      title: "Natpu",
      category: "writing",
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Story of friendship that transcends social boundaries",
      year: "2023",
      role: "Writer",
      duration: "18 min",
      cast: "5 actors",
    },
    {
      id: 5,
      title: "Thalaivar",
      category: "acting",
      type: "video" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Political drama showcasing leadership and sacrifice",
      year: "2024",
      role: "Supporting Actor",
      duration: "25 min",
      cast: "8 actors",
    },
    {
      id: 6,
      title: "Kalam",
      category: "directing",
      type: "image" as const,
      src: "/placeholder.svg?height=400&width=600",
      description: "Time-travel narrative connecting past and present",
      year: "2023",
      role: "Director & Writer",
      duration: "22 min",
      cast: "7 actors",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "writing", label: "Writing" },
    { id: "directing", label: "Directing" },
    { id: "acting", label: "Acting" },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-cinzel text-5xl md:text-6xl text-amber-400 mb-8">My Projects</h1>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              A showcase of my creative journey in Tamil cinema - from heartfelt stories to compelling characters
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? "bg-amber-400 text-black"
                      : "bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedMedia(project)}>
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 hover:scale-105">
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
                          <div className="bg-amber-400/80 hover:bg-amber-400 text-black p-4 rounded-full transition-colors group-hover:scale-110">
                            <Play className="h-8 w-8" />
                          </div>
                        </div>
                      )}

                      {/* View icon for images */}
                      {project.type === "image" && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 text-white p-2 rounded-full">
                            <Eye className="h-5 w-5" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-semibold capitalize">
                          {project.category}
                        </span>
                        <span className="text-amber-200 text-sm">{project.year}</span>
                      </div>

                      <h3 className="font-cinzel text-xl text-amber-400 mb-2">{project.title}</h3>
                      <p className="text-amber-200 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="space-y-2 text-xs text-amber-300">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{project.role}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.duration}</span>
                          </div>
                          <span>{project.cast}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-cinzel text-4xl md:text-5xl text-amber-400 mb-8">Let's Create Together</h2>
            <p className="text-xl text-amber-200 mb-12 leading-relaxed">
              I'm always looking for new opportunities to collaborate on meaningful Tamil cinema projects
            </p>
            <a
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-black px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
