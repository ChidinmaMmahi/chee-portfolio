import type { ReactNode } from "react";

interface ButtonProps {
  title: string;
  href?: string;
  extraClassnames?: string;
  variant?:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "tertiary";
  target?: "_blank" | "_self";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  title,
  href,
  extraClassnames,
  variant = "primary",
  target = "_self",
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  const baseClasses = `py-2 px-4 rounded-md text-sm cursor-pointer hover:scale-[1.05] hover:opacity-80 transition-all duration-500 flex items-center gap-x-2 ${extraClassnames} ${
    variant === "primary"
      ? "bg-accent text-white"
      : variant === "primary-outline"
      ? "border border-accent"
      : variant === "secondary"
      ? "bg-surface-700"
      : variant === "secondary-outline"
      ? "border border-surface-700"
      : variant === "tertiary"
      ? "shadow-lg shadow-shadow-100 border-[0.5px] border-surface-100 hover:border-accent/50 hover:text-accent "
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
        {startIcon} {title} {endIcon}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {startIcon} {title} {endIcon}
    </button>
  );
};
