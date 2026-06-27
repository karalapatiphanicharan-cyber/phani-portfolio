import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navigation />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
