import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSections } from './components/ContactSections'
import { Footer } from './components/Footer'
import { AchievementsSection } from './components/AchievementsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-16 lg:mt-6 mx-auto py-4 px-12">
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSections/>
      </div>
      <Footer/>
    </main>
  )
}
