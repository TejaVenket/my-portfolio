"use client";

import Image from "next/image";

const steps = [
  { number: "1", title: "Camera", sub: "Capture", accent: "#19B7A5" },
  { number: "2", title: "On-device", sub: "Inference", accent: "#19B7A5" },
  { number: "3", title: "Ruleset", sub: "Trigger", accent: "#7F77DD" },
  { number: "4", title: "Event", sub: "Recording", accent: "#7F77DD" },
  { number: "5", title: "Notification", sub: "WhatsApp Alert", accent: "#7F77DD" },
  { number: "6", title: "Dashboard", sub: "Review", accent: "#EF9F27" },
  { number: "7", title: "Reporting", sub: "Closure", accent: "#EF9F27" },
];

export default function SystemArchitecture({ accent = "#19B7A5" }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Section label */}
      <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, marginBottom: "0.75rem" }}>
        System Architecture
      </p>

      {/* Headline + subtext */}
      <div style={{ display: "grid", gap: "3rem", marginBottom: "3rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2 }}>
          End-to-end workflow
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
          SafeSight follows a continuous pipeline from camera capture to supervisor action,
          with every step logged for audit and review.
        </p>
      </div>

      {/* Flow strip */}
      <div style={{ position: "relative", marginBottom: "2.5rem" }}>

        {/* Connecting line */}
        <div style={{
          position: "absolute",
          top: "28px",
          left: "calc(100% / 14)",
          right: "calc(100% / 14)",
          height: "0.5px",
          background: "rgba(255,255,255,0.1)",
          zIndex: 0,
        }} />

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0", position: "relative", zIndex: 1 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>

              {/* Node */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: `0.5px solid ${step.accent}55`,
                background: `${step.accent}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
              }}>
                {/* Outer ring */}
                <div style={{
                  position: "absolute",
                  inset: "-5px",
                  borderRadius: "50%",
                  border: `0.5px solid ${step.accent}22`,
                }} />
                <span style={{ fontSize: "16px", fontWeight: 500, color: step.accent, lineHeight: 1 }}>
                  {step.number}
                </span>
              </div>

              {/* Label */}
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "#fff", margin: "0 0 2px", lineHeight: 1.3 }}>
                  {step.title}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.3 }}>
                  {step.sub}
                </p>
              </div>

              {/* Bottom accent tick */}
              <div style={{ width: "20px", height: "2px", borderRadius: "1px", background: `${step.accent}55` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)", marginBottom: "2rem" }} />

      {/* Software architecture diagram placeholder */}
      <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
        Software Architecture Diagram
      </p>

      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "16px",
        border: "0.5px solid rgba(255,255,255,0.08)",
        background: "white",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Replace null with your image path e.g. "/images/architecture-diagram.png" */}
        {true ? (
          <Image
            src="/images/SafeSight/Software-Arch.jpg"
            alt="Software architecture diagram"
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "12px",
              border: "0.5px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
              </svg>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
              Architecture diagram
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>
              Replace placeholder with your image path
            </p>
          </div>
        )}
      </div>

    </div>
  );
}