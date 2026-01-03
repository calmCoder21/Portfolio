import About from "./components/About";
import ContactCTA from "./components/ContactCTA";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  )
}