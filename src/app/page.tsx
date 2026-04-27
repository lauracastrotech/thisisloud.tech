import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ProcessSection from "@/components/process/ProcessSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectsSection />
        <ProcessSection />
      </main>
      <footer>
        <ContactSection />
      </footer>
    </>
  );
}
