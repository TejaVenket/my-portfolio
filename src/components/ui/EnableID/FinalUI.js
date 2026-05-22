import Image from "next/image";
import { useState } from "react";

import WebScreen from "../WebScreen";
import MobileScreen from "../MobileScreen";

const features = [
  {
    number: "01",
    name: "Digital ID Card",
    desc: "A portable digital identity profile for refugees.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="8" cy="12" r="2" />
        <path d="M13 10h4M13 14h3" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Document Upload System",
    desc: "Local file uploads and an in-app document scanning feature.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "OCR-Based Extraction",
    desc: "Automatically extracts key information from documents — date of birth, blood type, education, and more.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 12h6M9 10h2M9 14h4" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Notification System",
    desc: "Refugees receive updates on document approval and verification status in real time.",
    tag: "Must-Have",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Facial Recognition Login",
    desc: "Secure login using facial authentication, removing the need for passwords.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M9 9.5C9.5 9 10.2 8.5 12 8.5s2.5.5 3 1M9 14.5c.5.5 1.2 1 3 1s2.5-.5 3-1" />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Family Reconnection",
    desc: "Upload photos of missing relatives and use automated facial matching to reconnect separated families.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "07",
    name: "AI Chatbot Assistant",
    desc: "Guidance on using the app and answering refugee-related questions about UNHCR services and processes.",
    tag: "Good-to-Have",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
];

const SectionLabel = ({ label, accent, accentBorder, accentMuted }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <span style={{
      fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
      color: accent, background: accentMuted, border: `0.5px solid ${accentBorder}`,
      borderRadius: "20px", padding: "2px 10px",
    }}>
      {label}
    </span>
    <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
  </div>
);

const improvements = [
  {
    number: "01",
    title: "Landing Page",
    summary: "Horizontal split layout + hamburger menu on mobile",
    body: (accent) => (
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
        The layout was refined to a <span style={{ color: "#fff", fontWeight: 500 }}>horizontal split</span> — digital
        identity card on the left, feature services on the right. This gave each element its own visual space and made
        the core services more <span style={{ color: "#fff", fontWeight: 500 }}>distinct and immediately scannable</span>.
        On mobile, the global header was replaced with a{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>hamburger menu</span> to keep the interface clean on smaller screens.
      </p>
    ),
  },
  {
    number: "02",
    title: "Documents Manager",
    summary: "Dedicated page with category tabs and inline actions",
    body: (accent) => (
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
        Moved to a <span style={{ color: "#fff", fontWeight: 500 }}>dedicated page</span>, creating a clearer separation
        of purpose away from the digital identity card.{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>Category tabs</span> (Health, Career, Family, Education,
        Finance, Property) sit along the top for flat, intuitive navigation, while{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>upload and scan actions</span> are positioned on the right —
        accessible without dominating the view.
      </p>
    ),
  },
  {
    number: "03",
    title: "Verification Status Filter",
    summary: "Filter by status directly within the documents manager",
    body: (accent) => (
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
        The most meaningful addition. Users can now filter uploaded documents by approval status —{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>All, Approved, Pending, or Rejected</span> — without navigating
        away. Previously, checking verification status required{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>unnecessary depth of navigation</span>; now it's surfaced right
        where users are already managing their files. The result is a page that feels{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>complete and self-contained</span> — everything needed to
        upload, organise, and track documents in one place.
      </p>
    ),
  },
];
 
function ImprovementsAccordion({ accent, accentBorder, accentMuted }) {
  const [open, setOpen] = useState(null);
 
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {improvements.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: "12px",
              border: `0.5px solid ${isOpen ? accentBorder : "rgba(255,255,255,0.07)"}`,
              background: isOpen ? "rgba(255,255,255,0.03)" : "transparent",
              overflow: "hidden",
              transition: "border-color 0.2s, background 0.2s",
            }}
          >
            {/* Header row — always visible, clickable */}
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", color: accent }}>
                {item.number}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0 }}>{item.title}</p>
                {!isOpen && (
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>{item.summary}</p>
                )}
              </div>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={accent} strokeWidth="1.5" strokeLinecap="round"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
 
            {/* Expandable body */}
            {isOpen && (
              <div style={{ padding: "0 1.25rem 1.25rem 1.25rem", paddingLeft: "calc(1.25rem + 10px + 1rem)" }}>
                <div style={{ borderLeft: `2px solid ${accentBorder}`, paddingLeft: "1rem" }}>
                  {item.body(accent)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FinalUI({ accent, accentBorder, accentMuted }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        <p style={{
          fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em",
          color: accent, whiteSpace: "nowrap", margin: 0,
        }}>
          Phase 5 · Final User Interface
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

        {/* ── Landing Page ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <SectionLabel label="Landing Page" accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />

          {/* Row 1: two web screens + one shared mobile */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "1rem", alignItems: "end" }}>
            <WebScreen
              src="/images/EnableID/FinalUI/landing-page-1.png"
              caption="Landing page — view 1"
              accentBorder={accentBorder} accentMuted={accentMuted}
            />
            <WebScreen
              src="/images/EnableID/FinalUI/landing-page-2.png"
              caption="Landing page — view 2"
              accentBorder={accentBorder} accentMuted={accentMuted}
            />
            <MobileScreen
              src="/images/EnableID/FinalUI/Home.png"
              caption="Mobile responsive"
              accentBorder={accentBorder} accentMuted={accentMuted}
            />
          </div>
        </div>

        {/* ── Documents Manager ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <SectionLabel label="Documents Manager" accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              {
                web: { src: "/images/EnableID/FinalUI/desktop-doc-manager.png", caption: "Documents manager — view 1" },
                mobile: { src: "/images/EnableID/FinalUI/doc-man-phone.png", caption: "Mobile responsive" },
              },
              {
                web: { src: "/images/EnableID/FinalUI/doc-manager-click.png", caption: "Documents manager — view 2" },
                mobile: { src: "/images/EnableID/FinalUI/doc-man-phone-click.png", caption: "Mobile responsive" },
              },
            ].map((pair, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "end" }}>
                <WebScreen src={pair.web.src} caption={pair.web.caption} accentBorder={accentBorder} accentMuted={accentMuted} />
                <MobileScreen src={pair.mobile.src} caption={pair.mobile.caption} accentBorder={accentBorder} accentMuted={accentMuted} />
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* ── Major Improvements ── */}
      <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
 
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
            color: accent, background: accentMuted, border: `0.5px solid ${accentBorder}`,
            borderRadius: "20px", padding: "2px 10px",
          }}>
            Major Improvements
          </span>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </div>
 
        <ImprovementsAccordion accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
 
      </div>
      <div style={{ gridColumn: "1 / -1", marginTop: "5rem" }}>
 
      {/* Checkpoint banner */}
      <div style={{
        borderRadius: "16px",
        border: `0.5px solid ${accentBorder}`,
        background: accentMuted,
        padding: "2rem 2.5rem",
        marginBottom: "2.5rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "2rem",
        alignItems: "center",
      }}>
        {/* Left: checkpoint badge */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: `1.5px solid ${accentBorder}`,
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span style={{
            fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: accent,
          }}>
            Checkpoint
          </span>
        </div>
 
        {/* Right: copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            Week 13 · Feature Completion
          </p>
          <p style={{ fontSize: "15px", color: "#fff", fontWeight: 500, margin: 0, lineHeight: 1.5 }}>
            Every feature we set out to build had been implemented.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, margin: 0 }}>
            The sections below walk through each one in action. All seven features — four must-haves and three good-to-haves — were delivered within the 13-week sprint.
          </p>
        </div>
      </div>
 
      {/* Feature grid — same as FinalFeatures */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", margin: 0 }}>
          All features delivered
        </p>
      </div>
 
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{
              border: `0.5px solid ${f.accentBorder}`,
              borderRadius: "14px",
              padding: "1.25rem",
              background: f.accentMuted,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
          >
            {/* Icon */}
            <div style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: `0.5px solid ${f.accentBorder}`,
              background: "rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              {f.icon(f.accent)}
            </div>
 
            {/* Text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0 }}>{f.name}</p>
                <span style={{
                  fontSize: "9px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: f.accent,
                  padding: "2px 6px",
                  borderRadius: "20px",
                  border: `0.5px solid ${f.accentBorder}`,
                  background: "rgba(0,0,0,0.2)",
                }}>
                  {f.tag}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
 
            {/* Number */}
            <p style={{ fontSize: "10px", fontWeight: 600, color: f.accent, letterSpacing: "0.1em", margin: 0, alignSelf: "flex-end", marginTop: "auto", paddingTop: "0.5rem" }}>
              {f.number}
            </p>
          </div>
        ))}
      </div>
 
    </div>
    </div>
  );
}