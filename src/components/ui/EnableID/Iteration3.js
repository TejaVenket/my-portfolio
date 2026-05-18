"use client";

import Image from "next/image";

import ExperimentingUI from "./ExperimentingUI";
import FinalUI from "./FinalUI";


export default function Iteration3({ accent, accentBorder, accentMuted }) {
  const principles = [
    {
      number: "01",
      title: "Flatter navigation",
      desc: "Surface more content from a single page rather than burying it behind multiple layers. Fewer taps to reach anything — especially the things users need most.",
    },
    {
      number: "02",
      title: "Blue and white only",
      desc: "At this stage of my design journey, I was still building confidence with colour. Rather than risk another visually incoherent result, I made the deliberate choice to keep it simple and controlled. Clarity over complexity.",
    },
  ];

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "5rem" }}>

      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Phase 4.3 · Iteration 3 — Mid-Fidelity
        </p>
      </div>

      {/* Context block */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3.5rem",
        alignItems: "start",
        marginBottom: "2.5rem",
      }}>

        {/* Left: milestone + para 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
            By week 6, the feature set had been finalised. The earlier decision to cut the Resource Locator —
            a feature we felt was too complex to deliver meaningfully within our timeframe — meant we could{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>stop experimenting and start committing</span>{" "}
            to a refined, focused UI.
          </p>
        </div>

        {/* Right: para 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
            The context mattered too — this product was ultimately being built for refugees and UN officials,
            and that responsibility shaped how I thought about every interaction.{" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>Nothing should require explanation.
            Everything should feel immediate and accessible.</span>
          </p>
        </div>
      </div>

      {/* Design principles */}
      <div>
        <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", margin: "0 0 1rem 0" }}>
          Two guiding principles
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {principles.map((p) => (
            <div key={p.number} style={{
              padding: "1.5rem",
              borderRadius: "12px",
              border: `0.5px solid ${accentBorder}`,
              background: accentMuted,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: accent,
                }}>
                  {p.number}
                </span>
                <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
              </div>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff", margin: 0 }}>
                {p.title}
              </p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
        <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.25,
            marginTop: "4rem",          
        }}>
            Mid-fidelity Prototype
        </h3>
      </div>
      <ExperimentingUI accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <FinalUI accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
    </div>
  );
}