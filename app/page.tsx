"use client"

import { useState, useEffect } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import SimpleWorkGrid from "../components/SimpleWorkGrid"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ExperienceSection from "@/components/ExperienceSection"
import ContactSection from "@/components/ContactSection"
import { WorkTabs } from "@/components/WorkTabs"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Grid2X2 } from "lucide-react"

export default function Home() {
  const headerSize = 1.2;
  const textSize = 0.8;

  const [activeSection, setActiveSection] = useState("about")
  const [activeWorkCategory, setActiveWorkCategory] = useState("All")
  const [workDisplayMode, setWorkDisplayMode] = useState<"dynamic" | "simple">("simple")

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: workRef, inView: workInView } = useInView({ threshold: 0.3 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 })
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.3 })
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 })

  const workCategories = ["All", "Banner", "Poster", "Branded Merchandise", "Shirt", "Art", "SocialPost", "Catalog"]

  useEffect(() => {
    if (contactInView) setActiveSection("contact")
    else if (experienceInView) setActiveSection("experience")
    else if (skillsInView) setActiveSection("skills")
    else if (workInView) setActiveSection("work")
    else if (aboutInView) setActiveSection("about")
  }, [contactInView, experienceInView, skillsInView, workInView, aboutInView])

  const toggleWorkDisplayMode = () => {
    setWorkDisplayMode(workDisplayMode === "dynamic" ? "simple" : "dynamic")
  }

  const [language, setLanguage] = useState<string>("vi")  // Ngôn ngữ mặc định là tiếng Anh

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
  }

  return (
    <div className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="about" ref={aboutRef} className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="w-full h-full flex flex-col md:flex-row items-start gap-12 md:gap-16 max-w-7xl mx-auto">
          <div className="w-full md:w-[500px] flex-shrink-0 flex flex-col justify-between h-full">
            {/* <AboutSection headerSize={headerSize} textSize={textSize} /> */}
            <AboutSection headerSize={headerSize} textSize={textSize} language={language} setLanguage={setLanguage} />

          </div>
          <div className="w-full md:flex-grow h-[60vh] md:h-[80vh]">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" ref={workRef} className="py-24 px-8">
        <div className="max-w-7xl mx-auto flex-grow relative">
          <div className="absolute right-0 top-[30%] w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute left-0 bottom-[20%] w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex justify-between items-center mb-8">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/80 tracking-tighter`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                "My Work — Q1 2025"
              </span>
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Brain.png"
                alt="Brain"
                width="85"
                height="85"
                className="inline-block ml-3"
              />
            </h2>

            <Button
              onClick={toggleWorkDisplayMode}
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10"
            >
              {workDisplayMode === "dynamic" ? (
                <>
                  <Grid2X2 className="mr-2 h-4 w-4" /> Simple View
                </>
              ) : (
                <>
                  <LayoutGrid className="mr-2 h-4 w-4" /> Dynamic View
                </>
              )}
            </Button>
          </div>

          <WorkTabs
            categories={workCategories}
            activeCategory={activeWorkCategory}
            onCategoryChange={setActiveWorkCategory}
          />

          <div className="relative mb-16">
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-xl"></div>
            </div>

            {workDisplayMode === "dynamic" ? (
              <div className="h-[70vh]">
                <DynamicFrameLayout category={activeWorkCategory === "All" ? undefined : activeWorkCategory} />
              </div>
            ) : (
              <SimpleWorkGrid category={activeWorkCategory === "All" ? undefined : activeWorkCategory} />
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/80 tracking-tighter mb-16`}>
            <span className="inline-flex items-center">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Artist%20Light%20Skin%20Tone.png"
                alt="Artist Light Skin Tone"
                width="55"
                height="55"
                className="mr-2"
              />
              Skills
            </span>
          </h2>

          <SkillsSection
            language={language}
            onLanguageChange={handleLanguageChange}
          />

        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/80 tracking-tighter mb-16`}>
            <span className="inline-flex items-center">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Running.png"
                alt="Person Running"
                width="75"
                height="75"
                className="mr-2"
              />
              Experience
            </span>
          </h2>
          {/* <ExperienceSection /> */}
          <ExperienceSection language={language} onLanguageChange={handleLanguageChange} />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/80 tracking-tighter mb-16`}>
            <span className="inline-flex items-center">
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Eyes.png"
                alt="Eyes"
                width="75"
                height="75"
                className="mr-2"
              />
              Contact
            </span>
          </h2>
          <ContactSection language={language} onLanguageChange={handleLanguageChange} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} NVCN. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/80 transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/80 transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
