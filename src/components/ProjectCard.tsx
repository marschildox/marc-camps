import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  category?: string;
}

export const ProjectCard = ({ title, description, url, category }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:shadow-medium hover:border-primary/20">
      <div className="flex flex-col gap-3">
        {category && (
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {category}
          </span>
        )}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <a
          href={url.startsWith('http') ? url : `https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 mt-2"
        >
          View Project
          <span className="text-xs opacity-60">→</span>
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
    </Card>
  );
};
