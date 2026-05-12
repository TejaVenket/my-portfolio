"use client";

import Image from "next/image";

const FIGMA_URL = "#"; // replace with your Figma brainstorming link
const BRAINSTORM_IMAGE = null; // replace with "/images/EnableID/Brainstorming.png"

const timeline = [
  { weeks: "Weeks 1–5", label: "Problem Scoping", desc: "Stakeholder research, ideation, and problem definition", muted: true },
  { weeks: "Weeks 6–13", label: "Build & Test", desc: "Prototyping, implementation, and testing", muted: false },
];

const mustHave = [
  { number: "01", name: "Digital ID Card", desc: "A portable digital identity profile for refugees." },
  { number: "02", name: "Document Upload System", desc: "Local file uploads and an in-app document scanning feature." },
  { number: "03", name: "OCR-Based Extraction", desc: "Automatically extracts key information from uploaded documents — date of birth, blood type, education, and more." },
  { number: "04", name: "Notification System", desc: "Allows refugees to receive updates on document approval and verification status." },
];

const goodToHave = [
  { number: "01", name: "Facial Recognition Login", desc: "Secure login using facial authentication." },
  { number: "02", name: "Family Reconnection", desc: "Upload photos of missing relatives and use facial matching to reconnect separated families." },
  { number: "03", name: "AI Chatbot Assistant", desc: "Guidance on using the app and answering refugee-related questions about UNHCR services." },
];

const evaluationCriteria = [
  "Does this feature directly address the problem statement?",
  "Does it provide meaningful value to refugees?",
  "Is it unique compared to existing market solutions?",
  "Can it realistically be implemented within our timeframe?",
];

export default function SolutionBrainstorming({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, margin: 0 }}>
          Phase 1.5 · Solution Brainstorming & Concept Development
        </p>
      </div>

      {/* ── Section heading ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "60%", marginBottom: "3rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          From Ideas to a Focused Scope
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          With only 13 weeks total — and 5 already committed to research — feasibility became
          just as important as innovation. Here is how we went from over 30 ideas to a
          focused, achievable feature set.
        </p>
      </div>

      {/* ── Row 1: Timeline constraint + brainstorm image ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>

        {/* Timeline card */}
        <div style={{
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "2rem",
          background: "rgba(255,255,255,0.02)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            Project Timeline · 13 Weeks
          </p>

          {/* Visual timeline bar */}
          <div style={{ position: "relative" }}>
            <div style={{ height: "6px", borderRadius: "99px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ width: "38%", height: "100%", background: "rgba(255,255,255,0.15)", borderRadius: "99px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Week 1</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Week 13</span>
            </div>
          </div>

          {/* Two blocks */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {timeline.map((t, i) => (
              <div key={i} style={{
                padding: "1rem",
                borderRadius: "12px",
                border: `0.5px solid ${t.muted ? "rgba(255,255,255,0.07)" : accentBorder}`,
                background: t.muted ? "rgba(255,255,255,0.03)" : accentMuted,
              }}>
                <p style={{ fontSize: "10px", fontWeight: 600, color: t.muted ? "rgba(255,255,255,0.25)" : accent, letterSpacing: "0.08em", margin: "0 0 4px 0" }}>
                  {t.weeks}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 500, color: t.muted ? "rgba(255,255,255,0.45)" : "#fff", margin: "0 0 4px 0" }}>
                  {t.label}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.5, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Body copy */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>
            Each team member brainstormed independently before consolidating ideas in Figma.
            After our first ideation session we had generated over{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>30 potential features</span>,
            which we then critically reviewed against four key questions.
          </p>

          {/* Evaluation criteria */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {evaluationCriteria.map((q, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "7px" }} />
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>{q}</p>
              </div>
            ))}
          </div>

          {/* Figma CTA */}
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: `0.5px solid ${accentBorder}`,
              background: accentMuted,
              color: accent,
              fontSize: "12px",
              fontWeight: 500,
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            View Figma brainstorm
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" /><path d="M10 14L21 3" />
            </svg>
          </a>
        </div>

        {/* Brainstorm image */}
        <div style={{
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          minHeight: "360px",
          background: accentMuted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {BRAINSTORM_IMAGE ? (
            <Image src={BRAINSTORM_IMAGE} alt="Brainstorming session" fill style={{ objectFit: "cover" }} />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.3">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Brainstorming / Figma image</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>BRAINSTORM_IMAGE = "/images/..."</p>
            </div>
          )}
          <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.45)", borderRadius: "8px", padding: "4px 10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: accent, letterSpacing: "0.08em" }}>Ideation session</span>
          </div>
        </div>
      </div>

      {/* ── Row 2: process note spanning full width ── */}
      <div style={{
        border: "0.5px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        padding: "1.5rem 2rem",
        background: "rgba(255,255,255,0.015)",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
      }}>
        <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5">
            <path d="M9 12l2 2 4-4" /><path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z" />
          </svg>
        </div>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>
          Through several rounds of discussion and refinement, we narrowed 30+ ideas to{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>seven key features</span>, each evaluated on strengths, weaknesses, potential impact, and a rough execution plan — including research into APIs, AI services, and technical feasibility. Features were then scored{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>1–10</span> across value, feasibility, and priority.
        </p>
      </div>

      {/* ── Row 3: Must-have + Good-to-have ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>

        {/* Must-have */}
        <div style={{
          border: `0.5px solid ${accentBorder}`,
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <div style={{ padding: "1.25rem 1.5rem", borderBottom: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent }} />
            <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: accent, margin: 0 }}>
              Must-Have Features
            </p>
          </div>
          <div style={{ padding: "0 1.5rem" }}>
            {mustHave.map((f, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "1rem 0",
                borderBottom: i < mustHave.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <span style={{ fontSize: "10px", fontWeight: 600, color: accent, letterSpacing: "0.08em", flexShrink: 0, paddingTop: "2px", width: "20px" }}>{f.number}</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.8)", margin: "0 0 2px 0" }}>{f.name}</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Good-to-have */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{
            border: "0.5px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
            flex: 1,
          }}>
            <div style={{ padding: "1.25rem 1.5rem", borderBottom: "0.5px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
              <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                Good-to-Have Features
              </p>
            </div>
            <div style={{ padding: "0 1.5rem" }}>
              {goodToHave.map((f, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "1rem 0",
                  borderBottom: i < goodToHave.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", flexShrink: 0, paddingTop: "2px", width: "20px" }}>{f.number}</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.6)", margin: "0 0 2px 0" }}>{f.name}</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway callout */}
          <div style={{
            borderLeft: `2px solid ${accent}`,
            paddingLeft: "1rem",
            padding: "1rem 1rem 1rem 1.25rem",
            borderRadius: "0 12px 12px 0",
            border: `0.5px solid ${accentBorder}`,
            borderLeft: `2px solid ${accent}`,
            background: accentMuted,
          }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
              Time became the defining factor. Categorising features into must-have and
              good-to-have ensured the core product remained achievable while still leaving
              room for innovation if time permitted.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}