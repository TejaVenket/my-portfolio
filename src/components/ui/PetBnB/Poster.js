import Image from "next/image";

export default function PetBnBPoster({ accent, accentMuted, accentBorder }) {
  const ytUrl = "https://www.youtube.com/shorts/LQjARbYadGU"; // 🔁 swap this

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%" }}>

      {/* ── Section Label ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Project Overview
        </p>
        
      </div>

      {/* ── Main Grid: Poster + Side Content ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

        {/* Left: Poster */}
        <div style={{ position: "relative" }}>
          {/* Glow behind poster */}
          <div style={{
            position: "absolute", inset: "-1px",
            borderRadius: "16px",
            border: `0.5px solid ${accentBorder}`,
            background: accentMuted,
          }} />
          <div style={{
            position: "relative",
            borderRadius: "14px",
            overflow: "hidden",
            aspectRatio: "3/4",
            border: `0.5px solid ${accentBorder}`,
          }}>
            {/* 🔁 Swap src with your actual poster image path */}
            <Image
              src="/images/PetBnB/PetBnB Poster.jpg"
              alt="PetBnB project poster"
              fill
              style={{ objectFit: "cover" }}  
            />
          </div>

          {/* Tag pinned bottom-left of poster */}
          <div style={{
            position: "absolute", bottom: "12px", left: "12px",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            border: `0.5px solid ${accentBorder}`,
            borderRadius: "20px",
            padding: "4px 12px",
            fontSize: "11px",
            color: accent,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            SUTD · 2025
          </div>
        </div>

        {/* Right: Key info + YT CTA */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "1.75rem" }}>

          {/* Headline */}
          <div>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.5rem" }}>
              Research Poster
            </p>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.25,
              margin: "0 0 0.75rem",
            }}>
              The Science Behind the Design
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>
              This poster gives you a bird's-eye view of the project — from the problem space
              and core features to our design iterations and research findings. Watch the short
              video for a quick walkthrough, or read through the poster before diving deeper
              into the case study below.
            </p>
          </div>

          {/* Stat pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Hypothesis", value: "Quick Action UI boosts trust" },
              { label: "Method", value: "A/B Web Experiment · Likert Scale" },
              { label: "Result", value: "Statistically significant uplift" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 14px",
                borderRadius: "10px",
                border: `0.5px solid ${accentBorder}`,
                background: accentMuted,
              }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {label}
                </span>
                <span style={{ fontSize: "12px", color: accent, fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* YouTube Shorts CTA */}
          <a
            href={ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px 18px",
              borderRadius: "14px",
              border: `0.5px solid ${accentBorder}`,
              background: accentMuted,
              textDecoration: "none",
              transition: "background 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={e => e.currentTarget.style.background = `rgba(239,159,39,0.2)`}
            onMouseLeave={e => e.currentTarget.style.background = accentMuted}
          >
            {/* Play icon */}
            <div style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: accent,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="#000" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: "0 0 2px" }}>
                Watch the Shorts that was created by me
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                YouTube · 60 sec walkthrough
              </p>
            </div>
            {/* Arrow */}
            <svg style={{ marginLeft: "auto", flexShrink: 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}