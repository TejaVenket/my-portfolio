"use client";

import { useEffect, useRef, useState } from "react";

// Default phases — override by passing a `phases` prop
// Eg: how to use in a page:
{/* <PhasesContents
  accent="#7F77DD"
  phases={[
    { number: "01", label: "Phase 1", title: "Discovery & Research" },
    { number: "02", label: "Phase 2", title: "Design Sprints" },
    { number: "03", label: "Phase 3", title: "Build & Test" },
  ]}
/> */}

const DEFAULT_PHASES = [
  { number: "01", label: "Phase 1", title: "Problem Scoping" },
  { number: "02", label: "Phase 2", title: "Solution Brainstorming" },
  { number: "03", label: "Phase 3", title: "Prototyping" },
  { number: "04", label: "Phase 4", title: "Final Deployed Prototype" },
];

export default function PhasesContents({ accent, phases = DEFAULT_PHASES }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ gridColumn: "1 / -1", marginTop: "1rem", overflow: "hidden" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
        <p style={{
            fontSize: "22px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: accent,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
        }}>
            Project phases
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Phase rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {phases.map((phase, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.1rem 0",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-60px)",
              transition: `opacity 2s ease ${i * 0.5}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.5}s`,
            }}
          >
            {/* Number */}
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: accent,
              opacity: 0.7,
              width: "24px",
              flexShrink: 0,
            }}>
              {phase.number}
            </span>

            {/* Dot */}
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: accent, opacity: 0.4, flexShrink: 0 }} />

            {/* Label */}
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em", width: "80px", flexShrink: 0 }}>
              {phase.label}
            </span>

            {/* Title */}
            <span style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
            }}>
              {phase.title}
            </span>

            {/* Trailing line */}
            <div style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(255,255,255,0.05)",
              opacity: visible ? 1 : 0,
              transition: `opacity 0.4s ease ${i * 0.12 + 0.3}s`,
            }} />

            {/* Phase arrow */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              style={{
                opacity: visible ? 0.4 : 0,
                transition: `opacity 0.4s ease ${i * 0.12 + 0.4}s`,
                flexShrink: 0,
              }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}