interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
      {skill}
    </span>
  );
};
