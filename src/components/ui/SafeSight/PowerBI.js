"use client";

import { useState } from "react";
import Image from "next/image";

const iterations = [
  {
    tab: "Iteration 1",
    sub: "Rough Dashboard with Mock Data",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.25)",
    image: "/images/SafeSight/1st iteration.jpg", // replace with "/images/powerbi-iteration-1.png"
    text: [
      {
        label: "Overview",
        body: "The first iteration was developed as a proof of concept using simulated data, guided closely by the client's initial template and expectations. This version was primarily designed by my teammate who had prior experience with Power BI, while I contributed to shaping the structure and ensuring alignment with the overall system.",
      },
      {
        label: "Focus",
        body: "The focus at this stage was to keep the dashboard simple and easy to interpret, surfacing only the most essential metrics — such as the total number of violations and breakdowns by violation type. This allowed us to quickly validate whether the direction met the client's expectations before moving into more complex analytical features.",
      },
    ],
    chips: ["Simulated data", "KPI summary", "Violation breakdown", "Client validation"],
  },
  {
    tab: "Iteration 2",
    sub: "Refined Dashboard with Real Data",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.25)",
    image: "/images/SafeSight/2nd iteration.jpg", // replace with "/images/powerbi-iteration-2.png"
    text: [
      {
        label: "Feedback",
        body: "After presenting the first iteration to the client, it became clear that while the dashboard had strong analytical potential, it didn’t fully align with how she actually worked. One of the main takeaways was that certain features—like the heat map—were unnecessary at this stage and added more complexity than value, especially for a proof of concept.",
      },
      {
        label: "Focus",
        body: [
        "At this point, I took over the dashboard and focused on rethinking it from a more practical, user-centered perspective.",
        "One of the first changes I made was moving away from mock data and connecting the dashboard to the actual system database.",
        "I also reconsidered how the data was being presented and replaced the heat map with a simpler line chart.",
        "Alongside this, I cleaned up the layout—reducing clutter and improving consistency.",
        "Looking back, this iteration was about simplifying and focusing only on what was useful to the user."
        ],
      },
    ],
    chips: ["Real data", "Trend analysis", "Multi-location", "Risk zones"],
  },
];

export default function PowerBI({ accent = "#19B7A5" }) {
  const [active, setActive] = useState(0);
  const iter = iterations[active];

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Section label */}
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    marginBottom: "2rem",
    alignItems: "center", // 🔥 THIS is what I need
  }}
>
  {/* Left */}
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p
      style={{
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: accent,
        marginBottom: "0.75rem",
      }}
    >
      Power BI Analytics Dashboard
    </p>

    <h2
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "2rem",
        fontWeight: 400,
        color: "#fff",
        lineHeight: 1.2,
        margin: 0,
      }}
    >
      Analytics &amp; reporting
    </h2>
  </div>

  {/* Right */}
    <div>
        <p
        style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85,
            margin: 0,
        }}
        >
        Alongside the User Portal, I worked on an analytics dashboard in Power BI that was aligned
        with the client's existing workflow shifting focus from individual incidents to broader
        operational patterns across warehouse locations. DSV's warehouse operations lead usually uses
        a PowerBI dashboard to look for trends pertaining to the incidents occurring in her warehouse.
        Hence, she wanted the new SafeSight dashboard to be integrated into her existing PowerBI workflow,
        so that she can easily share insights with her team and make data-driven decisions to improve safety 
        across all warehouse locations.
        </p>
    </div>
    </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "1.25rem" }}>
        {iterations.map((it, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? it.accentMuted : "rgba(255,255,255,0.03)",
              border: `0.5px solid ${active === i ? it.accentBorder : "rgba(255,255,255,0.08)"}`,
              borderRadius: "10px",
              padding: "0.5rem 1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.18s",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 500, color: active === i ? "#fff" : "rgba(255,255,255,0.35)" }}>
              {it.tab}
            </span>
            <span style={{
              fontSize: "11px",
              padding: "2px 8px",
              borderRadius: "20px",
              background: active === i ? it.accentMuted : "transparent",
              border: `0.5px solid ${active === i ? it.accentBorder : "rgba(255,255,255,0.08)"}`,
              color: active === i ? it.accent : "rgba(255,255,255,0.25)",
            }}>
              {it.sub}
            </span>
          </button>
        ))}
      </div>

      {/* Card */}
      <div
        key={active}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          border: `0.5px solid ${iter.accentBorder}`,
          borderRadius: "16px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.02)",
          animation: "fadeUp 0.25s ease both",
        }}
      >
        {/* Left: image */}
        <div style={{
          position: "relative",
          background: iter.accentMuted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "280px",
          borderRight: `0.5px solid ${iter.accentBorder}`,
        }}>
          {iter.image ? (
            <Image
              src={iter.image}
              alt={`${iter.tab} dashboard`}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                border: `0.5px solid ${iter.accentBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iter.accent} strokeWidth="1.3">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <path d="M7 18v-6M11 18v-3M15 18v-8M19 18v-5" />
                </svg>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Dashboard image</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>iter.image = "/images/..."</p>
            </div>
          )}

          {/* Iteration badge */}
          <div style={{
            position: "absolute", top: "1rem", left: "1rem",
            background: "rgba(0,0,0,0.45)", borderRadius: "8px",
            padding: "3px 10px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: iter.accent, letterSpacing: "0.08em" }}>
              {iter.tab}
            </span>
          </div>
        </div>

        {/* Right: text */}
        <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>

          <div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", fontWeight: 400, color: "#fff", margin: "0 0 3px" }}>
              {iter.sub}
            </h3>
          </div>

          {iter.text.map((block, i) => (
            <div key={i}>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>
                {block.label}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
                {block.body}
              </p>
            </div>
          ))}

          {/* Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", paddingTop: "0.5rem" }}>
            {iter.chips.map((chip) => (
              <span
                key={chip}
                style={{
                  fontSize: "11px",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  border: `0.5px solid ${iter.accentBorder}`,
                  background: iter.accentMuted,
                  color: iter.accent,
                  letterSpacing: "0.02em",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}