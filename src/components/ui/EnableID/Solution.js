"use client";

import Image from "next/image";
import Carousel from "../Carousel";
import MarketResearch from "./MarketResearch";
import SolutionBrainstorming from "./SolutionBrainstorming";
const requirements = [
  {
    number: "01",
    icon: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M15 8h2M15 12h2M5 16h14" />
      </svg>
    ),
    title: "Digital identification app",
    sub: "Core product must function as a fully digital identity application — no physical dependency.",
    tag: "Core requirement",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.08)",
    accentBorder: "rgba(25,183,165,0.25)",
  },
  {
    number: "02",
    icon: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M14 9h4M14 12h4M14 15h2" />
      </svg>
    ),
    title: "Digital ID card for refugees",
    sub: "Each refugee must be issued a digital ID card — serving as verifiable proof of identity.",
    tag: "Core requirement",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.25)",
  },
  {
    number: "03",
    icon: (color) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
        <path d="M5 8l4 4-4 4" />
        <path d="M12 16h7" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="5" r="2" />
        <path d="M19 7v4a7 7 0 01-7 7" />
        <path d="M5 7v1a7 7 0 007 7" />
      </svg>
    ),
    title: "Multilingual support",
    sub: "Must support Burmese and English so refugees can navigate the system independently.",
    tag: "Inclusivity",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.08)",
    accentBorder: "rgba(239,159,39,0.25)",
  },
];


export default function Solution({accent, accentBorder, accentMuted,client = "Tony Tan", org = "Gebirah",phase = "Phase 1 · Problem Scoping"}) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        <p style={{
          fontSize: "22px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Phase 2 · Solution Brainstorming
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Sub-phase label */}
      <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
 
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", width: "60%" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2rem",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.2,
          margin: 0,
        }}>
          Solution Requirements
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          After spending roughly two weeks on stakeholder interviews, background research, 
          and problem scoping, the team worked closely with Tony Tan to define the core 
          requirements that would guide the direction of our solution. These requirements 
          became the foundation for our design and development decisions, ensuring that the 
          system addressed both the practical challenges refugees face and the operational 
          needs of organisations supporting them.
        </p>

      </div>
 
      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
        {requirements.map((req) => (
          <div
            key={req.number}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Top row: icon + number */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: req.accentMuted,
                border: `0.5px solid ${req.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {req.icon(req.accent)}
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: req.accent }}>
                {req.number}
              </span>
            </div>
 
            {/* Divider */}
            <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)" }} />
 
            {/* Text */}
            <div>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff", margin: "0 0 6px" }}>
                {req.title}
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>
                {req.sub}
              </p>
            </div>
 
            {/* Tag */}
            <span style={{
              display: "inline-block",
              fontSize: "11px",
              padding: "3px 10px",
              borderRadius: "20px",
              background: req.accentMuted,
              border: `0.5px solid ${req.accentBorder}`,
              color: req.accent,
              letterSpacing: "0.02em",
              alignSelf: "flex-start",
              marginTop: "auto",
            }}>
              {req.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
        <MarketResearch accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
        <SolutionBrainstorming accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
        {/* Initial brainstorming and concept development */}
        <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", marginTop: "4rem", width: "60%" }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2rem",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              margin: 0,
            }}>
              Solution Brainstorming and Concept Development
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
              Our market research revealed a major gap in the refugee technology ecosystem. 
              There is no comprehensive, refugee-centered digital platform that combines 
              identity, verification, employability, accessibility, and family reconnection 
              into one scalable solution.
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Description */}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
                Building on the defined constraints and design principles, I developed an initial
                low-fidelity concept to establish the overall structure of the User Portal. This
                iteration focused on prioritising simplicity and immediate usability by designing
                a single, centralised landing page where all key interactions could take place
                without additional navigation.
              </p>

              {/* Key features introduced */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
                  Key Features
                </p>
                {[
                  { feature: "Mini dashboard", desc: "Quick access to key KPIs at a glance" },
                  { feature: "System log", desc: "Filterable by date, time, type, and location" },
                  { feature: "Incident drawer", desc: "Expandable panel with metadata and video clip" },
                ].map((item) => (
                  <div key={item.feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: accent,
                      flexShrink: 0,
                      marginTop: "7px",
                    }} />
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                      <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.feature}</span>
                      {" — "}{item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Goal callout */}
              <div style={{
                borderLeft: `2px solid ${accent}`,
                paddingLeft: "1rem",
                marginTop: "0.25rem",
              }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  Aimed at defining the core interaction model and information hierarchy, ensuring
                  supervisors could efficiently scan, investigate, and act on incidents within a
                  unified interface.
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "6/3",
                    overflow: "hidden",
                }}>
                    <Image
                    src="/images/EnableID/Brainstorming.png"
                    alt="Iteration 1 — low fidelity prototype"
                    fill
                    style={{ objectFit: "contain", borderRadius: "20px" }}
                    />
                </div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)",fontStyle: "italic", textAlign: "center" }}>
                    Low-fidelity wireframe using AutoCAD
                </p>
            </div>
          </div>
        </div>              
  </div>
  );
}