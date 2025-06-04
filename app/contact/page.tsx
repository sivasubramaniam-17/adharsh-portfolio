"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import { Mail, Phone, MapPin, Send, Film, Instagram, Youtube, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import Navigation1 from "@/components/navigation1"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    setIsVisible(true)
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY") // Replace with your EmailJS public key
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // EmailJS service configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        message: formData.message,
        to_email: "dsadharsh12@gmail.com",
      }

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
      )

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Reset status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

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
              Let's Connect
            </h1>
            <p className="vintage-text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'm here to collaborate on your next Tamil cinema project
            </p>
          </div>
        </section>

        <section className="py-20 vintage-light-bg">
          <div className="vintage-container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2
                  className="font-cinzel vintage-text-3xl mb-8 font-medium"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Get in Touch
                </h2>
                <p className="text-stone-700 text-lg mb-12 leading-relaxed">
                  I'm always excited to discuss new projects and opportunities in Tamil cinema. Whether you're a
                  director, producer, or fellow creative, let's explore how we can work together.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full shadow-lg" style={{ backgroundColor: "var(--vintage-burgundy)" }}>
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                        Email
                      </h3>
                      <p className="text-stone-700">dsadharsh12@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full shadow-lg" style={{ backgroundColor: "var(--vintage-burgundy)" }}>
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                        Phone
                      </h3>
                      <p className="text-stone-700">+91 9487358084</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full shadow-lg" style={{ backgroundColor: "var(--vintage-burgundy)" }}>
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                        Location
                      </h3>
                      <p className="text-stone-700">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-cinzel text-xl mb-6 font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                    Follow My Journey
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Film className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="vintage-card">
                <h2 className="font-cinzel text-3xl mb-8 font-medium" style={{ color: "var(--vintage-burgundy)" }}>
                  Start a Conversation
                </h2>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800">Thank you for your message! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800">
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--vintage-border)",
                        "--tw-ring-color": "var(--vintage-burgundy)",
                      } as React.CSSProperties}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-stone-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--vintage-border)",
                        "--tw-ring-color": "var(--vintage-burgundy)",
                      } as React.CSSProperties}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-stone-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--vintage-border)",
                        "--tw-ring-color": "var(--vintage-burgundy)",
                      } as React.CSSProperties}
                      placeholder="+91 9487358084"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-stone-700 font-semibold mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border rounded-lg text-stone-800 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--vintage-border)",
                        "--tw-ring-color": "var(--vintage-burgundy)",
                      } as React.CSSProperties}
                    >
                      <option value="">Select project type</option>
                      <option value="feature-film">Feature Film</option>
                      <option value="short-film">Short Film</option>
                      <option value="web-series">Web Series</option>
                      <option value="commercial">Commercial</option>
                      <option value="documentary">Documentary</option>
                      <option value="acting-opportunity">Acting Opportunity</option>
                      <option value="writing-collaboration">Writing Collaboration</option>
                      <option value="location-management">Location Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-stone-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white border rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "var(--vintage-border)",
                        "--tw-ring-color": "var(--vintage-burgundy)",
                      } as React.CSSProperties}
                      placeholder="Tell me about your project and how I can contribute..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden cinematic-film-grain">
          <div className="absolute inset-0 vintage-gradient opacity-95" />
          <div className="absolute inset-0 vintage-spotlight" />

          <div className="relative z-10 vintage-container text-center">
            <h2 className="font-cinzel vintage-text-5xl text-amber-100 mb-8 font-light tracking-widest vintage-text-shadow">
              Ready to Create Magic?
            </h2>
            <p className="vintage-text-xl text-stone-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every great film starts with a conversation. Let's discuss how we can bring your vision to life with
              authentic Tamil storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:dsadharsh12@gmail.com"
                className="bg-white text-stone-800 hover:bg-stone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="tel:+919487358084"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
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
