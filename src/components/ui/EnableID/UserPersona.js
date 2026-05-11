"use client";

import { useState } from "react";
import Image from "next/image";

const personas = [
  {
    number: "01",
    name: "Omar Hassan",
    title: "NGO Employee · United Nations High Commissioner for Refugees (UNHCR)",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.08)",
    accentBorder: "rgba(25,183,165,0.25)",
    quote: "Every refugee's story is unique, and it is crucial we find ways to make their verification process as smooth as possible.",
    needs: [
      "A faster verification process",
      "Facilitate better communication between refugees and approving authorities",
      "Ensure refugees have access to necessary services and aid",
    ],
    image: "/images/EnableID/Persona_Omar_Hassan.png",
  },
  {
    number: "02",
    name: "Dr Amir Rahimi",
    title: "Former Doctor · Refugee",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.08)",
    accentBorder: "rgba(127,119,221,0.25)",
    quote: "I want to use my skills to help people and contribute to society, but without legal recognition, I am forced to live in the shadows.",
    needs: [
      "Verify his identity and credentials to practice medicine legally in the host country",
      "Provide medical care to his community without fear of legal repercussions",
      "Gain recognition for his qualifications and experience",
    ],
    image: "/images/EnableID/Persona_Doctor.png",
  },
  {
    number: "03",
    name: "Abdul Ahmed",
    title: "Retiree · Refugee",
    accent: "#EF9F27",
    accentMuted: "rgba(239,159,39,0.08)",
    accentBorder: "rgba(239,159,39,0.25)",
    quote: "I don't need much, I just want to settle down in Malaysia and reconnect with my lost family.",
    needs: [
      "Find a place to seek refuge in Malaysia",
      "Find a way to reunite with his family with just photos of himself",
    ],
    image: "/images/EnableID/Persona_Abdul_Ahmed.png",
  },
  {
    number: "04",
    name: "Hong Sovannarith",
    title: "Former Teacher · Refugee",
    accent: "#E8625A",
    accentMuted: "rgba(232,98,90,0.07)",
    accentBorder: "rgba(232,98,90,0.2)",
    quote: "I am concerned over my identity verification and am unsure when I am considered verified to start receiving aid.",
    needs: [
      "Find a place to seek refuge in Thailand",
      "Get her legal documents and status uploaded and verified",
      "Assurance that she is truly verified to start getting aid",
    ],
    image: "/images/EnableID/Persona_girl.png",
  },
];

export default function UserPersona({ accent, accentBorder, accentMuted }) {
  const [activePersona, setActivePersona] = useState(0);
  const persona = personas[activePersona];

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
          Phase 1.3 · Developing User Personas
        </p>
      </div>

      {/* Heading + intro */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", width: "60%" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2rem",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.2,
          margin: 0,
        }}>
          User Personas
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          Unfortunately, we did not have the opportunity to arrange meetings with UN representatives
          who have worked closely with refugees at the border. Hence, we were only able to ask our client,
          Tony Tan, questions regarding the refugees' demographics, needs and pain points. Additionally, we
          conducted our own secondary research to understand refugees' needs and pain points as well as
          the UN representatives' needs and pain points. With the insights we gathered, we created a few
          user personas to help us empathise with our users and guide our design decisions.
        </p>
      </div>

      {/* Persona tab switcher */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {personas.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePersona(i)}
            style={{
              background: activePersona === i ? p.accentMuted : "rgba(255,255,255,0.03)",
              border: `0.5px solid ${activePersona === i ? p.accentBorder : "rgba(255,255,255,0.08)"}`,
              borderRadius: "10px",
              padding: "0.6rem 1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
            }}
          >
            <span style={{
              fontSize: "10px",
              fontWeight: 600,
              color: activePersona === i ? p.accent : "rgba(255,255,255,0.3)",
              letterSpacing: "0.08em",
            }}>
              {p.number}
            </span>
            <span style={{
              fontSize: "13px",
              fontWeight: 500,
              color: activePersona === i ? "#fff" : "rgba(255,255,255,0.4)",
            }}>
              {p.name}
            </span>
          </button>
        ))}
      </div>

      {/* Active persona card */}
      <div
        key={activePersona}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          border: `0.5px solid ${persona.accentBorder}`,
          borderRadius: "16px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.02)",
          animation: "fadeUp 0.3s ease both",
        }}
      >

        {/* Left: image */}
        <div style={{
          position: "relative",
          minHeight: "360px",
          background: persona.accentMuted,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {persona.image ? (
            <Image
              src={persona.image}
              alt={persona.name}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>{persona.name} image</p>
          )}
          <div style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(0,0,0,0.5)",
            borderRadius: "8px",
            padding: "4px 10px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: persona.accent, letterSpacing: "0.1em" }}>
              {persona.number}
            </span>
          </div>
        </div>

        {/* Right: content */}
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          <div>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "4px",
            }}>
              {persona.name}
            </h3>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.02em", margin: 0 }}>
              {persona.title}
            </p>
          </div>

          {/* Pull quote */}
          <p style={{
            fontStyle: "italic",
            fontSize: "14px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            borderLeft: `2px solid ${persona.accent}`,
            paddingLeft: "1rem",
            margin: 0,
          }}>
            &ldquo;{persona.quote}&rdquo;
          </p>

          {/* Needs */}
          <div>
            <p style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "0.75rem",
              margin: "0 0 0.75rem 0",
            }}>
              Key Needs
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {persona.needs.map((need, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: persona.accent,
                    flexShrink: 0,
                    marginTop: "7px",
                  }} />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                    {need}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Key User Needs summary ── */}
      <div style={{ marginTop: "3rem" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem", width: "60%" }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2rem",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Key User Needs
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
            Synthesising across all four personas, four core needs emerged that shaped our design direction.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            {
              number: "01",
              heading: "Identity & Credential Verification",
              body: "Users need a reliable way to establish and prove who they are, along with any professional qualifications they hold.",
              accent: "#19B7A5",
              accentMuted: "rgba(25,183,165,0.07)",
              accentBorder: "rgba(25,183,165,0.2)",
            },
            {
              number: "02",
              heading: "Access to Services & Aid",
              body: "Verified users need clarity on what they are entitled to and a clear path to receiving healthcare, employment, and financial support.",
              accent: "#7F77DD",
              accentMuted: "rgba(127,119,221,0.07)",
              accentBorder: "rgba(127,119,221,0.2)",
            },
            {
              number: "03",
              heading: "Communication & Clarity",
              body: "Users need transparent, readable status updates and guidance — especially those navigating unfamiliar systems in a foreign language.",
              accent: "#EF9F27",
              accentMuted: "rgba(239,159,39,0.07)",
              accentBorder: "rgba(239,159,39,0.2)",
            },
            {
              number: "04",
              heading: "Family Reconnection & Continuity",
              body: "Beyond documents, users need ways to re-establish relationships and rebuild a sense of stability and identity in their new environment.",
              accent: "#E8625A",
              accentMuted: "rgba(232,98,90,0.07)",
              accentBorder: "rgba(232,98,90,0.2)",
            },
          ].map((point, i) => (
            <div key={i} style={{
              border: `0.5px solid ${point.accentBorder}`,
              borderRadius: "16px",
              padding: "1.5rem",
              background: point.accentMuted,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}>
              <span style={{ fontSize: "10px", fontWeight: 600, color: point.accent, letterSpacing: "0.1em" }}>
                {point.number}
              </span>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff", margin: 0 }}>
                {point.heading}
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
                {point.body}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}