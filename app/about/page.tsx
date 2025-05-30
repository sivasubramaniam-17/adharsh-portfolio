"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import { Award, Heart, Target, Users, Calendar } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navigation />
      <main className={`min-h-screen pt-20 ${isVisible ? "vintage-page-enter" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="vintage-section-padding vintage-light-bg">
          <div className="vintage-container">
            <div className="vintage-grid vintage-grid-2 items-center gap-16">
              <div className="vintage-fade-in">
                <h1
                  className="font-cinzel vintage-text-6xl mb-8 font-light tracking-wide"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  About Adarsh
                </h1>
                <div className="vintage-readable mb-8">
                  <p className="vintage-text-xl text-stone-700 leading-relaxed font-medium">
                    I am a passionate storyteller dedicated to creating authentic Tamil cinema that resonates with
                    audiences and honors our rich cultural heritage. My journey in filmmaking is driven by a deep love
                    for Tamil culture and a commitment to preserving our stories for future generations.
                  </p>
                </div>
                <div className="vintage-readable mb-8">
                  <p className="vintage-text-lg text-stone-600 leading-relaxed">
                    With comprehensive experience in writing, directing, and acting, I bring a holistic understanding of
                    filmmaking to every project. My goal is to collaborate with visionary directors and producers to
                    create meaningful cinema that entertains, inspires, and showcases the beauty of Tamil storytelling.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span
                    className="px-6 py-3 rounded-full font-bold vintage-text-lg shadow-lg text-white"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    Writer
                  </span>
                  <span
                    className="px-6 py-3 rounded-full font-bold vintage-text-lg shadow-lg text-white"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    Director
                  </span>
                  <span
                    className="px-6 py-3 rounded-full font-bold vintage-text-lg shadow-lg text-white"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    Actor
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl vintage-border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-18%20at%2021.20.30_47fc7da4.jpg-hEKfR2luMQHlwYtAYaXaYkQIctIRjw.jpeg"
                    alt="Adarsh - Professional headshot"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover max-h-[600px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="vintage-section-padding vintage-dark-bg">
          <div className="vintage-container">
            <h2 className="font-cinzel vintage-text-5xl text-center text-amber-100 mb-16 font-light tracking-wide vintage-text-shadow">
              My Core Values
            </h2>

            <div className="vintage-grid vintage-grid-2 lg:grid-cols-4">
              <div className="text-center vintage-card vintage-elegant-hover">
                <div className="vintage-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-cinzel vintage-text-xl mb-4 font-bold" style={{ color: "var(--vintage-burgundy)" }}>
                  Authenticity
                </h3>
                <p className="text-stone-600 vintage-text-lg leading-relaxed">
                  Creating genuine stories that reflect real Tamil experiences and cultural values
                </p>
              </div>

              <div className="text-center vintage-card vintage-elegant-hover">
                <div className="vintage-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Target className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-cinzel vintage-text-xl mb-4 font-bold" style={{ color: "var(--vintage-burgundy)" }}>
                  Excellence
                </h3>
                <p className="text-stone-600 vintage-text-lg leading-relaxed">
                  Striving for the highest quality in every aspect of filmmaking and storytelling
                </p>
              </div>

              <div className="text-center vintage-card vintage-elegant-hover">
                <div className="vintage-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-cinzel vintage-text-xl mb-4 font-bold" style={{ color: "var(--vintage-burgundy)" }}>
                  Collaboration
                </h3>
                <p className="text-stone-600 vintage-text-lg leading-relaxed">
                  Working together to bring out the best in every team member and project
                </p>
              </div>

              <div className="text-center vintage-card vintage-elegant-hover">
                <div className="vintage-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 vintage-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="font-cinzel vintage-text-xl mb-4 font-bold" style={{ color: "var(--vintage-burgundy)" }}>
                  Innovation
                </h3>
                <p className="text-stone-600 vintage-text-lg leading-relaxed">
                  Pushing creative boundaries while respecting traditional storytelling methods
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="vintage-section-padding vintage-light-bg">
          <div className="vintage-container">
            <h2
              className="font-cinzel vintage-text-5xl text-center mb-16 font-light tracking-wide"
              style={{ color: "var(--vintage-burgundy)" }}
            >
              My Creative Journey
            </h2>

            <div className="max-w-4xl mx-auto space-y-12">
              <div
                className="vintage-card vintage-elegant-hover"
                style={{ borderLeft: `4px solid var(--vintage-burgundy)` }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-3" style={{ color: "var(--vintage-burgundy)" }} />
                  <span className="font-bold vintage-text-lg" style={{ color: "var(--vintage-burgundy)" }}>
                    Early Beginnings
                  </span>
                </div>
                <h3
                  className="font-cinzel vintage-text-2xl mb-4 font-bold"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Discovering Tamil Cinema
                </h3>
                <div className="vintage-readable">
                  <p className="text-stone-700 vintage-text-lg leading-relaxed">
                    My passion for Tamil cinema began in childhood, watching classic films and being inspired by
                    legendary directors and actors who shaped our industry. This early exposure instilled in me a deep
                    appreciation for the art of storytelling and the power of cinema to connect with audiences.
                  </p>
                </div>
              </div>

              <div
                className="vintage-card vintage-elegant-hover"
                style={{ borderLeft: `4px solid var(--vintage-burgundy)` }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-3" style={{ color: "var(--vintage-burgundy)" }} />
                  <span className="font-bold vintage-text-lg" style={{ color: "var(--vintage-burgundy)" }}>
                    Training & Development
                  </span>
                </div>
                <h3
                  className="font-cinzel vintage-text-2xl mb-4 font-bold"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Honing My Craft
                </h3>
                <div className="vintage-readable">
                  <p className="text-stone-700 vintage-text-lg leading-relaxed">
                    I dedicated myself to formal training in acting, participated in writing workshops, and gained
                    hands-on experience in various film projects. Learning from industry veterans and collaborating with
                    fellow creatives helped me develop a comprehensive understanding of the filmmaking process.
                  </p>
                </div>
              </div>

              <div
                className="vintage-card vintage-elegant-hover"
                style={{ borderLeft: `4px solid var(--vintage-burgundy)` }}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-3" style={{ color: "var(--vintage-burgundy)" }} />
                  <span className="font-bold vintage-text-lg" style={{ color: "var(--vintage-burgundy)" }}>
                    Current Focus
                  </span>
                </div>
                <h3
                  className="font-cinzel vintage-text-2xl mb-4 font-bold"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Creating Meaningful Content
                </h3>
                <div className="vintage-readable">
                  <p className="text-stone-700 vintage-text-lg leading-relaxed">
                    Today, I'm focused on creating meaningful content that bridges traditional Tamil storytelling with
                    contemporary filmmaking techniques. I'm actively seeking opportunities to collaborate with
                    established directors and producers who share my vision for authentic, impactful Tamil cinema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="vintage-section-padding vintage-dark-bg">
          <div className="vintage-container text-center">
            <h2 className="font-cinzel vintage-text-5xl text-amber-100 mb-8 font-light tracking-wide vintage-text-shadow">
              Let's Connect
            </h2>
            <div className="vintage-readable-center mb-12">
              <p className="vintage-text-xl text-stone-300 font-light leading-relaxed">
                I'm always excited to discuss new projects and opportunities. Whether you're a director, producer, or
                fellow creative, I'd love to explore how we can work together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto mt-8">
              <Link href="/contact" className="vintage-button w-full sm:w-auto">
                Get In Touch
              </Link>
              <Link href="/projects" className="vintage-button-outline w-full sm:w-auto text-white">
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
