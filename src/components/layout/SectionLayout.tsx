type SectionLayoutProps = {
  title?: string;
  children: React.ReactNode;
  extraClasses?: string;
};

export const SectionLayout = ({
  title,
  children,
  extraClasses,
}: SectionLayoutProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-6 py-24 ${extraClasses}`}>
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-accent text-center sm:text-left">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
