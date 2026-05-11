"use client";

export function ButtonBold({ href, children, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "0.6rem 1.25rem",
        borderRadius: "8px",
        background: accent,
        color: "#0d1117",
        fontSize: "13px",
        fontWeight: 500,
        textDecoration: "none",
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {children}
    </a>
  );
}

export function ButtonMuted({
  href,
  children,
  accent = "#19B7A5",
  accentBorder = "rgba(25,183,165,0.25)",
  accentMuted = "rgba(25,183,165,0.07)",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "0.6rem 1.25rem",
        borderRadius: "8px",
        background: "transparent",
        border: `0.5px solid ${accentBorder}`,
        color: accent,
        fontSize: "13px",
        fontWeight: 500,
        textDecoration: "none",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = accentMuted)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "transparent")
      }
    >
      {children}
    </a>
  );
}