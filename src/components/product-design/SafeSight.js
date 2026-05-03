import Image from "next/image";
import { useState } from "react";
import PersonaTabs from "../ui/SafeSight/PersonaTabs";
import ProblemCards from "../ui/SafeSight/ProblemCards";
import SolutionSection from "../ui/SafeSight/SolutionSection";
import SystemArchitecture from "../ui/SafeSight/SysArch";

const personas = [
  {
    number: "01",
    name: "Operations Lead",
    title: "Senior Management · DSV Tampines",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.08)",
    accentBorder: "rgba(25,183,165,0.25)",
    quote: "I need to know what's happening on the floor without being there 24/7.",
    tags: ["Oversight", "Reporting", "Compliance"],
    needs: [
      "Real-time visibility into safety incidents across all docks",
      "Automated reports to reduce manual documentation overhead",
      "Clear audit trails for compliance and regulatory review",
    ],
    image: null, // replace with "/images/persona-1.jpg"
  },
  {
    number: "02",
    name: "Warehouse Supervisor",
    title: "Floor Supervisor · DSV Tampines",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.25)",
    quote: "By the time I find out something went wrong, it's already too late to act.",
    tags: ["Incident Response", "Team Coordination", "Safety Checks"],
    needs: [
      "Instant alerts when a safety violation is detected on the floor",
      "Simple interface that doesn't add to existing workload",
      "Video evidence to resolve disputes and coach operators",
    ],
    image: null, // replace with "/images/persona-2.jpg"
  },
  {
    number: "03",
    name: "Forklift Operator",
    title: "Floor Operative · DSV Tampines",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.08)",
    accentBorder: "rgba(239,159,39,0.25)",
    quote: "Sometimes I don't even know a rule was broken until I'm pulled aside after.",
    tags: ["Day-to-day Ops", "Safety Awareness", "Feedback"],
    needs: [
      "Clear, non-punitive feedback when a violation occurs",
      "Awareness of rules without disrupting operational flow",
      "Trust that monitoring is about safety, not surveillance",
    ],
    image: null, // replace with "/images/persona-3.jpg"
  },
];



const tags = [
  "Computer Vision", "AI / Machine Learning", "Safety Systems",
  "UI/UX Design", "PowerBI", "End-to-End Product Development", "Problem Solving"
];

const impacts = [
  {
    stat: "98%",
    label: "Reduction in violations",
    sub: "on Dock 5 of the Tampines warehouse",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8.5H20.5L14.5 12.5L17 19L11 15L5 19L7.5 12.5L1.5 8.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      </svg>
    ),
  },
  {
    stat: "5-fig",
    label: "Cost savings for DSV",
    sub: "reduction in operational costs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <circle cx="11" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M6 6V5a5 5 0 0 1 10 0v1" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    stat: "99%",
    label: "Faster response time",
    sub: "incident detection now near-instant",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    stat: "960kg",
    label: "CO₂ saved per year",
    sub: "by reducing need for recrating",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 6.5 4 10c0 4 3.5 7 7 9 3.5-2 7-5 7-9 0-3.5-3-7-7-7z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
        <path d="M11 8v4M9 10l2 2 2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Safesight({ accent, accentMuted, accentBorder }) {
  const [activePersona, setActivePersona] = useState(0);
  const persona = personas[activePersona];
  return (
    <>
      <style>{`
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .impact-card {
          transition: background 0.2s, transform 0.2s;
        }
        .impact-card:hover {
          background: rgba(255,255,255,0.07) !important;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Left: Text */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.75rem" }}>
          Capstone Project · DSV
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          SafeSight
        </h2>
        <p style={{ fontSize: "13px", color: accent, marginBottom: "1.25rem", fontStyle: "italic", opacity: 0.8 }}>
          AI-enabled warehouse monitoring system
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1.75rem" }}>
        SafeSight is an AI-powered warehouse monitoring system that leverages computer vision 
        to detect safety violations involving forklifts and crate handling. Designed as an 
        end-to-end camera solution, it automates incident detection and significantly reduces 
        the time warehouse supervisors spend investigating operational risks.
        This project was developed in collaboration with DSV, where I worked closely with supervisors 
        at their Tampines warehouse to identify root causes of recurring safety issues and design 
        a practical, scalable solution. SafeSight has delivered measurable real-world impact. 
        Since deployment, the system has contributed to a 98% reduction in safety violations at the 
        Tampines facility. Its success has led DSV to engage external vendors to further scale the 
        solution across multiple warehouse docks, demonstrating both its effectiveness and long-term value.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, background: accentMuted, color: accent, letterSpacing: "0.02em" }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem" }}>
            {/* Primary button */}
            <a
                href="https://www.figma.com/design/41xCTOnJgQPy8G5Ns2eSXO/Capstone-DB-Schenker-Frontend?node-id=0-1&t=X0ktCAApL9kOspJd-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                background: accent,
                color: "#0d1117",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                View Figma Page
            </a>

            {/* Secondary button */}
            <a
                href="https://capstoneshowcase.sutd.edu.sg/project/proj-28-dsv-safesight/"
                target="_blank"
                rel="noopener noreferrer"
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
                onMouseEnter={(e) => (e.currentTarget.style.background = accentMuted)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
                View Project Website
            </a>
        </div>
      </div>


      {/* Right: Image */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: accentMuted, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {null ? (
          <Image src="/images/HeroPic.jpg" alt="SafeSight" fill style={{ objectFit: "cover" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>SafeSight Dashboard</p>
        )}
      </div>

      {/* My Role Section — spans both columns */}
      <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
            My Role
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </div>

        <div className="flex items-center" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

          {/* Left: contribution pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { area: "Problem Framing", detail: "Stakeholder research & solution scoping" },
              { area: "Frontend Development", detail: "UI design & iterative prototyping" },
              { area: "Machine Learning", detail: "Dataset building & model training" },
              { area: "Computer Vision", detail: "Rule sets for violation detection" },
              { area: "Deployment", detail: "End-to-end production rollout" },
            ].map((item) => (
              <div
                key={item.area}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.03)",
                  border: `0.5px solid ${accentBorder}`,
                  borderRadius: "10px",
                  padding: "0.75rem 1rem",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{item.area}</span>
                </div>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "right" }}>{item.detail}</span>
              </div>
            ))}
          </div>
          {/* Right: paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              I worked in a multidisciplinary team of seven, where I was one of the primary contributors
              from a computer science background. My role spanned the full lifecycle of the project —
              from early problem framing and solution scoping to final deployment.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              I led the frontend development of the system, translating complex operational workflows
              into intuitive interfaces through multiple iterations of UI design. Beyond the frontend,
              I was also deeply involved in the technical core — building the dataset, training the
              machine learning models, and defining the rule sets that power the computer vision
              system&apos;s ability to detect safety violations.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              This end-to-end involvement allowed me to bridge design, engineering, and AI — ensuring
              the final solution was not only technically robust but also practical for real-world use.
              As you explore further, you&apos;ll see my design thinking process and contributions
              across each stage of the product&apos;s development.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section — spans both columns */}
      <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
            <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
                Real-World Impact
            </p>
        </div>

        {/* Impact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {impacts.map((item, i) => (
            <div
              key={i}
              className="impact-card"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `0.5px solid ${accentBorder}`,
                borderRadius: "14px",
                padding: "1.25rem 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                animation: `countUp 0.4s ease ${i * 0.08}s both`,
              }}
            >
              <span style={{ color: accent, opacity: 0.8 }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 500, color: "#fff", lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.02em" }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.75)", marginBottom: "4px" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>
                  {item.sub}
                </p>
              </div>
              <div style={{ height: "2px", width: "32px", borderRadius: "2px", background: accent, opacity: 0.5, marginTop: "auto" }} />
            </div>
          ))}
        </div>
        {/* ============================================================
          PHASE SECTION 1 - Discovery Phase
          ============================================================ */}
      <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
            <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
                Phase 1 · Discovery        {/* ← change phase number + name */}
            </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </div>
        <PersonaTabs accent={accent} />
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "5rem 0 1rem" }}>
          Understanding the Problem
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8}}>
         Through these interviews, we identified the core problem: 
         the incident resolution process was highly manual and time-intensive, 
         often taking days for warehouse supervisors to complete.
        </p>
        <ProblemCards accentBorder={accentBorder} accentMuted={accentMuted} />
      </div>
      {/* ============================================================
          Phase Block 2 — Solution Ideation and Prototyping
          ============================================================ */}

        <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>
            {/* Section label */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
                <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
                    <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
                        Phase 2 · Solution Ideation and Prototyping        {/* ← change phase number + name */}
                    </p>
                <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
            </div>
            <SolutionSection accent={accent} />
            <SystemArchitecture accent={accent} />
        </div>
      </div>
    </>
  );
}