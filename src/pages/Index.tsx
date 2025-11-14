import { Github, ExternalLink, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceCard } from "@/components/ExperienceCard";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "LidlMax",
      description: "An MVP developed as part of my Master in Business Innovation project, built using Lovable. Explores how AI and low-code tools can accelerate the creation of business-oriented prototypes that validate value propositions before full development.",
      url: "lidl-max.lovable.app",
      category: "Business Innovation"
    },
    {
      title: "HandleVisa",
      description: "A live design-to-deploy experiment built using Figma Make, starting from a design system library managed directly in Figma. The project syncs automatically with GitHub and deploys to Vercel, bridging the gap between design ops and engineering pipelines.",
      url: "handlevisa.com",
      category: "Design Engineering"
    },
    {
      title: "fig-gotadate-calendar-events",
      description: "A landing page built with Lovable to support a Figma plugin that syncs with Google Calendar. Developed through pair-coding with ChatGPT, exploring conversational workflows inside Figma plugin development.",
      url: "gotadate.lamalastudio.com",
      category: "Plugin Development"
    },
    {
      title: "image-downloader",
      description: "A Python-based automation tool for bulk image downloads with predefined constraints — size, compression, and aspect ratio — created to solve a SEM production bottleneck. Deployed publicly via Vercel for non-technical teammates.",
      url: "image-api-downloader.vercel.app",
      category: "Automation"
    },
    {
      title: "image-reduce-resize",
      description: "A lightweight image processing utility that automates resizing and optimization workflows, saving editing time for the design team. Developed with LLM assistance to streamline repetitive media tasks.",
      url: "image-reduce-resize.vercel.app",
      category: "Automation"
    },
    {
      title: "Pawssport Manager",
      description: "An MVP for a digital pet passport, centralizing pet information such as vaccines, health data, and metadata. Designed with modular architecture and a friendly UI to scale into future companion tools.",
      url: "pawsport-manager.vercel.app",
      category: "MVP"
    },
    {
      title: "Oilaris",
      description: "A concept app exploring data-driven perfumery and essential oil taxonomy. One of my first LLM-assisted prototypes, merging personal curiosity with AI-powered frontend design.",
      url: "oilaris.com",
      category: "Concept"
    },
    {
      title: "Ruleta Tasks",
      description: "A household task distribution app built with LLMs, featuring a gamified interface to help organize chores among families or shared flats. Early exploration into AI-aided UX flows and dynamic state management.",
      url: "ruleta-tareas.vercel.app",
      category: "Productivity"
    },
    {
      title: "TravelCheck",
      description: "A travel organizer integrating Google APIs for itinerary generation and day distribution across destinations. A testbed for modular architecture, data-driven design, and interactive mapping.",
      url: "packmyadventure.vercel.app",
      category: "Travel"
    },
    {
      title: "TryYourself",
      description: "A psychometric testing platform for TDA and other cognitive assessments, built using Bolt. Experiments with real-time scoring logic and adaptive test flows.",
      url: "tryyourself.vercel.app",
      category: "Assessment"
    },
    {
      title: "UX Balance",
      description: "A decision support tool for product and growth teams, created to quantify qualitative insights. Combines design heuristics, statistics, and AI reasoning to accelerate experimentation cycles.",
      url: "ux-balance.vercel.app",
      category: "Product Tools"
    },
    {
      title: "Craniis",
      description: "My tattoo portfolio, built with Lovable. An exploration of no-code deployment and creative systematization for visual identity projects.",
      url: "craniis.com",
      category: "Creative"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Marc Camps Oller</h1>
          <div className="flex items-center gap-4">
            <a
              href="https://lamalastudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.studio}
            </a>
            <a
              href="https://github.com/marschildox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
              {t.hero.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t.hero.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href="mailto:marc.camps.oller@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                {t.hero.cta.contact}
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-border hover:border-primary transition-colors"
            >
              <a href="https://www.linkedin.com/in/marc-ux" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                {t.hero.cta.linkedin}
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-border hover:border-primary transition-colors"
            >
              <a href="https://github.com/marschildox" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t.hero.cta.github}
              </a>
            </Button>
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 pt-4 border-t border-border/50">
            <a 
              href="#about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.hero.quickNav.about} →
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a 
              href="#experience" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.hero.quickNav.experience} →
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a 
              href="#projects" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t.hero.quickNav.projects} →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 items-center text-sm text-muted-foreground">
            <a href="mailto:marc.camps.oller@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              marc.camps.oller@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+34692236269" className="hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +34 692 236 269
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16 border-t border-border scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8">{t.about.title}</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.background.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.background.text}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.currentFocus.title}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {t.about.currentFocus.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.beyondWork.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.about.beyondWork.text}{" "}
                  <a 
                    href="https://www.instagram.com/stampa_serigrafia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {t.about.beyondWork.link}
                  </a>
                  {t.about.beyondWork.text2}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.coreSkills.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {t.about.coreSkills.skills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.languages.title}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t.about.languages.items.spanish.name}</span>
                    <span className="text-primary">{t.about.languages.items.spanish.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.about.languages.items.english.name}</span>
                    <span className="text-primary">{t.about.languages.items.english.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.about.languages.items.french.name}</span>
                    <span className="text-primary">{t.about.languages.items.french.level}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{t.about.education.title}</h4>
                <div className="space-y-3 text-sm">
                  {t.about.education.items.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium text-foreground">{item.degree}</p>
                      <p className="text-muted-foreground">{item.school} {item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-16 border-t border-border scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-12">{t.experience.title}</h3>
          <div className="space-y-0">
            {t.experience.jobs.map((job, index) => (
              <ExperienceCard
                key={index}
                title={job.title}
                company={job.company}
                period={job.period}
                description={job.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-16 scroll-mt-20">
        <h3 className="text-3xl font-bold text-foreground mb-12">{t.projects.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <ProjectCard 
                title={project.title} 
                description={project.description} 
                url={projects[index].url}
                category={project.category} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a 
                href="https://lamalastudio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                lamalastudio.com
              </a>
              <a 
                href="https://github.com/marschildox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
