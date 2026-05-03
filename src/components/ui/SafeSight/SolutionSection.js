"use client";

import { useState } from "react";

const pillars = [
  {
    number: "01",
    name: "Hardware",
    tag: "Edge compute",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.25)",
    icon: (color) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M8 6V4M16 6V4M2 10h20" />
      </svg>
    ),
    description:
      "Physical shell with embedded compute. Raspberry Pi paired with two cameras and a HAILO AI accelerator, mounted directly in the warehouse environment.",
    chips: ["Raspberry Pi", "Dual cameras", "HAILO accelerator", "Dock mount"],
  },
  {
    number: "02",
    name: "Software",
    tag: "CV model + alerts",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.25)",
    icon: (color) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    description:
      "Synthetic data generation and annotation pipeline feeding a YOLO-based OBB model. Rule-based algorithms flag violations and trigger instant WhatsApp notifications to supervisors.",
    chips: ["YOLO OBB", "Synthetic data", "WhatsApp alerts", "Rule-based logic"],
  },
  {
    number: "03",
    name: "User Portal",
    tag: "Review + analytics",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.07)",
    accentBorder: "rgba(239,159,39,0.25)",
    icon: (color) => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    description:
      "A clean incident review interface for supervisors, with an embedded Power BI dashboard providing warehouse performance analytics across recorded violations.",
    chips: ["Incident review", "Power BI", "Analytics", "Supervisor view"],
  },
];

const stats = [
  {
    accent: "#19B7A5",
    value: "Edge",
    label: "On-device inference — no cloud latency",
  },
  {
    accent: "#7F77DD",
    value: "Real-time",
    label: "Instant WhatsApp alerts on detection",
  },
  {
    accent: "#EF9F27",
    value: "Full audit",
    label: "Every violation logged and reviewable",
  },
];

export default function SolutionSection({ accent = "#19B7A5" }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

      {/* Section label */}
      <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, marginBottom: "0.75rem" }}>
        Our Solution
      </p>

      {/* Headline + subtext */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          In collaboration with stakeholders, we designed an end-to-end solution 
          built on three core components: a real-time AI camera system for on-site 
          detection, a backend pipeline for processing incidents and sending automated 
          WhatsApp alerts, and a centralized user portal that enables supervisors to 
          efficiently monitor and resolve violations.
        </p>
      </div>

      {/* Expandable pillars */}
      <div style={{ display: "flex", alignItems: "stretch", marginBottom: "1.25rem", borderRadius: "16px", overflow: "hidden", border: "0.5px solid rgba(255,255,255,0.08)" }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              flex: active === i ? 2.2 : 1,
              background: active === i ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
              borderRight: i < pillars.length - 1 ? "0.5px solid rgba(255,255,255,0.08)" : "none",
              cursor: "pointer",
              transition: "flex 0.3s ease, background 0.2s ease",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{ padding: "1.4rem 1.25rem 1rem", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)" }}>
                {p.number}
              </span>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: active === i ? p.accentMuted : "rgba(255,255,255,0.04)",
                border: `0.5px solid ${active === i ? p.accentBorder : "rgba(255,255,255,0.08)"}`,
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}>
                {p.icon(active === i ? p.accent : "rgba(255,255,255,0.3)")}
              </div>
              <div>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#fff", margin: "0 0 2px" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "11px", color: active === i ? p.accent : "rgba(255,255,255,0.3)", transition: "color 0.2s", margin: 0 }}>
                  {p.tag}
                </p>
              </div>
            </div>

            {/* Expandable body */}
            <div style={{
              padding: "0 1.25rem 1.4rem",
              maxHeight: active === i ? "300px" : "0px",
              opacity: active === i ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.3s ease, opacity 0.25s ease",
            }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "1rem" }}>
                {p.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {p.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      border: `0.5px solid ${p.accentBorder}`,
                      background: p.accentMuted,
                      color: p.accent,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}