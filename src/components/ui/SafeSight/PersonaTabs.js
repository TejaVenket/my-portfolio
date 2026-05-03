"use client";

import { useState } from "react";
import Image from "next/image";

const personas = [
  {
    number: "01",
    name: "Operations Lead",
    title: "Senior Management · DSV Tampines",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.08)",
    accentBorder: "rgba(25,183,165,0.25)",
    quote: "I am looking for a way to reduce my workload and stop spending hours on investigating incidents.",
    tags: ["Oversight", "Reporting", "Compliance"],
    needs: [
      "Receive immediate alerts when violations occur",
      "Reduce CCTV investigation time drastically",
      "Improve reliability of incident data & summaries",
      "Streamline reporting workflow",
    ],
    image: "/images/User Persona Louise new.png", // replace with "/images/persona-1.jpg"
  },
  {
    number: "02",
    name: "Warehouse Supervisor",
    title: "Floor Supervisor · DSV Tampines",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.25)",
    quote: "I am looking for a way to reduce my workload and stop spending hours on investigating incidents.",
    tags: ["Incident Response", "Team Coordination", "Safety Checks"],
    needs: [
      "Be notified of accidents instantly",
      "Reduce time spent on CCTV investigation",
      "Simplify the process of giving feedback to operators",
      "Improve clarity and evidence for toolbox meetings",
    ],
    image: "/images/User Persona Supervisor.png", // replace with "/images/persona-2.jpg"
  },
  {
    number: "03",
    name: "Forklift Operator",
    title: "Floor Operative · DSV Tampines",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.08)",
    accentBorder: "rgba(239,159,39,0.25)",
    quote: "I am trying my best to maintain safety while keeping operations running smoothly.",
    tags: ["Day-to-day Ops", "Safety Awareness", "Feedback"],
    needs: [
      "Keeping operations efficient and predictable",
      "Maintaining safety for himself and others",
      "Reducing unnecessary disruptions or confusion",
      "Getting home on time after a long commute",
    ],
    image: "/images/User Persona Operator.png", // replace with "/images/persona-3.jpg"
  },
];

export default function PersonaTabs({ accent }) {
  const [activePersona, setActivePersona] = useState(0);
  const persona = personas[activePersona];

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "2.5rem 0 1rem" }}>
          User Personas
        </h2>
      </div>

      {/* Intro text */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
          At the start of the project, requirements were largely undefined. To address this, my team
          and I led a structured discovery phase to identify the root causes of operational issues
          and define a clear problem scope. Over several weeks, I took a lead role in client-facing
          research, conducting on-site interviews with warehouse supervisors and forklift operators
          at DSV.
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
          Drawing from my prior UX experience at NCS, I guided the interview process — framing key
          questions around workflows, incident resolution, and day-to-day pain points. Through this
          research, we gathered insights across multiple user groups and translated them into three
          key personas that became foundational in shaping the direction of the solution.
        </p>
      </div>

      {/* Persona tab selectors */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "1.5rem" }}>
        {personas.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePersona(i)}
            style={{
              background: activePersona === i ? p.accentMuted : "rgba(255,255,255,0.03)",
              border: `0.5px solid ${activePersona === i ? p.accentBorder : "rgba(255,255,255,0.08)"}`,
              borderRadius: "10px",
              padding: "0.6rem 1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: 600, color: activePersona === i ? p.accent : "rgba(255,255,255,0.3)", letterSpacing: "0.08em" }}>
              {p.number}
            </span>
            <span style={{ fontSize: "13px", fontWeight: 500, color: activePersona === i ? "#fff" : "rgba(255,255,255,0.4)" }}>
              {p.name}
            </span>
          </button>
        ))}
      </div>

      {/* Active persona card */}
      <div
        key={activePersona}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2.5rem",
          background: "rgba(255,255,255,0.02)",
          border: `0.5px solid ${persona.accentBorder}`,
          borderRadius: "16px",
          overflow: "hidden",
          animation: "fadeUp 0.3s ease both",
        }}
      >
        {/* Left: image */}
        <div style={{ position: "relative", aspectRatio: "14/9", background: persona.accentMuted, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px" }}>
          {persona.image ? (
            <Image src={persona.image} alt={persona.name} fill style={{ objectFit: "cover" }} />
          ) : (
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>{persona.name} image</p>
          )}
          <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.5)", borderRadius: "8px", padding: "4px 10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: persona.accent, letterSpacing: "0.1em" }}>
              {persona.number}
            </span>
          </div>
        </div>

        {/* Right: content */}
        <div style={{ padding: "2rem 2rem 2rem 0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          <div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>
              {persona.name}
            </h3>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em" }}>
              {persona.title}
            </p>
          </div>

          {/* Pull quote */}
          <p style={{ fontStyle: "italic", fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, borderLeft: `2px solid ${persona.accent}`, paddingLeft: "1rem", margin: 0 }}>
            &ldquo;{persona.quote}&rdquo;
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {persona.tags.map((t) => (
              <span key={t} style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", border: `0.5px solid ${persona.accentBorder}`, background: persona.accentMuted, color: persona.accent, letterSpacing: "0.02em" }}>
                {t}
              </span>
            ))}
          </div>

          {/* Needs */}
          <div>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginBottom: "0.75rem" }}>
              Key Needs
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {persona.needs.map((need, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: persona.accent, flexShrink: 0, marginTop: "7px" }} />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>{need}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}