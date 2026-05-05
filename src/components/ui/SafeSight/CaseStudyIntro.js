import Image from "next/image";
import Carousel from "../Carousel";

const mySlides = [
  {
    image: "/images/SafeSight/Inspo 1.png", 
    label: "Precedent 01",
    caption: "Layout inspiration — incident table structure",
  },
  {
    image: "/images/SafeSight/Inspo 2.png", 
    label: "Precedent 02",
    caption: "Dashboard card layout & KPI hierarchy",
  },
  {
    image: "/images/SafeSight/Inspo 3.png", 
    label: "Precedent 03",
    caption: "Severity visual cues & colour language",
  },
];
  
export default function CaseStudyIntro({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
 
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
          Case Study
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>
 
      {/* Text block — two columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
            This case study focuses specifically on the UI/UX product design and frontend development
            behind SafeSight, covering the design decisions, thought processes, and iterations that
            shaped the user interface.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
            The walkthrough highlights my end-to-end design workflow — from early AutoCAD concepts,
            to interface exploration in Figma, through to the final high-fidelity React implementation
            deployed as part of the production system.
          </p>
        </div>
 
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1.5rem" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
            As my contributions extended beyond the interface layer into backend architecture and
            machine learning development, a separate technical deep dive is available below for those
            interested in exploring the engineering behind SafeSight&apos;s detection pipeline and AI
            infrastructure.
          </p>
 
          {/* Technical deep dive button */}
          <div>
            <a
              href="#technical-deep-dive"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                background: "transparent",
                border: `0.5px solid ${accentBorder}`,
                color: accent,
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = accentMuted}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              View Technical Deep Dive
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
 
      {/* Browser chrome dashboard reveal */}
      <div style={{ position: "relative" }}>
 
        {/* Glow effect */}
        <div style={{
          position: "absolute",
          inset: 0,
          top: "20%",
          borderRadius: "24px",
          background: `radial-gradient(ellipse at 50% 80%, ${accent}22 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 0,
        }} />
 
        {/* Browser window frame */}
        <div style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "14px",
          overflow: "hidden",
          border: `0.5px solid ${accentBorder}`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)`,
        }}>
 
          {/* Browser top bar */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            padding: "0.65rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            {/* Traffic light dots */}
            <div style={{ display: "flex", gap: "6px" }}>
              {["#FF5F57", "#FEBC2E", "#28C840"].map((color, i) => (
                <div key={i} style={{ width: "11px", height: "11px", borderRadius: "50%", background: color, opacity: 0.8 }} />
              ))}
            </div>
 
            {/* Fake URL bar */}
            <div style={{
              flex: 1,
              maxWidth: "360px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.05)",
              border: "0.5px solid rgba(255,255,255,0.06)",
              borderRadius: "6px",
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1.5" y="4.5" width="7" height="5" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                <path d="M3 4.5V3a2 2 0 0 1 4 0v1.5" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
              </svg>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.01em" }}>
                safesight.dsv.com/dashboard
              </span>
            </div>
          </div>
 
          {/* Dashboard image */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            background: "rgba(255,255,255,0.02)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {true ? (
              <Image
                src="/images/Dashboard.jpg"
                alt="SafeSight dashboard"
                fill
                style={{ objectFit: "contain" }}
              />
              
            ) : (
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.15)", margin: 0 }}>
                  SafeSight Dashboard
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.08)", marginTop: "6px" }}>
                  Replace null with true once your image is ready
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Design Constraints & Requirements */}
      <div style={{ marginTop: "4rem" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginTop: "2rem" }}>
            Design Constraints and Restrictions
          </h2>
        </div>

        {/* Intro paragraph */}
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "70ch" }}>
          The design of the User Portal was shaped by operational constraints and stakeholder needs. Essentially
          functioning as a centralized, all-in-one platform where warehouse supervisors could efficiently
          track and manage incidents without relying on fragmented tools or manual processes.
        </p>

        {/* Requirement cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "1.5rem" }}>

          {[
            {
              label: "Core Purpose",
              title: "Centralized incident hub",
              desc: "Capture, organize, and surface detected violations alongside relevant metadata — replacing fragmented manual workflows.",
              pills: [],
            },
            {
              label: "Data Requirements",
              title: "Incident metadata",
              desc: "Each violation record surfaces the key fields identified through stakeholder discussions.",
              pills: ["Timestamp", "Violation type", "Location", "Severity"],
            },
            {
              label: "Critical Usability",
              title: "Video clip per incident",
              desc: "Each incident includes a short video clip so supervisors can review violations instantly — without manually scrubbing through CCTV footage.",
              pills: [],
            },
            {
              label: "Analytics Layer",
              title: "Power BI integration",
              desc: "An embedded Power BI dashboard surfaces KPIs and performance trends, enabling supervisors to monitor warehouse health and make data-driven decisions.",
              pills: [],
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `0.5px solid ${accentBorder}`,
                borderRadius: "12px",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div>
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "6px" }}>
                  {card.label}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 500, color: "#fff", margin: 0 }}>
                  {card.title}
                </p>
              </div>
              <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>
                {card.desc}
              </p>
              {card.pills.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {card.pills.map((pill) => (
                    <span
                      key={pill}
                      style={{
                        fontSize: "11px",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        background: accentMuted,
                        border: `0.5px solid ${accentBorder}`,
                        color: accent,
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing callout */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
            From the outset, I positioned the User Portal as the operational backbone of the AI camera system —
            a single source of truth that supervisors could trust, rather than a bolt-on reporting tool.
          </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginTop: "2rem" }}>
            Design Constraints and Restrictions
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "24px", marginBottom: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "1rem" }}>
            To inform the design approach, I analysed patterns from operational dashboards across
            logistics monitoring systems, security platforms, and incident management tools. I used
            Dribbble for inspiration on different layouts to experiment with. This helped me to establish
            a set of UI elements that I believe supported DSV's operational workflow.
          </p>
            {[
              { label: "Core Incident Metadata", desc: "Time, location, violation type, severity prioritised in the primary view" },
              { label: "Embedded Video Evidence", desc: "Short contextual clips included directly within incidents" },
              { label: "Integrated Notifications", desc: "Aligned with DSV's existing WhatsApp alert workflows" },
              { label: "Editable Case Fields", desc: "Management inputs for operator ID, root cause, and actions taken" },
              { label: "Activity Logs", desc: "Combined system and user-generated logs for full traceability" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "7px" }} />
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{item.label}</span>
                  {" — "}{item.desc}
                </p>
              </div>
            ))}
          </div>
          <Carousel slides={mySlides} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder}/>
          {/* ── Design Principles ── */}
        <div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Design Principles
            </h2>
    
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "70ch" }}>
            To ensure the system was usable in a fast-paced warehouse environment, I grounded the
            interface design in four key principles:
            </p>
        </div>
        {/* Numbered table-row layout */}
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", marginTop: "2rem" }}>
          {[
            {
              number: "01",
              principle: "Simplicity",
              tag: "Navigation",
              desc: "Reduced navigation depth so that critical information is surfaced immediately on the main view, minimising time spent navigating between screens.",
            },
            {
              number: "02",
              principle: "Clarity",
              tag: "Visual cues",
              desc: "Structured incident data in a table format with clear severity-based visual cues, enabling quick scanning and prioritisation.",
            },
            {
              number: "03",
              principle: "Modularity",
              tag: "Information architecture",
              desc: "Balanced high-level insights and detailed analysis by introducing summary dashboard cards alongside deeper analytics accessible through secondary views.",
            },
            {
              number: "04",
              principle: "Traceability",
              tag: "Accountability",
              desc: "Designed each incident as a complete record, combining system-generated logs with editable fields for management input to support accountability and post-incident review.",
            },
          ].map((item) => (
            <div
              key={item.number}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                borderBottom: "0.5px solid rgba(255,255,255,0.07)",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {/* Number column */}
              <div style={{
                padding: "1.5rem 1rem 1.5rem 0",
                fontSize: "11px",
                fontWeight: 500,
                color: accent,
                letterSpacing: "0.1em",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                borderRight: "0.5px solid rgba(255,255,255,0.07)",
              }}>
                {item.number}
              </div>
 
              {/* Content column */}
              <div style={{ padding: "1.5rem 0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 500, color: "#fff" }}>
                    {item.principle}
                  </span>
                  <span style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "20px",
                    background: "rgba(25,183,165,0.1)",
                    border: `0.5px solid ${accentBorder}`,
                    color: accent,
                  }}>
                    {item.tag}
                  </span>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0, maxWidth: "52ch" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>  
           
      </div>

    </div> 
  );
}
