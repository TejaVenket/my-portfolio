"use client";

import Image from "next/image";
import Carousel from "../Carousel";

const FIGMA_URL = "https://www.figma.com/design/PD059qNKRolmF4y4GT4MEs/SDS-Team-14?node-id=0-1&t=lyc3Yywu7P3kOy9R-1";
const IMAGE_SRC = null;            // replace with "/images/problem-scoping.png"
const DEFINITION_IMAGE_SRC = null; // replace with "/images/problem-definition.png"

const insights = [
  {
    number: "01",
    heading: "The brief",
    body: "At the start of the project, the brief was relatively broad—we were tasked with creating a digital identity application for refugees. While the direction sounded clear on paper, my team and I quickly realised that we lacked a deep understanding of both the client's vision and the actual problems that needed solving. There was a significant amount of ambiguity surrounding what the product should ultimately become, which made the early stages of the project feel both challenging and uncertain.",
  },
  {
    number: "02",
    heading: "Understanding before designing",
    body: "Because of this, much of our initial effort went into understanding before designing. We scheduled multiple sessions with the client to better understand the organisation, its goals, and the kinds of challenges refugees actually face in relation to identity verification and accessibility. Looking back, I realised how important this discovery phase was—not just for gathering requirements, but for aligning everyone on what meaningful impact would actually look like.",
  },
  {
    number: "03",
    heading: "Structured preparation",
    body: "Before each meeting, we conducted background research on both the company and the client so that our conversations could be more intentional and productive. To structure our preparation, we collaboratively drafted interview questions in Figma. Every team member contributed potential questions, after which we grouped similar questions together, identified recurring themes, and narrowed them down through internal discussions and voting.",
  },
  {
    number: "04",
    heading: "Focused questions",
    body: "One thing I learned during this process was the importance of asking focused and purposeful questions, especially given our limited access to the client—we only had two one-hour sessions each week. Because of this, every question needed to maximise the value of the conversation. Many of the discussions centred around understanding user demographics, identifying non-negotiable product requirements, and uncovering the client's expectations for the system.",
  },
  {
    number: "05",
    heading: "A shift in approach",
    body: "More importantly, this process changed the way I approached problem-solving. Instead of jumping straight into features and solutions, I learned to spend more time understanding the people, workflows, and constraints behind the problem first. Much of our early design thinking and questioning process can be seen in the Figma exploration below.",
  },
];


const mySlides = [
  { image: "/images/EnableID/Ukraine.png", label: "Slide 01", caption: "Russia Invasion of Ukraine" },
  { image: "/images/EnableID/Refugees.png", label: "Slide 02", caption: "Refugees Fleeing their Home countries" },
  { image: "/images/EnableID/UNHCR_Interview.png", label: "Slide 03", caption: "A UNHCR refugee status determination officer interviews a Sudanese man at the Sallum border crossing between Libya and Egypt." },
  { image: "/images/EnableID/ID_Card.png", label: "Slide 04", caption: "Refugee Identification Card provided by UNHCR" },
];

export default function ProblemScoping({accent, accentBorder, accentMuted,
}) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        <p style={{
          fontSize: "22px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Phase 1 · Problem Scoping
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 1.1 · Discovery
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
          Initial Discovery
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          Before any design or development could begin, we needed to deeply understand the problem space —
          the people affected, the constraints at play, and what success would actually look like.
        </p>
      </div>

      {/* ── Content card (insights only, no image inside) ── */}
      <div style={{
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        marginBottom: "1.5rem",
      }}>
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: 0 }}>

          {insights.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "1rem 0",
                borderBottom: i < insights.length - 1 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                color: accent,
                letterSpacing: "0.08em",
                flexShrink: 0,
                paddingTop: "3px",
                width: "20px",
              }}>
                {item.number}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                  {item.heading}
                </p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          {/* Figma CTA */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.25rem" }}>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
              Explore our early design thinking
            </p>
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: `0.5px solid ${accentBorder}`,
                background: accentMuted,
                color: accent,
                fontSize: "12px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.18s",
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(25,183,165,0.14)")}
              onMouseLeave={e => (e.currentTarget.style.background = accentMuted)}
            >
              View Figma exploration
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* ── Image block — fully separate, full width ── */}
      <div style={{
        position: "relative",
        minHeight: "400px",
        background: accentMuted,
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {IMAGE_SRC ? (
          <Image
            src={IMAGE_SRC}
            alt="Problem scoping — Figma exploration"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: `0.5px solid ${accentBorder}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.3">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Figma / process image</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>IMAGE_SRC = "/images/..."</p>
          </div>
        )}

        {/* Badge */}
        <div style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          background: "rgba(0,0,0,0.45)",
          borderRadius: "8px",
          padding: "4px 10px",
        }}>
          <span style={{ fontSize: "11px", fontWeight: 600, color: accent, letterSpacing: "0.08em" }}>
            Figma exploration
          </span>
        </div>
      </div>

      {/* ── Phase 1.2 · Problem Definition ── */}

      {/* Sub-phase label */}
      <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 1.2 · Problem Definition
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
          Defining the Problem Space
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          Through multiple stakeholder interviews and research sessions, we gradually uncovered that the
          challenge extended far beyond simply creating a "digital identity app."
        </p>
      </div>

      {/* Two-column: body text left, image placeholder right */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
        alignItems: "center",
      }}>

        {/* Left: body paragraphs */}
        <div style={{
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}>
          {[
            "The real issue centred around identity, access, and reconnection for refugees displaced by conflict. One example frequently referenced during our discussions was the Russian invasion of Ukraine, where civilians fleeing war zones were often forced to leave behind critical documents — identification records, educational certificates, employment history, and medical documents. Without these, many refugees struggle to access healthcare, secure employment, receive aid, or rebuild stability in host countries. In many cases, families were also separated during displacement, leaving individuals unable to reconnect with loved ones.",
            "Through conversations with stakeholders, we also learned more about how organisations such as the United Nations High Commissioner for Refugees currently verify refugee information. Much of the process remains manual, relying on interviews and cross-checking with external organisations when official documents are unavailable. While temporary identification cards may be issued, they often contain only minimal information and provide limited long-term support.",
            "Reflecting on these discussions, I realised that the problem was not just about replacing physical identification with a digital solution. It was about designing a system that could help refugees regain a sense of continuity, credibility, and connection as they rebuild their lives in unfamiliar environments.",
          ].map((para, i) => (
            <p key={i} style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.85,
              margin: 0,
              paddingBottom: i < 2 ? "1.25rem" : 0,
              borderBottom: i < 2 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
            }}>
              {para}
            </p>
          ))}
        </div>

        {/* Right: image placeholder */}
        <div style={{
          position: "relative",
          minHeight: "420px",
          background: accentMuted,
          borderRadius: "16px",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {true ? (
            <Carousel slides={mySlides} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder}/>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                border: `0.5px solid ${accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.3">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Context / research image</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>DEFINITION_IMAGE_SRC = "/images/..."</p>
            </div>
          )}

          {/* Badge */}
          <div style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(0,0,0,0.45)",
            borderRadius: "8px",
            padding: "4px 10px",
          }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: accent, letterSpacing: "0.08em" }}>
              Problem context
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}