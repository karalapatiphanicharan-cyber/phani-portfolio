import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navigation />

      <main>
        <Hero />
        <Metrics />
        <About />
      </main>

      <Footer />
    </div>
  );
}
