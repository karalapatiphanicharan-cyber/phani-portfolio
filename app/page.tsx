import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/layout/footer";
import { Section, MaxWidthWrapper, Container } from "@/components/layout/layout";
import { Card } from "@/components/cards/card";
import { Button } from "@/components/buttons/button";
import { Badge } from "@/components/ui/badge";
import { BrowserMockup } from "@/components/ui/browser-mockup";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navigation />

      <main>
        <Section className="pt-32 md:pt-48 pb-20">
          <MaxWidthWrapper>
            <Container>
              <div className="flex flex-col items-center text-center space-y-8">
                <Badge variant="glass" className="px-4 py-1 border-primary/20 text-primary animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  Phase 1: Design System & Architecture
                </Badge>

                <div className="space-y-4 max-w-4xl">
                  <h1 className="hero-title leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Engineering Excellence <br />
                    <span className="text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Meets Design Precision</span>
                  </h1>
                  <p className="subtitle mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                    A refined foundation built with Next.js 15, Tailwind CSS v4, and Framer Motion.
                    Ready for high-performance portfolio implementation.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                  <Button variant="primary" size="lg" className="rounded-full px-8">
                    Explore Framework
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                    View Components
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-1000 delay-700">
                <Card variant="glass" className="group">
                  <div className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/50 group-hover:text-primary transition-colors">Component Style 01</div>
                  <h3 className="text-xl font-bold mb-3">Adaptive Glass Surface</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Advanced backdrop-blur effects with precise border transparency for a premium frosted appearance.
                  </p>
                </Card>
                <Card variant="solid" className="group">
                  <div className="mb-4 text-xs font-bold uppercase tracking-widest text-secondary/50 group-hover:text-secondary transition-colors">Component Style 02</div>
                  <h3 className="text-xl font-bold mb-3">Solid Layering System</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    High-contrast surfaces using the surface color palette for clean, structured information hierarchy.
                  </p>
                </Card>
                <Card variant="solid" className="border-primary/20 group">
                  <div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors">Component Style 03</div>
                  <h3 className="text-xl font-bold mb-3">Interactive Motion Foundation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reusable Framer Motion variants ensuring consistent, high-quality interaction across the entire platform.
                  </p>
                </Card>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-1000">
                <BrowserMockup url="kspc-design.foundation">
                  <div className="flex h-full w-full items-center justify-center bg-[#030712]/40 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3B82F610_0%,transparent_70%)]" />
                     <p className="text-xs font-code text-primary relative z-10 uppercase tracking-[0.5em]">Project Visual System Placeholder</p>
                  </div>
                </BrowserMockup>
              </div>
            </Container>
          </MaxWidthWrapper>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
