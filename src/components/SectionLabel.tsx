const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-label text-brand-gold inline-block mb-4 ${className}`}>
    {children}
  </span>
);

export default SectionLabel;
