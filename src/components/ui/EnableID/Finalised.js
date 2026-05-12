"use client";
// Use this file later for displaying final UI
import Image from "next/image";

const mustHave = [
  {
    number: "01",
    name: "Digital ID Card",
    desc: "A portable digital identity profile for refugees.",
    image: null, // replace with "/images/EnableID/feature-digital-id.png"
    span: 2, // wide card
  },
  {
    number: "02",
    name: "Document Upload System",
    desc: "Included both local file uploads and an in-app document scanning feature.",
    image: null,
    span: 1,
  },
  {
    number: "03",
    name: "OCR-Based Information Extraction",
    desc: "Automatically extracted key information from uploaded documents, such as date of birth, blood type, education details, and other relevant fields depending on document type.",
    image: null,
    span: 1,
  },
  {
    number: "04",
    name: "Notification System",
    desc: "Allowed refugees to receive updates regarding document approval and verification status.",
    image: null,
    span: 2, // wide card
  },
];

const goodToHave = [
  {
    number: "01",
    name: "Facial Recognition Login",
    desc: "Enabled users to securely log into the application using facial authentication.",
    image: null,
    span: 1,
  },
  {
    number: "02",
    name: "Family Reconnection Feature",
    desc: "Allowed refugees to upload photos of missing relatives and use automated facial matching against the platform's database to reconnect separated families.",
    image: null,
    span: 1,
  },
  {
    number: "03",
    name: "AI Chatbot Assistant",
    desc: "Provided guidance on using the app and answering refugee-related questions, such as information about UNHCR services and processes.",
    image: null,
    span: 2,
  },
];

function FeatureCard({ feature, accent, accentBorder, accentMuted, muted = false }) {
  const cardAccent = muted ? "rgba(255,255,255,0.25)" : accent;
  const cardBorder = muted ? "rgba(255,255,255,0.08)" : accentBorder;
  const cardMuted = muted ? "rgba(255,255,255,0.03)" : accentMuted;

  return (
    <div style={{
      gridColumn: `span ${feature.span}`,
      border: `0.5px solid ${cardBorder}`,
      borderRadius: "16px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "rgba(255,255,255,0.015)",
    }}>
      {/* Image area */}
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: feature.span === 2 ? "16/6" : "4/3",
        background: cardMuted,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {feature.image ? (
          <Image src={feature.image} alt={feature.name} fill style={{ objectFit: "cover" }} />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", border: `0.5px solid ${cardBorder}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cardAccent} strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)", margin: 0 }}>UI screenshot</p>
          </div>
        )}
        {/* Number badge */}
        <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(0,0,0,0.45)", borderRadius: "6px", padding: "3px 8px" }}>
          <span style={{ fontSize: "10px", fontWeight: 600, color: cardAccent, letterSpacing: "0.08em" }}>{feature.number}</span>
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: "4px" }}>
        <p style={{ fontSize: "13px", fontWeight: 500, color: muted ? "rgba(255,255,255,0.55)" : "#fff", margin: 0 }}>
          {feature.name}
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

export default function Finalised({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, margin: 0 }}>
          Phase 2 · Final Features UI
        </p>
      </div>

      {/* Heading + intro */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "60%", marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          Finalised Features
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          The features we built, each designed to directly address the needs uncovered during research.
        </p>
      </div>

      {/* Must-have group */}
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent }} />
          <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: accent, margin: 0 }}>
            Must-Have Features
          </p>
          <div style={{ flex: 1, height: "0.5px", background: `${accentBorder}` }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {mustHave.map((f, i) => (
            <FeatureCard key={i} feature={f} accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
          ))}
        </div>
      </div>

      {/* Good-to-have group */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
          <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            Good-to-Have Features
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          {goodToHave.map((f, i) => (
            <FeatureCard key={i} feature={f} accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} muted />
          ))}
        </div>
      </div>

    </div>
  );
}