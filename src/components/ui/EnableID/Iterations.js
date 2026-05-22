import Image from "next/image";
import Carousel from "../Carousel";
import { ButtonBold, ButtonMuted } from "../Buttons";

import Learnings from "./Iter2Learnings";
import Iteration3 from "./Iteration3";
import UserFlow from "./UserJourney";


const timeline = [
  { weeks: "Weeks 1–2", label: "Problem Scoping", desc: "Stakeholder research, ideation, and problem definition", muted: true },
  { weeks: "Weeks 3–13", label: "Build & Test", desc: "Prototyping, implementation, and testing", muted: false },
];

const myslides = [
  { image: "/images/EnableID/Lo-fi1.png", label: "Iteration 1", caption: "Low-fidelity wireframe using AutoCAD" },
  { image: "/images/EnableID/Hi-fi.png", label: "Iteration 2", caption: "High-fidelity prototype using Figma" },
];

export default function Iterations({accent, accentBorder, accentMuted,
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
          Phase 4 · Prototype Iterations
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Timeline card */}
        <div style={{
          
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            Project Timeline · 13 Weeks
          </p>

          {/* Visual timeline bar */}
          <div style={{ position: "relative" }}>
            <div style={{ height: "6px", borderRadius: "99px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ width: "38%", height: "100%", background: "rgba(255,255,255,0.15)", borderRadius: "99px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Week 1</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Week 13</span>
            </div>
          </div>

          {/* Two blocks */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {timeline.map((t, i) => (
              <div key={i} style={{
                padding: "1rem",
                borderRadius: "12px",
                border: `0.5px solid ${t.muted ? "rgba(255,255,255,0.07)" : accentBorder}`,
                background: t.muted ? "rgba(255,255,255,0.03)" : accentMuted,
              }}>
                <p style={{ fontSize: "10px", fontWeight: 600, color: t.muted ? "rgba(255,255,255,0.25)" : accent, letterSpacing: "0.08em", margin: "0 0 4px 0" }}>
                  {t.weeks}
                </p>
                <p style={{ fontSize: "13px", fontWeight: 500, color: t.muted ? "rgba(255,255,255,0.45)" : "#fff", margin: "0 0 4px 0" }}>
                  {t.label}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: 1.5, margin: 0 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Body copy */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: 0 }}>
            Prototyping ran from {" "} 
            <span style={{ color: "#fff", fontWeight: 500 }}>weeks 3 to 13</span>,
            structured into {" "}
            <span style={{ color: "#fff", fontWeight: 500 }}>two-week sprints.</span> 
            {" "} The earlier phase was deliberately exploratory — lo- and mid-fidelity 
            work while we were still pressure-testing features and narrowing scope. 
            As we moved into weeks 6–13, the focus shifted to refinement and building 
            out the final solution. What I appreciated about the sprint model was 
            how it kept the client genuinely involved throughout — not just at the 
            end. Given how tight our timeline was, that continuous feedback loop 
            made a real difference in how quickly we could identify and act on 
            improvements. I led the prototyping process as the team's primary Figma 
            lead, taking ownership of both the lo- and high-fidelity outputs while 
            supporting teammates on the high-fidelity work.
          </p>
        </div>
        {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 4.1 · Lo-Fidelity Prototypes
        </p>
      </div>
      {/* ── Iteration 1 ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "center",
              padding: "2.5rem",
              borderRadius: "16px",
              border: `0.5px solid ${accentBorder}`,
              background: "rgba(255,255,255,0.02)",
            }}>
      
              {/* Left: text content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      
                {/* Iteration badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                    Iteration 01
                  </span>
                  <div style={{ height: "0.5px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
                </div>
      
                {/* Heading */}
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.25,
                  margin: 0,
                }}>
                  Lo-fidelity Prototype
                </h3>
      
                {/* Description */}
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
                  The first iteration was deliberately rough. Rather than designing a polished UI, the goal was simpler: understand how the different interfaces in the system connected and whether that flow made sense end-to-end. Starting from the login page, the most significant early decision was designing a home page to act as a central hub — linking document upload, the chatbot, and notifications together.
                </p>
 
                {/* Reflection callout */}
                <div style={{
                  borderLeft: `2px solid ${accentBorder}`,
                  paddingLeft: "1rem",
                }}>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                    Looking back now, I can see the gaps in that approach. A component diagram should have come first to establish structure before jumping into a visual prototype. From there, the lo-fi work could have been more intentionally split — flow and usability testing separate from early visual exploration.
                  </p>
                </div>
 
                {/* Timeline constraint note */}
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0 }}>
                  At the time though, a tight timeline meant both had to happen in the same rough pass. It wasn't perfect, but it gave the team a shared reference point to build the second iteration from.
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                <ButtonBold href="https://www.figma.com/proto/abc123/EnableID-Prototype?node-id=1-2&scaling=scale-down" accent={accent}>
                  View Prototype
                </ButtonBold>
              </div>
              </div>
              {/* Right: image */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "6/3",
                      borderRadius: "40px",
                      overflow: "hidden",
                  }}>
                      <Image
                      src="/images/EnableID/Lo-fi.png"
                      alt="Iteration 1 — low fidelity prototype"
                      fill
                      style={{ objectFit: "contain" }}
                      />
                  </div>
                  <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontStyle: "italic", textAlign: "center" }}>
                      Low-fidelity wireframe using AutoCAD
                  </p>
                  <div style={{ marginTop: "1rem" }} />
              </div>
            </div>








      {/* ── Iteration 2 ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2.5rem",
        borderRadius: "16px",
        border: `0.5px solid ${accentBorder}`,
        background: "rgba(255,255,255,0.02)",
        marginTop: "4rem",
      }}>

        {/* Iteration badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            Iteration 02
          </span>
          <div style={{ height: "0.5px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* Heading + body — two column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}>

          {/* Left: heading + paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.25,
              margin: 0,
            }}>
              Low-Fidelity Prototype Iteration 2
            </h3>

            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
              The mid-fidelity prototype, also built in Figma, shifted focus toward usability 
              and design coherence — ensuring the app was intuitive to navigate and visually 
              grounded in the client's branding. Gebirah's brand colours (blue, pink, and purple) 
              were applied throughout, and the prototype covered both core and good-to-have features.
            </p>

            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
              Two features in this iteration were directly shaped by client feedback. Our client 
              wanted refugees to be able to share their qualifications and documents with UN officials, 
              doctors, or employers — so we introduced a QR code system that made relevant documents 
              accessible without exposing everything. The list of publicly viewable documents was agreed 
              upon with the client directly. A barcode was also incorporated at his request, giving UN 
              staff a quick way to locate a refugee in their database.
            </p>
          </div>

          {/* Right: client-driven features + reflection */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Flows prototyped */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
                Five interaction flows prototyped
              </p>
              {[
                "Digital identity card reveal",
                "Document upload",
                "Document scanning",
                "AI chatbot",
                "Notifications and verification status page",
              ].map((flow, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: accent, flexShrink: 0, marginTop: "7px",
                  }} />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>{flow}</p>
                </div>
              ))}
            </div>

            {/* Reflection */}
            <div style={{ borderLeft: `2px solid ${accentBorder}`, paddingLeft: "1rem" }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                Looking back, the biggest gap was design cohesion. While the homepage stayed 
                true to Gebirah's palette, other pages drifted noticeably. The notifications 
                page — colour-coded by severity in red, yellow, and green — felt completely 
                disconnected from the rest of the app. It's something I corrected in the next iteration, and a principle that has stuck with me since.
              </p>
            </div>
            <div style = {{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
            <ButtonBold href="https://www.figma.com/proto/abc123/EnableID-Prototype?node-id=1-2&scaling=scale-down" accent={accent}>
                View Prototype
            </ButtonBold>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)" }} />

        {/* Video flows row */}
        <div>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: "0 0 1.25rem 0" }}>
            Interaction flows
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "1rem" }}>
            {[
              { label: "Digital ID Card Reveal", src: "/images/EnableID/Iter2_IDCard.gif" },   
              { label: "Document Upload", src: "/images/EnableID/Doc_Upload.gif" },           
              { label: "Document Scanning", src: "/images/EnableID/Scan_upload.gif" },         
              { label: "AI Chatbot", src: "/images/EnableID/Chatbot_gif.gif" },                
              { label: "Notifications & Verification", src: "/images/EnableID/Notifications.gif" },
              { label: "Resource Locator", src: "/images/EnableID/Resource_Locator.gif" }, 
              { label: "Checking Verification Status", src: "/images/EnableID/VerificationStatus.gif" },
            ].map((flow, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>

                {/* Phone frame */}
                <div style={{
                  width: "100%",
                  maxWidth: "180px",
                  aspectRatio: "9/19",
                  borderRadius: "28px",
                  border: `1.5px solid ${accentBorder}`,
                  background: accentMuted,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  boxShadow: "inset 0 0 0 4px rgba(0,0,0,0.3)",
                }}>
                  {/* Notch */}
                  <div style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "40px",
                    height: "5px",
                    borderRadius: "99px",
                    background: "rgba(255,255,255,0.12)",
                  }} />

                  {flow.src ? (
                    <Image
                      src={flow.src}
                      alt = "Showing QR code"
                      fill
                      style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                    />
                  ) : (
                    <>
                      <div style={{
                        width: "36px", height: "36px", borderRadius: "10px",
                        border: `0.5px solid ${accentBorder}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.4">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", margin: 0, textAlign: "center", padding: "0 1rem" }}>
                        Video placeholder
                      </p>
                    </>
                  )}
                </div>

                {/* Flow label */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textAlign: "center", margin: 0, lineHeight: 1.5 }}>
                  {flow.label}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: "4rem" }}>
            Prototype Pages
          </p>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden' }}>
            <Image
              src="/images/EnableID/Iteration2_FullUI.png"
              alt="Next"
              fill
              style={{ objectFit: 'contain', borderRadius: '12px', overflow: 'hidden' }} // or 'contain'
            />
          </div>
        </div>

      </div>
      <Learnings accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <Iteration3 accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <UserFlow accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
    </div>
  );
}