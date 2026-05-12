"use client";

const features = [
  {
    number: "01",
    name: "Digital ID Card",
    desc: "A portable digital identity profile for refugees.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M13 10h4M13 14h3" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Document Upload System",
    desc: "Local file uploads and an in-app document scanning feature.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "OCR-Based Extraction",
    desc: "Automatically extracts key information from documents — date of birth, blood type, education, and more.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 12h6M9 10h2M9 14h4" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Notification System",
    desc: "Refugees receive updates on document approval and verification status in real time.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Facial Recognition Login",
    desc: "Secure login using facial authentication, removing the need for passwords.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M9 9.5C9.5 9 10.2 8.5 12 8.5s2.5.5 3 1M9 14.5c.5.5 1.2 1 3 1s2.5-.5 3-1" />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Family Reconnection",
    desc: "Upload photos of missing relatives and use automated facial matching to reconnect separated families.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "07",
    name: "AI Chatbot Assistant",
    desc: "Guidance on using the app and answering refugee-related questions about UNHCR services and processes.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
];

export default function FinalFeatures({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
      {/* Heading + intro */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "60%", marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          Finalised Features
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          The features we built, each designed to directly address the needs uncovered during research.
        </p>
      </div>

      {/* 7-card grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              gridColumn:"span 1", // last card full width to fill row
              border: `0.5px solid ${f.accentBorder}`,
              borderRadius: "14px",
              padding: "1.25rem",
              background: f.accentMuted,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            {/* Icon */}
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: `0.5px solid ${f.accentBorder}`,
              background: "rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              {f.icon(f.accent)}
            </div>

            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0 }}>{f.name}</p>
                <span style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: f.accent,
                  padding: "2px 6px",
                  borderRadius: "20px",
                  border: `0.5px solid ${f.accentBorder}`,
                  background: "rgba(0,0,0,0.2)",
                }}>
                  {f.tag}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>

            {/* Number */}
            <p style={{ fontSize: "10px", fontWeight: 600, color: f.accent, letterSpacing: "0.1em", margin: 0, alignSelf:"flex-end", marginTop:"auto", paddingTop:  "0.5rem" }}>
              {f.number}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}