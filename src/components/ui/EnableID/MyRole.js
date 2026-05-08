"use client";

export default function MyRole({ accent, accentBorder }) {
    return (
      <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
          <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap" }}>
            My Role
          </p>
          <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        </div>

        <div className="flex items-center" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

          {/* Left: contribution pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { area: "Problem Framing and Solution Brainstorming", detail: "Stakeholder research & solution scoping" },
              { area: "Frontend Development", detail: "UI design & iterative prototyping" },
              { area: "Computer Vision", detail: "Rule sets for violation detection" },
              { area: "Deployment", detail: "End-to-end production rollout" },
            ].map((item) => (
              <div
                key={item.area}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255,255,255,0.03)",
                  border: `0.5px solid ${accentBorder}`,
                  borderRadius: "10px",
                  padding: "0.75rem 1rem",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{item.area}</span>
                </div>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textAlign: "right" }}>{item.detail}</span>
              </div>
            ))}
          </div>
          {/* Right: paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              I played a key role in shaping both the product design and frontend development of 
              SafeSight. Throughout the project, I led much of the client communication process—from 
              early-stage discovery sessions focused on understanding operational pain points and 
              defining the project scope, to bi-weekly sprint reviews where we updated stakeholders 
              on development progress and gathered iterative feedback.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              On the design side, I was responsible for the UI/UX direction of the platform, creating 
              both the low-fidelity and mid-fidelity prototypes in Figma. As the project evolved, I 
              also took the lead in coordinating the transition into high-fidelity prototyping, working 
              closely with my teammates to ensure consistency across the overall user experience.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
              Beyond design, I developed the frontend of the application using React, translating the 
              design system into a functional and interactive product. This end-to-end involvement 
              allowed me to bridge user needs, interface design, and implementation—ensuring that the 
              final system was both intuitive and aligned with real operational workflows.
            </p>
          </div>
        </div>
      </div>
    );
}

