interface StickyScrollSectionProps {
  leftColumn: React.ReactNode;
  rightSections: React.ReactNode[];
}

export default function StickyScrollSection({
  leftColumn,
  rightSections,
}: StickyScrollSectionProps) {
  return (
    <section className="relative flex w-full h-[calc(100vh*3)] bg-[var(--background-darker)]">
      {/* Coluna fixa à esquerda */}
      <div className="sticky top-0 h-screen w-[360px] shrink-0 flex items-center justify-center px-6 z-10 border-r border-white/10">
        <div className="max-w-[320px]">{leftColumn}</div>
      </div>

      {/* Coluna com conteúdo rolável */}
      <div className="flex flex-col w-full">
        {rightSections.map((section, index) => (
          <div key={index} className="h-screen flex items-center px-10">
            <div className="max-w-[648px]">{section}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
