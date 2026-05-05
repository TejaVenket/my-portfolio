import Image from "next/image";
import Carousel from "../Carousel";
import Iteration3 from "./Iteration3";
import PowerBI from "./PowerBI";


const mySlides = [
  {
    image: "/images/SafeSight/Landing Page.jpg", 
    label: "Precedent 01",
    caption: "Landing Page ",
  },
  {
    image: "/images/SafeSight/Landing Page with Incident Drawer.jpg", 
    label: "Precedent 02",
    caption: "Landing Page with Incident Drawer",
  },
];

export default function Prototyping({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

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
            Establishing the Core Interface using AutoCAD
          </h3>

          {/* Description */}
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
            Building on the defined constraints and design principles, I developed an initial
            low-fidelity concept to establish the overall structure of the User Portal. This
            iteration focused on prioritising simplicity and immediate usability by designing
            a single, centralised landing page where all key interactions could take place
            without additional navigation.
          </p>

          {/* Key features introduced */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
              Key Features
            </p>
            {[
              { feature: "Mini dashboard", desc: "Quick access to key KPIs at a glance" },
              { feature: "System log", desc: "Filterable by date, time, type, and location" },
              { feature: "Incident drawer", desc: "Expandable panel with metadata and video clip" },
            ].map((item) => (
              <div key={item.feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: accent,
                  flexShrink: 0,
                  marginTop: "7px",
                }} />
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.feature}</span>
                  {" — "}{item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Goal callout */}
          <div style={{
            borderLeft: `2px solid ${accent}`,
            paddingLeft: "1rem",
            marginTop: "0.25rem",
          }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              Aimed at defining the core interaction model and information hierarchy, ensuring
              supervisors could efficiently scan, investigate, and act on incidents within a
              unified interface.
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "6/3",
                borderRadius: "40px",
            }}>
                <Image
                src="/images/SafeSight/AutoCAD.png"
                alt="Iteration 1 — low fidelity prototype"
                fill
                style={{ objectFit: "contain" }}
                />
            </div>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)",fontStyle: "italic", textAlign: "center" }}>
                Low-fidelity wireframe using AutoCAD
            </p>
        </div>
      </div>

      {/* Placeholder for future iterations — duplicate the block above and update content */}
      {/* ── Iteration 2 ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3.5rem",
        alignItems: "center",
        padding: "2.5rem",
        borderRadius: "16px",
        border: `0.5px solid ${accentBorder}`,
        background: "rgba(255,255,255,0.02)",
        marginTop: "1.5rem",
      }}>
 
        {/* Left: image — flipped for visual variety */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            {/* Swap null → your image path e.g. "/images/SafeSight/iteration-2.jpg" */}
            {true ? (
              <Carousel slides={mySlides} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder}/>
            ) : (
              <div style={{
                width: "100%",
                height: "100%",
                background: accentMuted,
                border: `0.5px solid ${accentBorder}`,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "6px",
              }}>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", margin: 0 }}>Iteration 2 prototype</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>Replace null with your image path</p>
              </div>
            )}
          </div>
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0, fontStyle: "italic", textAlign: "center" }}>
            Mid-fidelity Figma prototype — refined interface structure
          </p>
        </div>
 
        {/* Right: text content */}
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
              Iteration 02
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
            Mid-Fidelity Validation
          </h3>
 
          {/* Description */}
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
            While Iteration 1 established the overall structure, it lacked the visual clarity
            needed for meaningful stakeholder feedback. I developed a mid-fidelity prototype
            in Figma, allowing supervisors to more accurately gauge the interface and provide
            actionable input.
          </p>
 
          {/* Key refinements */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", margin: 0 }}>
              Refined in this iteration
            </p>
            {[
              { feature: "System log", desc: "Added Incident ID and Date; removed less relevant fields in favour of Edit and Delete controls" },
              { feature: "Mini dashboard", desc: "Defined four core metrics — Case Status Summary, New Incident Notifications, High-Severity Cases, and a KPI placeholder" },
              { feature: "Action bar", desc: "Introduced above the system log to allow supervisors to manually log incidents not captured by the AI camera" },
            ].map((item) => (
              <div key={item.feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: accent,
                  flexShrink: 0,
                  marginTop: "7px",
                }} />
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.feature}</span>
                  {" — "}{item.desc}
                </p>
              </div>
            ))}
          </div>
 
          {/* Goal callout */}
          <div style={{
            borderLeft: `2px solid ${accent}`,
            paddingLeft: "1rem",
            marginTop: "0.25rem",
          }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
              Focused on increasing clarity, usability, and alignment with operational workflows —
              while enabling more effective feedback from stakeholders.
            </p>
          </div>
 
        </div>
      </div>

        {/* Stakeholder feedback section */}
        {/* ── Stakeholder Feedback — Iteration 2 ── */}
      <div style={{
        marginTop: "3rem",
        
        
      }}>

        {/* Header row */}
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
            Stakeholder Feedback
          </span>
          <div style={{ height: "0.5px", flex: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>

        <h3 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.5rem",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.25,
          margin: "0 0 1rem",
        }}>
          Iteration 2 — Feedback & Insights
        </h3>

        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: "0 0 2rem", maxWidth: "70ch" }}>
          Following a walkthrough of the mid-fidelity prototype with the warehouse supervisor at DSV,
          I gathered detailed feedback to further align the system with real operational workflows.
          This session was critical in validating assumptions and identifying refinements needed for
          production readiness.
        </p>

        {/* Feedback grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "2rem" }}>
          {[
            {
              area: "System Level",
              items: [
                { title: "Rebranding", desc: "Interface updated from DB Schenker to DSV to reflect organisational changes" },
              ],
            },
            {
              area: "Incident Drawer",
              items: [
                { title: "Video duration", desc: "Evidence clip refined to 20 seconds before and after each incident, matching how supervisors review footage in practice" },
                { title: "Editable status", desc: "Status tracking updated to be editable, allowing management to continuously update case progress" },
              ],
            },
            {
              area: "Reporting & Structure",
              items: [
                { title: "5W1H framework", desc: "Incident details restructured to follow Who, What, When, Where, Why, How — standard practice for DSV's internal investigations" },
                { title: "Incident classification", desc: "Logs refined to distinguish between Accidents (physical damage or safety incidents) and Violations (non-critical unsafe behaviour)" },
              ],
            },
            {
              area: "Operational",
              items: [
                { title: "Visibility controls", desc: "Internal data separated from client-facing exports — full activity logs retained for supervisors, excluded from PDF reports" },
                { title: "Filtering & export", desc: "Custom filtering by date, location, and incident type added, with a more intuitive export function placement" },
              ],
            },
          ].map((group) => (
            <div
              key={group.area}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `0.5px solid ${accentBorder}`,
                borderRadius: "12px",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, margin: 0 }}>
                {group.area}
              </p>
              <div style={{ height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
              {group.items.map((item) => (
                <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "7px" }} />
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item.title}</span>
                    {" — "}{item.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Closing callout */}
        <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: "1rem" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
            While the mini dashboard concept was well received, certain elements such as the Performance
            Indicator remain as placeholders pending further stakeholder validation. Overall, this
            feedback loop helped refine the system to better reflect real-world usage, reporting
            standards, and operational priorities — strengthening both usability and adoption potential.
          </p>
        </div>
      </div>
      <Iteration3 accent={accent} accentMuted={accentMuted} accentBorder={accentBorder} />
      <PowerBI accent={accent}/>
    </div>
  );
}