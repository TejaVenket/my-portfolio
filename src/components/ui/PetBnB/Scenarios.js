import Image from "next/image";

const scenarios = [
  {
    id: "01",
    title: "Weekend Business Trip",
    subtitle: "Last-minute · 3 days · Kuala Lumpur",
    description: "Rhowend gets a short-notice work trip and needs someone to look after his Bulldog — fast, without adding friction to an already packed schedule.",
    image: "/images/PetBnB/scenario1.png", // 🔁 swap with your actual image
    imageAlt: "Storyboard for scenario 1 — weekend business trip",
    
  },
  {
    id: "02",
    title: "Two-Week International Conference",
    subtitle: "Post-surgery care · 14 days · Overseas",
    description: "Rhowend's Bulldog is recovering from surgery and needs medication at fixed times daily. He's heading overseas for two weeks and needs a sitter who can handle the complexity.",
    image: "/images/PetBnB/scenario2.png", // 🔁 swap with your actual image
    imageAlt: "Storyboard for scenario 2 — international conference with medical care",
    
  },
];

export default function PetBnBScenarios({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%" }}>

      

      {/* ── Intro ── */}
      <div style={{ maxWidth: "580px", marginTop: "4rem" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          How Rhowend Uses PetBnB
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          Two scenarios stress-tested the design — one driven by urgency, one by complexity. Each was visualised as a storyboard to keep the user's perspective front and centre.
        </p>
      </div>

      {/* ── Scenario Cards ── */}
      {scenarios.map((sc, idx) => (
        <div key={sc.id} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Header row */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
            <span style={{ fontSize: "11px", color: accent, fontWeight: 500, opacity: 0.6, flexShrink: 0 }}>
              {sc.id}
            </span>
            <div>
              <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 400, color: "#fff", margin: "0 0 3px", lineHeight: 1.2 }}>
                {sc.title}
              </h4>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0, letterSpacing: "0.04em" }}>
                {sc.subtitle}
              </p>
            </div>
          </div>

          {/* Storyboard image — full width, cinematic aspect */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "21/9",
            borderRadius: "14px",
            overflow: "hidden",
            border: `0.5px solid ${accentBorder}`,
            background: accentMuted,
          }}>
            {/* 🔁 Replace src with your actual storyboard image path */}
            <Image
              src={sc.image}
              alt={sc.imageAlt}
              fill
              style={{ objectFit: "contain" }}
            />

            {/* Gradient overlay — fades bottom for the step pills */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%)",
            }} />

            {/* Step pills pinned to bottom */}
            <div style={{
              position: "absolute", bottom: "16px", left: "16px", right: "16px",
              display: "flex", gap: "8px",
            }}>
              
            </div>

            {/* Scenario number watermark top-right */}
            <div style={{
              position: "absolute", top: "14px", right: "16px",
              fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em",
              color: accent, background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(6px)",
              padding: "4px 10px", borderRadius: "20px",
              border: `0.5px solid ${accentBorder}`,
            }}>
              Scenario {sc.id}
            </div>
          </div>

          {/* Description below image */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, margin: 0, maxWidth: "640px" }}>
            {sc.description}
          </p>

          {/* Divider between scenarios */}
          {idx < scenarios.length - 1 && (
            <div style={{ height: "1px", background: accentBorder, marginTop: "0.5rem" }} />
          )}
        </div>
      ))}
    </div>
  );
}