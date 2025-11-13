import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

const Index = () => {
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
              Studio
            </a>
            <a
              href="https://github.com/malastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Design Engineer exploring AI-assisted prototyping
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            A collection of experiments at the intersection of Design Engineering, AI-assisted prototyping, 
            and LLM-driven workflows — exploring how tools like SpecDesign, Vibecoding, and Lovable can 
            accelerate web app development, automate repetitive tasks, and extend design thinking into 
            functional deployments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href="https://lamalastudio.com" target="_blank" rel="noopener noreferrer">
                Visit Studio
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-border hover:border-primary transition-colors"
            >
              <a href="https://github.com/malastudio" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-foreground mb-12">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Marc Camps Oller. Built with Lovable.</p>
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
                href="https://github.com/malastudio" 
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
