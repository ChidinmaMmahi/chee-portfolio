interface ButtonProps {
  title: string;
  href?: string;
  extraClassnames?: string;
  variant?: "primary" | "secondary" | "primary-outline" | "secondary-outline";
  target?: "_blank" | "_self";
  onClick?: () => void;
}

export const Button = ({
  title,
  href,
  extraClassnames,
  variant = "primary",
  target = "_self",
  onClick,
}: ButtonProps) => {
  const baseClasses = `py-2 px-4 rounded-md text-sm cursor-pointer hover:scale-[1.05] hover:opacity-80 transition-all duration-500 ${extraClassnames} ${
    variant === "primary"
      ? "bg-accent text-white"
      : variant === "primary-outline"
      ? "border border-accent"
      : variant === "secondary"
      ? "bg-surface-700"
      : variant === "secondary-outline"
      ? "border border-surface-700"
      : ""
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {title}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {title}
    </button>
  );
};
