import { Github, ExternalLink, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceCard } from "@/components/ExperienceCard";

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
              href="https://github.com/marschildox"
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
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-4">
              Digital Product & Innovation Lead
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building strategy-driven products that move the metrics
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Barcelona-based Product Designer with 10+ years leading multidisciplinary squads. 
            I anchor initiatives to North Star Metrics, scale quality through DesignOps, 
            and explore AI-assisted prototyping to accelerate web app development and automate workflows.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href="mailto:marc.camps.oller@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-border hover:border-primary transition-colors"
            >
              <a href="https://www.linkedin.com/in/marc-ux" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-border hover:border-primary transition-colors"
            >
              <a href="https://github.com/marschildox" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
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
      <section className="container mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Background</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I went from screenprinting to leading multidisciplinary squads — a journey that taught me how to 
                  anchor every initiative to a North Star Metric, uncover and prioritize opportunities with the 
                  Opportunity Solution Tree, and scale quality through DesignOps in sync with development.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Growth experiments & data-driven storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>Generative AI for discovery and prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    <span>LLM-driven workflows & design automation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Beyond Work</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I stay a maker at heart: I tattoo minimalist pieces, run{" "}
                  <a 
                    href="https://www.instagram.com/stampa_serigrafia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @stampa_serigrafia
                  </a>
                  , and ferment spicy sauces with a punk spirit. That hands-on practice sharpens my eye for detail 
                  and keeps my iteration fast.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge skill="Technical Project Management" />
                  <SkillBadge skill="Backend Development" />
                  <SkillBadge skill="Lean UX" />
                  <SkillBadge skill="Design Systems" />
                  <SkillBadge skill="DesignOps" />
                  <SkillBadge skill="UX Research" />
                  <SkillBadge skill="Product Strategy" />
                  <SkillBadge skill="AI-Assisted Design" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Languages</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Spanish & Catalan</span>
                    <span className="text-primary">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-primary">Full Professional</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="text-primary">Limited Working</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Postgraduate in Business Innovation</p>
                    <p className="text-muted-foreground">SHIFTA by ELISAVA (2025)</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Master's in UX</p>
                    <p className="text-muted-foreground">La Salle BCN (2016-2017)</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">MA in Web Project Design & Direction</p>
                    <p className="text-muted-foreground">ELISAVA (2013-2014)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-12">Experience</h3>
          <div className="space-y-0">
            <ExperienceCard
              title="Product Design Team Lead"
              company="Leadtech Group"
              period="January 2020 - Present"
              description={[
                "Manage and develop a team of designers, setting clear goals and ensuring consistent quality design across multiple product teams",
                "Utilize UX Research to understand customers and positively affect the design process",
                "Maintain and evolve Design Language System across all products",
                "Think strategically about customer needs and business goals alignment",
                "Advocate for UX within the company and stay current with design trends"
              ]}
            />
            <ExperienceCard
              title="Senior UX Designer"
              company="Leadtech Group"
              period="November 2018 - January 2020"
              description={[
                "Analyzed UX problems and created on-brand design solutions meeting measurable business requirements",
                "Incorporated market analysis, customer feedback, and technical constraints into design",
                "Identified and prioritized research questions based on product analysis and business needs",
                "Delivered impact measured by changes to product design and development roadmap"
              ]}
            />
            <ExperienceCard
              title="Front-end & UX Designer"
              company="Leadtech Group"
              period="October 2016 - November 2018"
              description={[
                "Developed responsive web interfaces with focus on user experience",
                "Collaborated with engineering teams to implement design systems"
              ]}
            />
            <ExperienceCard
              title="Co-Owner"
              company="Stampa Serigrafia"
              period="January 2014 - Present"
              description={[
                "Textile screen printing workshop in Barcelona specialized in promotional materials",
                "Manage design, illustration, marketing, printing, and distribution processes"
              ]}
            />
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
