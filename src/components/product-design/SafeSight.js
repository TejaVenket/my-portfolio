import Image from "next/image";

const meta = [
  { label: "Type", value: "Capstone Project" },
  { label: "Partner", value: "DSV" },
  { label: "Domain", value: "Logistics & Warehousing" },
  { label: "Focus", value: "Workplace Safety" },
];

const tags = ["Computer Vision", "AI / ML", "Safety Systems", "UX Design"];

export default function Safesight({ accent, accentMuted, accentBorder }) {
  return (
    <>
      {/* Left: Text */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.75rem" }}>
          Capstone Project · DSV
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          SafeSight
        </h2>
        <p style={{ fontSize: "13px", color: accent, marginBottom: "1.25rem", fontStyle: "italic", opacity: 0.8 }}>
          AI-enabled warehouse monitoring system
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1.75rem" }}>
          Built for DSV — a global logistics MNC — SafeSight uses computer vision to detect safety
          violations in real time. From PPE compliance to restricted zone breaches, the system gives
          warehouse managers instant visibility and keeps workers protected around the clock.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, background: accentMuted, color: accent, letterSpacing: "0.02em" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Meta cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {meta.map((m) => (
            <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "0.75rem 1rem" }}>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: "4px" }}>{m.label}</p>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff" }}>{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: accentMuted, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Swap null for your image path e.g. "/images/safesight.jpg" */}
        {null ? (
          <Image src="/images/safesight.jpg" alt="SafeSight" fill style={{ objectFit: "cover" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>SafeSight Dashboard</p>
        )}
      </div>
    </>
  );
}