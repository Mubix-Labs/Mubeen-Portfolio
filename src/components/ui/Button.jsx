// Reusable link-styled button. variant: "primary" | "ghost" | "dark"
export default function Button({
  href,
  children,
  variant = "primary",
  external = true,
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium font-body transition-all duration-300 will-change-transform";

  const variants = {
    primary:
      "bg-azure text-white hover:bg-azure-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-azure/25",
    ghost:
      "border border-ink/15 text-ink hover:border-azure hover:text-azure hover:-translate-y-0.5",
    dark:
      "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
