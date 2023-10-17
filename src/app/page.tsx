import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSections } from './components/ContactSections'
import { Footer } from './components/Footer'
import { AchievementsSection } from './components/AchievementsSection'
import { AnimatedCircle } from './components/AnimatedCircle'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <div className="container mt-16 lg:mt-6 mx-auto py-4 px-12">
          <HeroSection/>
          <AchievementsSection/>
          <AboutSection/>
          <ProjectsSection/>
          <ContactSections/>
        </div>
      </main>
      <Footer/>
      <AnimatedCircle/>
    </>
  )
}