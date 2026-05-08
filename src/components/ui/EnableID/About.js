"use client";

import Image from "next/image";

const WEBSITE_URL = "https://gebirah.com"; // replace with actual URL
const IMAGE_SRC = null; // replace with "/images/gebirah.jpg"

const stats = [
  { value: "2022", label: "Founded" },
  { value: "Global", label: "Reach" },
  { value: "Crisis", label: "Focus" },
];

export default function GebirahAbout({ accent }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
      {/* Main grid: text right, image left */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

        <div style={{ position: "relative" }}>

          {/* Image container */}
          <div style={{
            position: "relative",
            aspectRatio: "6/5",
            borderRadius: "16px",
            overflow: "hidden",
            border: "0.5px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {true ? (
              <Image
                src="/images/EnableID/Gebirah.png"
                alt="Gebirah — humanitarian technology"
                fill
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  border: "0.5px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Gebirah image</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>IMAGE_SRC = "/images/..."</p>
              </div>
            )}
          </div>

          {/* Decorative corner accent */}
          <div style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            width: "40px",
            height: "40px",
            borderTop: `1px solid ${accent}44`,
            borderRight: `1px solid ${accent}44`,
            borderRadius: "0 6px 0 0",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-8px",
            left: "-8px",
            width: "40px",
            height: "40px",
            borderBottom: `1px solid ${accent}44`,
            borderLeft: `1px solid ${accent}44`,
            borderRadius: "0 0 0 6px",
            pointerEvents: "none",
          }} />

        </div>

        {/* Right: all text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          {/* Org name + tagline */}
          <div>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, marginBottom: "0.5rem" }}>
                About the client
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", fontWeight: 400, color: "#fff", lineHeight: 1.15, margin: "0 0 0.5rem" }}>
              Gebirah
            </h2>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em", margin: 0 }}>
              Humanitarian Aid 
            </p>
          </div>

          {/* Stat strip */}
          <div style={{ display: "flex", gap: "0", borderRadius: "12px", overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.07)" }}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: "0.9rem 1rem",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.03)",
                  borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.07)" : "none",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "15px", fontWeight: 500, color: accent, margin: "0 0 2px" }}>{s.value}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Origin story */}
          <div>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "0.6rem" }}>
              Origin
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
              Gebirah was founded in response to the humanitarian crisis caused by the Russia–Ukraine
              war in 2022 — driven by a simple but urgent goal: to empower ordinary people to help
              one another more effectively during times of crisis.
            </p>
          </div>

          {/* The gap they fill */}
          <div>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "0.6rem" }}>
              The gap they fill
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
              Large-scale relief efforts often require time, funding, coordination, and political
              approval before support can reach those in need. In the critical early stages of a
              crisis, people are left relying on fragmented community systems that can become
              chaotic and difficult to navigate. Gebirah envisioned technology as a tool for
              immediate, decentralised humanitarian assistance.
            </p>
          </div>

          {/* Mission */}
          <p style={{
            fontSize: "14px",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.85,
            margin: 0,
            paddingLeft: "1rem",
            borderLeft: `2px solid ${accent}`,
            borderRadius: 0,
          }}>
            Gebirah&apos;s broader mission is to
            create scalable humanitarian solutions capable of supporting communities facing crises
            around the world.
          </p>

          {/* CTA button */}
          <div>
            <a
              href= "https://www.gebirah.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.65rem 1.25rem",
                borderRadius: "10px",
                background: accent,
                color: "#0d1117",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Visit Gebirah
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a>
          </div>

        </div>
        
      </div>
    </div>
  );
}
 