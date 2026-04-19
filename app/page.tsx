import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { getFeaturedProjects, getProjectCount } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects(3);
  const totalCount = getProjectCount();

  return (
    <main id="main-content" className="min-h-screen bg-black grid-bg">
      <Hero />
      <About />
      <Services />
      <Projects projects={featuredProjects} totalCount={totalCount} />
      <TechStack />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
