"use client";

/**
 * Makes an entire project block clickable and opens the live site in a new tab,
 * without printing the URL anywhere on the page (or in the browser status bar).
 */
export function ProjectLink({
  href,
  label,
  className = "",
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const open = () => window.open(href, "_blank", "noopener,noreferrer");
  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`${label} — open live site in a new tab`}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
