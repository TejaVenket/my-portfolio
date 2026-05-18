"use client";

import { useState } from "react";
import Safesight from "../../../components/product-design/SafeSight";
import EnableID from "../../../components/product-design/EnableID";
import PetBnB from "../../../components/product-design/PetBnB";

const tabs = [
  {
    id: "safesight",
    label: "SafeSight",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.12)",
    accentBorder: "rgba(25,183,165,0.25)",
    component: Safesight,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="8.5" r="1" fill="currentColor" opacity="0.5" />
        <rect x="6" y="16" width="8" height="1.5" rx="0.75" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "enableid",
    label: "EnableID",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.12)",
    accentBorder: "rgba(127,119,221,0.25)",
    component: EnableID,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5" y="1" width="10" height="17" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="7" y="11.5" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.5" />
        <rect x="7.5" y="13.5" width="5" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "petbnb",
    label: "PetBnB",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.12)",
    accentBorder: "rgba(239,159,39,0.25)",
    component: PetBnB,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        <path d="M2 17c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M13 12.5c1.7 0 3 1.3 3 3V17" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5" />
      </svg>
    ),
  },
];

export default function ProductDesignPage() {
  const [activeId, setActiveId] = useState("safesight");
  const active = tabs.find((t) => t.id === activeId);
  const ActiveComponent = active.component;

  return (
    <section
      style={{
        background: "#0E2439",
        minHeight: "100vh",
        padding: "5rem 2rem 6rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .panel-enter { animation: fadeUp 0.35s ease forwards; }
        .tab-btn:hover { background: rgba(255,255,255,0.04); }
      `}</style>

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Page header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#19B7A5", marginBottom: "0.75rem" }}>
            Selected Work
          </p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.15, maxWidth: "30ch" }}>
            Projects I&apos;ve had the pleasure of building
          </h1>
        </div>

        {/* Tab row */}
        <div style={{ display: "flex", gap: "4px", borderBottom: "0.5px solid rgba(255,255,255,0.08)", marginBottom: "3rem" }}>
          {tabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                className="tab-btn"
                onClick={() => setActiveId(tab.id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: isActive ? `2px solid ${tab.accent}` : "2px solid transparent",
                  cursor: "pointer",
                  padding: "0.65rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.35)",
                  fontSize: "13px",
                  fontWeight: 500,
                  borderRadius: "6px 6px 0 0",
                  marginBottom: "-0.5px",
                  transition: "color 0.2s",
                }}
              >
                <span style={{ color: isActive ? tab.accent : "rgba(255,255,255,0.25)", display: "flex" }}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active project panel — key forces remount + animation on tab switch */}
        <div
          key={activeId}
          className="panel-enter"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <ActiveComponent
            accent={active.accent}
            accentMuted={active.accentMuted}
            accentBorder={active.accentBorder}
          />
        </div>

      </div>
    </section>
  );
}