import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover glow-primary",
  secondary:
    "bg-[#141416] text-white border border-white/10 hover:border-primary/40",
  outline:
    "bg-transparent text-white border border-white/12 hover:border-primary/50 hover:text-primary",
  ghost: "bg-transparent text-foreground hover:text-primary",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function cx(variant: Variant, size: Size, className = "") {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonAsButton = {
  href?: undefined;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = cx(variant, size, props.className);

  if (props.href) {
    const external = props.href.startsWith("http");
    return (
      <Link
        href={props.href}
        className={className}
        target={props.target ?? (external ? "_blank" : undefined)}
        rel={props.rel ?? (external ? "noopener noreferrer" : undefined)}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={className}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      name={buttonProps.name}
      id={buttonProps.id}
    >
      {buttonProps.children}
    </button>
  );
}
