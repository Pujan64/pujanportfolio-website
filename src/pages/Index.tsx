import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";

export default function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Pujan Patel. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm mt-2 opacity-80">
            Designed and developed with ❤️ for creating meaningful connections.
          </p>
        </div>
      </footer>
    </div>
  );
}
