import Image from "next/image";
import { useState } from "react";

import WebScreen from "../WebScreen";
import MobileScreen from "../MobileScreen";

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
    </div>
  );
}