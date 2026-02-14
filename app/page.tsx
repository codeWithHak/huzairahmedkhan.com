import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-black grid-bg">
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
