import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Background Canvas pinned during scroll with text overlapping */}
      <div className="relative">
        <ScrollyCanvas />
        <div className="absolute top-0 left-0 w-full pointer-events-none">
          <Overlay />
        </div>
      </div>
      
      <About />
      <Skills />
      <Services />
      <Projects />
      <Cta />
      <Footer />
    </main>
  );
}
