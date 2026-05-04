"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    tag: "New Feature · Scalability",
    title: "User Settings Page",
    body: "As the system expanded beyond a single dock, there was no clear way to manage who received AI camera alerts. The new User Settings page introduced a WhatsApp user directory and a camera management feature — letting supervisors configure notification recipients and onboard additional cameras as the system scales.",
    bullets: [
      "WhatsApp user directory for notification recipient management",
      "Camera management panel for multi-dock expansion",
      "Makes the platform feel complete and future-ready",
    ],
    image:"/images/SafeSight/Settings.jpg",
    thumbLabel: "User Settings",
  },
  {
    tag: "Deliberate Removal · Simplification",
    title: "KPI Cards Removed",
    body: "Since the client wanted a dedicated Power BI analytics dashboard, the KPI summary cards I had designed for the landing page started to feel redundant. Removing them was a deliberate decision to reduce noise and keep the interface focused on quickly identifying and acting on incidents.",
    bullets: [
      "Avoided duplication with the Power BI dashboard",
      "Reduced cognitive load on the landing page",
      "Keeps focus on incident detection and response",
    ],
    image: "/images/SafeSight/Dashboard.jpg",
    thumbLabel: "KPI Removal",
  },
  {
    tag: "Design Reflection · Process",
    title: "Stepping Back to Re-evaluate",
    body: "This iteration was less about adding features and more about pausing to reassess earlier decisions. Thinking ahead to multi-dock deployment made it clear that the portal would feel limiting without structural changes — reinforcing the value of revisiting assumptions as context evolves.",
    bullets: [
      "Single-dock assumptions didn't hold at scale",
      "Re-evaluation led to cleaner, more intentional UX",
      "Long-term scalability shaped short-term design choices",
    ],
    image: "/images/SafeSight/Scalability.png",
    thumbLabel: "Scalability",
  },
];

export default function Iteration3({ accent, accentMuted, accentBorder }) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div style={{
      marginTop: "4rem",
      padding: "2.5rem",
      borderRadius: "16px",
      border: `0.5px solid ${accentBorder}`,
      background: "rgba(255,255,255,0.02)",
    }}>

      {/* Iteration badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
        <span style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: accent,
          background: accentMuted,
          border: `0.5px solid ${accentBorder}`,
          borderRadius: "20px",
          padding: "3px 10px",
        }}>
          Iteration 03
        </span>
        <div style={{ height: "0.5px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
          tap an image to explore
        </span>
      </div>

      {/* Thumbnail row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "1.5rem" }}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              border: `1.5px solid ${active === i ? accent : "transparent"}`,
              transition: "border-color 0.15s, transform 0.15s",
              transform: active === i ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            {/* Image or placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "4/3",
              position: "relative",
              background: accentMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.thumbLabel}
                  fill
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
                  {item.thumbLabel}
                </p>
              )}
            </div>

            {/* Number badge */}
            <div style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              color: "#fff",
              fontWeight: 500,
            }}>
              {i + 1}
            </div>

            {/* Bottom label overlay */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
              padding: "1.5rem 0.75rem 0.6rem",
              fontSize: "11px",
              color: "#fff",
              fontWeight: 500,
            }}>
              {item.thumbLabel}
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      <div
        key={active}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          alignItems: "start",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "12px",
          border: `0.5px solid ${accentBorder}`,
          padding: "1.5rem",
          animation: "fadeUp 0.25s ease both",
        }}
      >
        {/* Left: image */}
        <div style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: "10px",
          overflow: "hidden",
          background: accentMuted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", margin: 0 }}>
              {item.thumbLabel} image
            </p>
          )}
        </div>

        {/* Right: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          <span style={{
            fontSize: "10px",
            padding: "2px 8px",
            borderRadius: "20px",
            background: accentMuted,
            border: `0.5px solid ${accentBorder}`,
            color: accent,
            display: "inline-block",
            alignSelf: "flex-start",
          }}>
            {item.tag}
          </span>

          <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.25,
            margin: 0,
          }}>
            {item.title}
          </h3>

          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: 0 }}>
            {item.body}
          </p>

          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {item.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <div style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: accent,
                  flexShrink: 0,
                  marginTop: "6px",
                }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  {b}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}