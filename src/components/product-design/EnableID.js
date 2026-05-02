import Image from "next/image";
 
const meta = [
  { label: "Type", value: "Product Design" },
  { label: "Partner", value: "Gebirah" },
  { label: "Domain", value: "Humanitarian Aid" },
  { label: "Focus", value: "Digital Inclusion" },
];
 
const tags = ["AI Identity", "Social Impact", "Mobile App", "UX Research"];
 
export default function EnableID({ accent, accentMuted, accentBorder }) {
  return (
    <>
      {/* Left: Text */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.75rem" }}>
          AI Product · Humanitarian
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          EnableID
        </h2>
        <p style={{ fontSize: "13px", color: accent, marginBottom: "1.25rem", fontStyle: "italic", opacity: 0.8 }}>
          AI-powered digital identification for the underserved
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1.75rem" }}>
          Developed in partnership with Gebirah, a humanitarian aid organisation, EnableID gives
          displaced and undocumented individuals a verifiable digital identity. By removing barriers
          to identification, it unlocks access to healthcare, aid, and essential services for those
          who need them most.
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
        {/* Swap null for your image path e.g. "/images/enableid.jpg" */}
        {null ? (
          <Image src="/images/enableid.jpg" alt="EnableID" fill style={{ objectFit: "cover" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>EnableID Mobile App</p>
        )}
      </div>
    </>
  );
}
 