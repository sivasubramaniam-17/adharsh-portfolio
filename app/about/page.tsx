"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {
  Award,
  Heart,
  Target,
  Users,
  Calendar,
  Film,
  Camera,
  Edit3,
  MapPin,
  Star,
  Clock,
  Trophy,
  Play,
  Clapperboard,
  PenTool,
} from "lucide-react";
import Navigation1 from "@/components/navigation1";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navigation1 />
      <main
        className={`min-h-screen pt-20 ${
          isVisible ? "vintage-page-enter" : "opacity-0"
        }`}
      >
        {/* Hero Section */}
        <section className="vintage-section-padding vintage-light-bg">
          <div className="vintage-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-16">
              {/* Left Content */}
              <div className="vintage-fade-in order-2 lg:order-1">
                <h1
                  className="font-cinzel text-4xl md:text-5xl lg:text-6xl mb-8 font-light tracking-wide leading-tight"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Adharsh Damodharan
                </h1>

                {/* Personal Info Card */}
                <div className="mb-8 p-6 bg-white/60 rounded-lg border border-stone-200 shadow-lg backdrop-blur-sm">
                  <h3
                    className="font-cinzel text-lg mb-4 font-semibold text-center"
                    style={{ color: "var(--vintage-burgundy)" }}
                  >
                    Personal Profile
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                        Age
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        27
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                        Height
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        5'9"
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">
                        Weight
                      </p>
                      <p
                        className="text-xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        77 kgs
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <MapPin
                          className="h-4 w-4"
                          style={{ color: "var(--vintage-burgundy)" }}
                        />
                      </div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        Nagercoil
                      </p>
                      <p className="text-xs text-stone-500">Kanyakumari</p>
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-medium mb-4">
                    A versatile filmmaker from the culturally rich district of Kanyakumari, 
                    Tamil Nadu, bringing authentic storytelling to Tamil cinema through 
                    multiple creative disciplines.
                  </p>
                  <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                    With hands-on experience in acting, writing, and film production, 
                    I focus on creating content that resonates with Tamil audiences 
                    while maintaining high cinematic standards. My work spans from 
                    intimate character studies to large-scale film productions.
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span
                    className="px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg text-white flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Edit3 className="h-4 w-4" />
                    Writer
                  </span>
                  <span
                    className="px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg text-white flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Camera className="h-4 w-4" />
                    Director
                  </span>
                  <span
                    className="px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg text-white flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Film className="h-4 w-4" />
                    Actor
                  </span>
                  <span
                    className="px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base shadow-lg text-white flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Users className="h-4 w-4" />
                    Production Manager
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative order-2 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl vintage-border max-w-md mx-auto lg:max-w-lg">
                  <Image
                    src="image12.jpg"
                    alt="Adharsh Damodharan - Multi-talented Tamil Filmmaker"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm font-medium">
                        "Cinema is not just entertainment, it's a mirror to society"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Expertise Section */}
        <section className="vintage-section-padding vintage-dark-bg">
          <div className="vintage-container">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-center text-amber-100 mb-12 lg:mb-16 font-light tracking-wide vintage-text-shadow">
              Creative Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Acting */}
              <div className="vintage-card vintage-elegant-hover p-6">
                <div className="flex justify-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Film className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3
                  className="font-cinzel text-xl mb-4 font-bold text-center"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Acting
                </h3>
                <p className="text-stone-600 text-base leading-relaxed mb-4">
                  Passionate about character portrayal with inspiration drawn from 
                  legendary actors like Kamal Haasan. I create reels that showcase 
                  different acting styles and emotional ranges, focusing on authenticity 
                  and depth in every performance.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-sm text-stone-500 mb-2">
                    <strong>Notable Projects:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Vindhu
                    </span>
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      KANA
                    </span>
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Character Reels
                    </span>
                  </div>
                </div>
              </div>

              {/* Writing */}
              <div className="vintage-card vintage-elegant-hover p-6">
                <div className="flex justify-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Edit3 className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3
                  className="font-cinzel text-xl mb-4 font-bold text-center"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Writing
                </h3>
                <p className="text-stone-600 text-base leading-relaxed mb-4">
                  Specializing in dialogue writing, story development, and screenplay 
                  creation for Tamil cinema. My writing focuses on creating relatable 
                  characters and compelling narratives that reflect authentic Tamil 
                  culture and contemporary social themes.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-sm text-stone-500 mb-2">
                    <strong>Writing Portfolio:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Vindhu
                    </span>
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Maanavan Manathu Vaithal
                    </span>
                  </div>
                </div>
              </div>

              {/* Direction */}
              <div className="vintage-card vintage-elegant-hover p-6 md:col-span-2 lg:col-span-1">
                <div className="flex justify-center mb-6">
                  <div
                    className="p-6 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "var(--vintage-burgundy)" }}
                  >
                    <Camera className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3
                  className="font-cinzel text-xl mb-4 font-bold text-center"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Direction
                </h3>
                <p className="text-stone-600 text-base leading-relaxed mb-4">
                  Bringing creative vision to life through thoughtful direction 
                  and storytelling. I focus on creating films that balance 
                  entertainment with meaningful content, ensuring every scene 
                  serves the larger narrative purpose.
                </p>
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-sm text-stone-500 mb-2">
                    <strong>Directed Projects:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Maanavan Manathu Vaithal
                    </span>
                    <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                      Vindhu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="vintage-section-padding vintage-light-bg">
          <div className="vintage-container">
            <h2
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-center mb-12 lg:mb-16 font-light tracking-wide"
              style={{ color: "var(--vintage-burgundy)" }}
            >
              Professional Journey
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* Acting Experience */}
              <div
                className="vintage-card vintage-elegant-hover p-6 lg:p-8"
                style={{ borderLeft: `6px solid var(--vintage-burgundy)` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Film className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3
                        className="font-cinzel text-xl lg:text-2xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        Acting Portfolio
                      </h3>
                      <span className="text-sm text-stone-500 mt-2 sm:mt-0">
                        2022 - Present
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-stone-700 mb-3">
                      Short Film Actor & Content Creator
                    </h4>
                    <p className="text-stone-600 text-base leading-relaxed mb-4">
                      Demonstrated versatility through performances in multiple short films, 
                      bringing diverse characters to life with emotional depth and authenticity. 
                      My acting approach draws inspiration from legendary performers like Kamal Haasan, 
                      focusing on method acting techniques and character immersion. Additionally, 
                      I create character reels that showcase different acting styles and emotional ranges, 
                      helping to build a comprehensive acting portfolio.
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-stone-700 mb-2">Key Achievements:</h5>
                      <ul className="text-stone-600 text-sm space-y-1">
                        <li>• Successfully portrayed lead characters in Vindhu and KANA</li>
                        <li>• Created viral character reels inspired by legendary Tamil actors</li>
                        <li>• Developed expertise in emotional scene portrayal and dialogue delivery</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Vindhu - Lead Role
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        KANA - Character Role
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Character Reels
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Method Acting
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Writing Experience */}
              <div
                className="vintage-card vintage-elegant-hover p-6 lg:p-8"
                style={{ borderLeft: `6px solid var(--vintage-burgundy)` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <PenTool className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3
                        className="font-cinzel text-xl lg:text-2xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        Writing & Screenplay
                      </h3>
                      <span className="text-sm text-stone-500 mt-2 sm:mt-0">
                        2021 - Present
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-stone-700 mb-3">
                      Dialogue Writer, Story Developer & Screenwriter
                    </h4>
                    <p className="text-stone-600 text-base leading-relaxed mb-4">
                      Specialized in creating authentic Tamil dialogues that resonate with contemporary 
                      audiences while preserving cultural nuances. My writing encompasses complete story 
                      development from concept to final screenplay, focusing on character-driven narratives 
                      that explore social themes relevant to Tamil society. I have successfully written 
                      for multiple short film projects, ensuring each script maintains both entertainment 
                      value and meaningful content.
                    </p>
                    <div className="mb-4">
                      <h5 className="font-semibold text-stone-700 mb-2">Writing Specializations:</h5>
                      <ul className="text-stone-600 text-sm space-y-1">
                        <li>• Authentic Tamil dialogue writing with cultural depth</li>
                        <li>• Character development and story arc creation</li>
                        <li>• Screenplay formatting and scene construction</li>
                        <li>• Social theme integration in entertainment content</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Vindhu - Complete Script
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Maanavan Manathu Vaithal - Story & Dialogue
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Tamil Dialogue Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Production Experience */}
              <div
                className="vintage-card vintage-elegant-hover p-6 lg:p-8"
                style={{ borderLeft: `6px solid var(--vintage-burgundy)` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className="p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "var(--vintage-burgundy)" }}
                    >
                      <Clapperboard className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3
                        className="font-cinzel text-xl lg:text-2xl font-bold"
                        style={{ color: "var(--vintage-burgundy)" }}
                      >
                        Production Management
                      </h3>
                      <span className="text-sm text-stone-500 mt-2 sm:mt-0">
                        2023 - 2024
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-stone-700 mb-3">
                      Location Manager - Major Tamil Productions
                    </h4>
                    <p className="text-stone-600 text-base leading-relaxed mb-4">
                      Gained invaluable experience in large-scale film production by serving as 
                      Location Manager for major Tamil cinema projects. This role involved coordinating 
                      with production teams, managing location logistics, and ensuring smooth execution 
                      of filming schedules. Working with established production houses like Homable Films 
                      and Lyca Productions provided deep insights into professional filmmaking processes, 
                      budget management, and the coordination required for successful film completion.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 bg-stone-50 rounded-lg">
                        <h6 className="font-semibold text-stone-700 mb-2">Raghu Thatha</h6>
                        <p className="text-sm text-stone-600 mb-2">Produced by Homable Films</p>
                        <p className="text-xs text-stone-500">
                          Managed location scouting and coordination for this major Tamil production
                        </p>
                      </div>
                      <div className="p-4 bg-stone-50 rounded-lg">
                        <h6 className="font-semibold text-stone-700 mb-2">Vettiyan</h6>
                        <p className="text-sm text-stone-600 mb-2">Produced by Lyca Productions</p>
                        <p className="text-xs text-stone-500">
                          Coordinated location logistics for this high-profile Tamil film
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-semibold text-stone-700 mb-2">Key Responsibilities:</h5>
                      <ul className="text-stone-600 text-sm space-y-1">
                        <li>• Location scouting and feasibility assessment</li>
                        <li>• Coordination with local authorities and permissions</li>
                        <li>• Budget management for location-related expenses</li>
                        <li>• Logistics coordination for cast and crew</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Raghu Thatha - Homable Films
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Vettiyan - Lyca Productions
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Location Management
                      </span>
                      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                        Production Coordination
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Philosophy Section */}
        <section className="vintage-section-padding vintage-dark-bg">
          <div className="vintage-container">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-center text-amber-100 mb-12 lg:mb-16 font-light tracking-wide vintage-text-shadow">
              Cinematic Vision
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed italic">
                  "Every frame tells a story, every dialogue carries emotion, 
                  and every character reflects the soul of Tamil culture."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="vintage-card p-6">
                  <div className="flex items-center mb-4">
                    <Heart
                      className="h-6 w-6 mr-3"
                      style={{ color: "var(--vintage-burgundy)" }}
                    />
                    <h3
                      className="font-cinzel text-lg font-bold"
                      style={{ color: "var(--vintage-burgundy)" }}
                    >
                      Authentic Storytelling
                    </h3>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">
                    I believe in creating content that genuinely represents Tamil culture 
                    and values while addressing contemporary social issues. My goal is to 
                    produce films that entertain audiences while making them think about 
                    important societal topics.
                  </p>
                </div>

                <div className="vintage-card p-6">
                  <div className="flex items-center mb-4">
                    <Target
                      className="h-6 w-6 mr-3"
                      style={{ color: "var(--vintage-burgundy)" }}
                    />
                    <h3
                      className="font-cinzel text-lg font-bold"
                      style={{ color: "var(--vintage-burgundy)" }}
                    >
                      Quality Over Quantity
                    </h3>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">
                    Rather than rushing to produce multiple projects, I focus on 
                    ensuring each film or content piece meets high standards of 
                    storytelling, technical execution, and artistic merit. Every 
                    project is a step toward cinematic excellence.
                  </p>
                </div>

                <div className="vintage-card p-6">
                  <div className="flex items-center mb-4">
                    <Users
                      className="h-6 w-6 mr-3"
                      style={{ color: "var(--vintage-burgundy)" }}
                    />
                    <h3
                      className="font-cinzel text-lg font-bold"
                      style={{ color: "var(--vintage-burgundy)" }}
                    >
                      Collaborative Approach
                    </h3>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">
                    Filmmaking is a team effort, and I value collaboration with 
                    fellow artists, technicians, and production teams. The best 
                    creative results come from combining diverse talents and 
                    perspectives in a supportive environment.
                  </p>
                </div>

                <div className="vintage-card p-6">
                  <div className="flex items-center mb-4">
                    <Award
                      className="h-6 w-6 mr-3"
                      style={{ color: "var(--vintage-burgundy)" }}
                    />
                    <h3
                      className="font-cinzel text-lg font-bold"
                      style={{ color: "var(--vintage-burgundy)" }}
                    >
                      Continuous Learning
                    </h3>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">
                    The film industry constantly evolves, and I'm committed to 
                    learning new techniques, understanding changing audience 
                    preferences, and staying updated with technological 
                    advancements in cinema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="vintage-section-padding vintage-light-bg">
          <div className="vintage-container text-center">
            <h2
              className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-8 font-light tracking-wide"
              style={{ color: "var(--vintage-burgundy)" }}
            >
              Let's Create Cinema Together
            </h2>
            <div className="max-w-3xl mx-auto mb-8 lg:mb-12">
              <p className="text-lg md:text-xl text-stone-700 font-medium leading-relaxed mb-4">
                Ready to collaborate on your next Tamil cinema project?
              </p>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                Whether you need a dedicated actor for your film, a creative writer 
                for compelling dialogues and screenplays, or an experienced production 
                team member who understands the intricacies of large-scale filmmaking, 
                I'm here to contribute to meaningful Tamil storytelling. Let's discuss 
                how we can bring your cinematic vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center max-w-lg mx-auto mb-12">
              <Link
                href="/contact"
                className="vintage-button w-full sm:w-auto text-center"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="vintage-button-outline w-full sm:w-auto text-center"
                style={{ 
                  color: "var(--vintage-burgundy)", 
                  borderColor: "var(--vintage-burgundy)" 
                }}
              >
                View My Work
              </Link>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="vintage-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Clock
                    className="h-8 w-8"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                </div>
                <h4
                  className="font-cinzel text-lg font-bold mb-2"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Available for Projects
                </h4>
                <p className="text-stone-600 text-sm">
                  Currently accepting new collaborations and film projects across Tamil Nadu
                </p>
              </div>

              <div className="vintage-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Play
                    className="h-8 w-8"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                </div>
                <h4
                  className="font-cinzel text-lg font-bold mb-2"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Multiple Roles
                </h4>
                <p className="text-stone-600 text-sm">
                  Actor, Writer, Director, and Production Manager - versatile filmmaking skills
                </p>
              </div>

              <div className="vintage-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Star
                    className="h-8 w-8"
                    style={{ color: "var(--vintage-burgundy)" }}
                  />
                </div>
                <h4
                  className="font-cinzel text-lg font-bold mb-2"
                  style={{ color: "var(--vintage-burgundy)" }}
                >
                  Quality Focus
                </h4>
                <p className="text-stone-600 text-sm">
                  Committed to high-quality storytelling and professional film production
                </p>
              </div>
            </div>
            </div>
            </section>
            </main>
            </>
  )}