import { ThemeProvider } from "next-themes";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProfessionalSummary } from "./components/professional-summary";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ArchitectureSection } from "./components/architecture-section";
import { CaseStudySection } from "./components/case-study-section";
import { EducationSection } from "./components/education-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { InsightsSection } from "./components/insights-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection />
          <ProfessionalSummary />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ArchitectureSection />
          <CaseStudySection />
          <EducationSection />
          <TestimonialsSection />
          <InsightsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}