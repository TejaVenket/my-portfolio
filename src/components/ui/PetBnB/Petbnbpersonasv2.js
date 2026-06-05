import Image from "next/image";

const personas = [
  {
    role: "Primary · Pet Owner",
    name: "Mali Mudana",
    image: "/images/PetBnB/Iteration2/MaliMaduna.jpg",
  },
  {
    role: "Secondary · Pet Sitter",
    name: "Jeremy Larsson",
    image: "/images/PetBnB/Iteration2/JeremyLarsson.jpg",
  },
];

export default function PetBnBPersonasV2({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Iteration 2 · Personas
        </p>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      </div>

      {/* Intro */}
      <div style={{ maxWidth: "580px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          Two Sides of the Marketplace
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          Iteration 2 refined our understanding of both user types — shifting from a single traveller persona to a dual-sided marketplace model with distinct needs, workflows and pain points.
        </p>
      </div>

      {/* Images side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {personas.map((p) => (
          <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "14px",
              overflow: "hidden",
              border: `0.5px solid ${accentBorder}`,
            }}>
              <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 2px" }}>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0, fontFamily: "'DM Serif Display', serif" }}>{p.name}</p>
              <span style={{ fontSize: "10px", padding: "3px 10px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, color: accent, background: accentMuted, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {p.role}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}