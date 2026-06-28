import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navigation />

      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
