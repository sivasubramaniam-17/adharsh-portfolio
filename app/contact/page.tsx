"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import { Mail, Phone, MapPin, Send, Film, Instagram, Youtube } from "lucide-react"
import Navigation1 from "@/components/navigation1"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navigation1 />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-amber-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-cinzel text-5xl md:text-6xl text-amber-400 mb-8">Let's Connect</h1>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'm here to collaborate on your next Tamil cinema project
            </p>
          </div>
        </section>

        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-cinzel text-3xl text-amber-400 mb-8">Get in Touch</h2>
                <p className="text-amber-200 text-lg mb-12 leading-relaxed">
                  I'm always excited to discuss new projects and opportunities in Tamil cinema. Whether you're a
                  director, producer, or fellow creative, let's explore how we can work together.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-400 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-amber-400 font-semibold">Email</h3>
                      <p className="text-amber-200">contact@tamilcinema.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-400 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-amber-400 font-semibold">Phone</h3>
                      <p className="text-amber-200">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-400 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-amber-400 font-semibold">Location</h3>
                      <p className="text-amber-200">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-cinzel text-xl text-amber-400 mb-6">Follow My Journey</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-full transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-full transition-colors"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-full transition-colors"
                    >
                      <Film className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-8 rounded-lg border border-amber-400/30">
                <h2 className="font-cinzel text-3xl text-amber-400 mb-8">Start a Conversation</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-amber-200 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-400/50 rounded-lg text-white placeholder-amber-300/50 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-amber-200 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-400/50 rounded-lg text-white placeholder-amber-300/50 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-amber-200 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-400/50 rounded-lg text-white placeholder-amber-300/50 focus:border-amber-400 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-amber-200 font-semibold mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-400/50 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="feature-film">Feature Film</option>
                      <option value="short-film">Short Film</option>
                      <option value="web-series">Web Series</option>
                      <option value="commercial">Commercial</option>
                      <option value="documentary">Documentary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-amber-200 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-amber-400/50 rounded-lg text-white placeholder-amber-300/50 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project and how I can contribute..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-black py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-amber-900/10 to-orange-900/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-cinzel text-4xl md:text-5xl text-amber-400 mb-8">Ready to Create Magic?</h2>
            <p className="text-xl text-amber-200 mb-12 leading-relaxed">
              Every great film starts with a conversation. Let's discuss how we can bring your vision to life with
              authentic Tamil storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:contact@tamilcinema.com"
                className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
