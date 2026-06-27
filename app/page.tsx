import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/layout/footer";
import { Section, MaxWidthWrapper, Container } from "@/components/layout/layout";
import { Card } from "@/components/cards/card";
import { Button } from "@/components/buttons/button";
import { Badge } from "@/components/ui/badge";
import { BrowserMockup } from "@/components/ui/browser-mockup";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />

      <main>
        <Section>
          <MaxWidthWrapper>
            <Container>
              <div className="space-y-6">
                <Badge variant="glass">System Architecture v1.0</Badge>
                <h1 className="hero-title">
                  Premium Portfolio <span className="text-primary">Foundation</span>
                </h1>
                <p className="subtitle max-w-2xl">
                  A high-performance, accessible, and beautifully designed architectural foundation for a world-class engineering portfolio.
                </p>
                <div className="flex gap-4">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card variant="glass">
                  <h3 className="text-xl font-bold mb-2">Glass Card</h3>
                  <p className="text-muted-foreground text-sm">Sophisticated blur and border effects.</p>
                </Card>
                <Card variant="solid">
                  <h3 className="text-xl font-bold mb-2">Solid Card</h3>
                  <p className="text-muted-foreground text-sm">Clean, high-contrast surface design.</p>
                </Card>
                <Card variant="solid" className="border-primary/50">
                  <h3 className="text-xl font-bold mb-2">Interactive</h3>
                  <p className="text-muted-foreground text-sm">Hover to see the subtle lift effect.</p>
                </Card>
              </div>

              <BrowserMockup url="design-system.dev">
                <div className="flex h-full w-full items-center justify-center bg-surface/50">
                   <p className="text-sm font-code text-primary">Preview Slot</p>
                </div>
              </BrowserMockup>
            </Container>
          </MaxWidthWrapper>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
