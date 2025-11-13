interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => {
  return (
    <div className="border-l-2 border-primary/30 pl-6 pb-8 relative before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-primary">
      <div className="mb-2">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <p className="text-sm font-medium text-primary">{company}</p>
        <p className="text-xs text-muted-foreground mt-1">{period}</p>
      </div>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {description.map((item, index) => (
          <li key={index} className="leading-relaxed">• {item}</li>
        ))}
      </ul>
    </div>
  );
};
