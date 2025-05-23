import { Particles } from "@/components/particles"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
      <Particles className="absolute inset-0 z-0" quantity={100} />

      <FloatingNav />

      <div className="relative z-10" id="home">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
