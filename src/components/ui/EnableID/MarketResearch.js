"use client";

import { useState } from "react";
import Image from "next/image";

const REPORT_URL = "#"; // replace with your full report link

const solutions = [
  {
    id: "01",
    name: "UNHCR Verify Plus",
    category: "Identity Verification",
    problem: "Fake or unverifiable refugee documentation. Governments, NGOs, and aid workers need a way to verify whether a refugee card is authentic.",
    existingFeatures: [
        "QR code verification",
        "Refugee Card Identification",
        "Multi-language support",
    ],
    gap: "Only verifies an existing physical card. Does not create a digital identity ecosystem, store records, or help undocumented refugees.",
    opportunity: "Expand identity from a verified refugee card to a portable digital life profile.",
    image: "/images/EnableID/UNHCR_Verify_Plus.png", // replace with "/images/market/unhcr-verify-plus.png"
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
  },
  {
    id: "02",
    name: "UNHCR Turkey",
    category: "Information Portal",
    problem: "Refugees lack overall information about rights, obligations, nearby services, and legal processes.",
    existingFeatures: [
        "Information about legal rights",
        "Service directories",
        "Refugee guidance resources",
    ],
    gap: "Primarily an information portal. Does not digitize identity, verify credentials, or centralize refugee records.",
    opportunity: "Integrate localized service mapping, AI-powered translation, and smart recommendations with a stronger identity core.",
    image:"/images/EnableID/UNHCR_Turkey.png", // replace with "/images/market/unhcr-turkey.png"
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.25)",
  },
  {
    id: "03",
    name: "Family Reconnection Platforms",
    category: "Family Reunification",
    problem: "Families separated during displacement and conflict.",
    existingFeatures: [
        "Manual Database searches",
        "Detailed questionnaires",
        "SMS Notifcations",
        "Hotline support",
    ],
    gap: "Process is still largely manual and text-based, limiting scale and accuracy.",
    opportunity: "AI-powered facial matching automates identification, scales matching, and significantly improves speed — one of the strongest differentiators.",
    image: "/images/EnableID/Family_Reconnection_Platform.png", // replace with "/images/market/family-reconnection.png"
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.08)",
    accentBorder: "rgba(239,159,39,0.25)",
  },    
  {
    id: "04",
    name: "UNHCR Registration Systems",
    category: "Registration & Verification",
    problem: "Duplicate registrations, aid fraud, and inefficient refugee management.",
    existingFeatures: [
        "Biometrics",
        "Interviews",
        "Manual Verification",
        "Registration Kiosks",  
    ],
    gap: "Highly centralised and operationally heavy. Dependent on physical infrastructure; refugees lack ownership of records.",
    opportunity: "A mobile-first digital identity model with remote onboarding, AI verification, and portable decentralised credentials.",
    image: "/images/EnableID/UNHCR_Registration_Systems.png",
    accent: "#E8625A",
    accentMuted: "rgba(232,98,90,0.07)",
    accentBorder: "rgba(232,98,90,0.2)",
  },
  {
    id: "05",
    name: "Language Learning Apps",
    category: "Integration & Language",
    problem: "Language barriers preventing refugee integration.",
    existingFeatures: [
        "Offline phrasebooks",
        "Conversation-based learning",
        "Community exchanges",
        "Peer interaction",
    ],
    gap: "Focuses narrowly on language acquisition without connecting to broader identity or service access.",
    opportunity: "Integrate AI translation, multilingual document scanning, real-time interpretation, and language-assisted onboarding.",
    image: "/images/EnableID/Language_Learning.png",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
  },
  {
    id: "06",
    name: "Talent Beyond Boundaries",
    category: "Employment",
    problem: "Highly skilled refugees cannot prove qualifications or access international labour markets.",
    existingFeatures: [
        "Skill registration",
        "Education history upload",
        "CV upload",
        "Employment matching",
    ],
    gap: "Verification is document-dependent and fragmented. Many refugees lose documents or lack digital identity continuity.",
    opportunity: "Combine verified digital identity, credential storage, AI-assisted verification, and employability in one unified ecosystem.",
    image: "/images/EnableID/Talent_Beyond_Boundaries.png",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
  },
];

function ImagePlaceholder({ accent, accentBorder, accentMuted, label }) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: accentMuted,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      minHeight: "160px",
    }}>
      <div style={{
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        border: `0.5px solid ${accentBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.4">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)", margin: 0 }}>{label}</p>
    </div>
  );
}

export default function MarketResearch({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 2.2 · Market Research
        </p>
      </div>

      {/* Heading + intro + CTA row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "60%" }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Existing Marketplace Solutions
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
            We analysed about ten existing solutions across the refugee aid landscape to examine what each
            solves, where it falls short, and the opportunity our platform can address. This market search needed
            to be done so that we can position our solution in a unique space by learning from these solutions
            and ensure we are building something that adds value to the ecosystem. More research details can be 
            seen under our design workbook's annex section. Below are a few examples of the solutions that fitted
            our research criteria and are relevant to what we wanted to build.
          </p>
        </div>

        {/* Full report CTA */}
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            border: `0.5px solid ${accentBorder}`,
            background: accentMuted,
            color: accent,
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
            transition: "all 0.18s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(25,183,165,0.14)"}
          onMouseLeave={e => e.currentTarget.style.background = accentMuted}
        >
          View Full Market Research
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14L21 3" />
          </svg>
        </a>
      </div>

      {/* Solution cards grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        alignItems: "start",
      }}>
        {solutions.map((s, i) => {
          const isOpen = expanded === i;
          return (
            <div
              key={i}
              style={{
                border: `0.5px solid ${isOpen ? s.accentBorder : "rgba(255,255,255,0.08)"}`,
                borderRadius: "16px",
                overflow: "hidden",
                background: isOpen ? s.accentMuted : "rgba(255,255,255,0.02)",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              {/* Image area */}
              <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                {s.image ? (
                  <Image src={s.image} alt={s.name} fill style={{ objectFit: "cover" }} />
                ) : (
                  <ImagePlaceholder accent={s.accent} accentBorder={s.accentBorder} accentMuted={s.accentMuted} label={`${s.name} screenshot`} />
                )}

                {/* Category badge */}
                <div style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "6px",
                  padding: "3px 8px",
                  border: `0.5px solid ${s.accentBorder}`,
                }}>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: s.accent, letterSpacing: "0.08em" }}>
                    {s.category}
                  </span>
                </div>

                {/* Number badge */}
                <div style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  background: "rgba(0,0,0,0.55)",
                  borderRadius: "6px",
                  padding: "3px 8px",
                }}>
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>
                    {s.id}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "#fff",
                  margin: "0 0 0.5rem 0",
                  lineHeight: 1.3,
                }}>
                  {s.name}
                </h3>

                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: "0 0 1rem 0" }}>
                  {s.problem}
                </p>

                {/* Expand / collapse */}
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: s.accent,
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {isOpen ? "Show less" : "See gap & opportunity"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div style={{
                      padding: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.07)",
                    }}>
                      <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: "0 0 4px 0" }}>
                        Existing Features
                      </p>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0 }}>
                        {s.existingFeatures.join(", ")}
                      </p>
                    </div>
                    <div style={{
                      padding: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.04)",
                      border: "0.5px solid rgba(255,255,255,0.07)",
                    }}>
                      <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: "0 0 4px 0" }}>
                        Gap
                      </p>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0 }}>
                        {s.gap}
                      </p>
                    </div>
                    <div style={{
                      padding: "0.75rem",
                      borderRadius: "10px",
                      background: s.accentMuted,
                      border: `0.5px solid ${s.accentBorder}`,
                    }}>
                      <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: s.accent, margin: "0 0 4px 0" }}>
                        Our Opportunity
                      </p>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                        {s.opportunity}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}