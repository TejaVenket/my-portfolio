"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/SafeSight/Dashboard.jpg",
    caption: "Violation feed overview",
  },
  {
    src: "/images/SafeSight/IncidentDrawer.jpg",
    caption: "Incident detail view",
  },
  {
    src:"/images/SafeSight/PowerBI.jpg",
    caption: "Power BI analytics tab",
  },
  {
    src: "/images/SafeSight/Settings.jpg",
    caption: "Settings Page",
  },
];

const LIVE_URL = "https://your-portal-url.com"; // replace with your actual URL

export default function PortalShowcase({ accent = "#19B7A5" }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Section label */}
      <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, marginBottom: "0.75rem" }}>
        User Portal
      </p>

      {/* Header row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          Prototyping &amp; final build
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          The User portal brings together real-time violation detection, incident review, and Power BI
          analytics into a single interface. Browse the screens below, or open the live build to
          interact with it yourself.
        </p>
      </div>

      {/* Main image + thumbnails */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", marginBottom: "1.25rem", alignItems: "start" }}>

        {/* Main image */}
        <div style={{
          position: "relative",
          aspectRatio: "16/10",
          borderRadius: "14px",
          overflow: "hidden",
          border: "0.5px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {images[active].src ? (
            <Image
              src={images[active].src}
              alt={images[active].caption}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                border: "0.5px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.3">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
                {images[active].caption}
              </p>
            </div>
          )}

          {/* Caption overlay */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "0.75rem 1rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
          }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
              {images[active].caption}
            </p>
          </div>

          {/* Image counter */}
          <div style={{
            position: "absolute", top: "0.75rem", right: "0.75rem",
            background: "rgba(0,0,0,0.45)", borderRadius: "6px",
            padding: "3px 9px", fontSize: "11px", color: "rgba(255,255,255,0.5)",
          }}>
            {active + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail strip — vertical */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: "72px",
                aspectRatio: "16/10",
                borderRadius: "8px",
                overflow: "hidden",
                border: `0.5px solid ${active === i ? `rgba(25,183,165,0.5)` : "rgba(255,255,255,0.08)"}`,
                background: active === i ? "rgba(25,183,165,0.08)" : "rgba(255,255,255,0.03)",
                cursor: "pointer",
                position: "relative",
                padding: 0,
                transition: "all 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {img.src ? (
                <Image src={img.src} alt={img.caption} fill style={{ objectFit: "cover" }} />
              ) : (
                <span style={{ fontSize: "11px", fontWeight: 600, color: active === i ? accent : "rgba(255,255,255,0.2)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom row: dot nav + live button */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Dot nav */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: active === i ? accent : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </div>

        {/* Live link button */}
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.55rem 1.1rem",
            borderRadius: "10px",
            border: `0.5px solid rgba(25,183,165,0.35)`,
            background: "rgba(25,183,165,0.08)",
            color: accent,
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "all 0.18s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(25,183,165,0.14)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(25,183,165,0.08)"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14L21 3" />
          </svg>
          Try the live portal
        </a>
      </div>
    </div>
  );
}