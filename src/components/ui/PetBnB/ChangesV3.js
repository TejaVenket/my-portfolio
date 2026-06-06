import Image from "next/image";

const changes = [
  {
    id: "01",
    title: "Expanded & Clarified Filter Options",
    type: "redesign",
    problem: "The original modal only had sort checkboxes (price, distance). Users expected actual filters — dates, price range, services.",
    fix: "Redesigned filter system with meaningful sliders and toggles matching mental models from hotel and service-booking apps.",
    before: "/images/PetBnB/Iteration2/after02.png",
    after: "/images/PetBnB/Iteration3/after01v3.png",
  },
  {
    id: "02",
    title: "Summary Tags on Review System",
    type: "addition",
    problem: "Reading through long reviews was time-consuming. Users couldn't quickly gauge a sitter's strengths.",
    fix: "Auto-generated summary tags (e.g. Reliable, Caring, Friendly) at the top of the review section, pulled from frequent phrases.",
    before: "/images/PetBnB/Iteration3/before02v3.png",
    after: "/images/PetBnB/Iteration3/after02v3.png",
  },
  {
    id: "03",
    title: "Pet Streak Removed",
    type: "removed",
    problem: "Pet Streak tracked consecutive update days but added cognitive load without improving the care experience. Not relevant for short bookings.",
    fix: "Feature removed entirely. Interface simplified to keep focus on real-time updates and trust-building features.",
    before: "/images/PetBnB/Iteration3/before03v3.png",
    after: null,
  },
  {
    id: "04",
    title: "Cooldown Timer Extended",
    type: "tweak",
    problem: "The 15-minute cooldown allowed owners to spam sitters with frequent update requests, creating unnecessary pressure.",
    fix: "Cooldown extended from 15 minutes to 1.5 hours — respects sitter workflow while still enabling meaningful updates.",
    before: "/images/PetBnB/Iteration3/before04v3.png",
    after: "/images/PetBnB/Iteration3/after04v3.png",
  },
  {
    id: "05",
    title: "Custom Quick Action Button",
    type: "addition",
    problem: "Default actions (Walk, Feed, Play) didn't cover every pet's unique routine (e.g. Shower, Medicine, Sleep).",
    fix: "Owners can now create one custom quick action alongside the defaults, enabling personalised updates per pet.",
    before: "/images/PetBnB/Iteration3/before05v3.png",
    after: "/images/PetBnB/Iteration3/after05v3.png",
  },
  {
    id: "06",
    title: "Active vs Past Owner in Chat",
    type: "redesign",
    problem: "Sitters couldn't tell which chat conversations were from currently active bookings vs past clients, causing missed responses.",
    fix: "Added a Current status tag to active booking chats. Past owner chats remain untagged for clean differentiation.",
    before: "/images/PetBnB/Iteration3/before06v3.png",
    after: "/images/PetBnB/Iteration3/after06v3.png",
  },
  {
    id: "07",
    title: "System Messages Visually Distinct",
    type: "redesign",
    problem: "Automated system messages (booking confirmations, reminders) were indistinguishable from regular chat messages.",
    fix: "System messages now render in an orange bubble with a dotted border — strong visual contrast without disrupting chat flow.",
    before: "/images/PetBnB/Iteration3/before07v3.png",
    after: "/images/PetBnB/Iteration3/after07v3.png",
  },
];

const typeConfig = {
  redesign: { label: "Redesign", color: "#3b82f6" },
  addition: { label: "Addition", color: "#22c55e" },
  removed: { label: "Removed", color: "#ef4444" },
  tweak: { label: "Tweak", color: "#f97316" },
};

export default function PetBnBChangesV3({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>
 
      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Iteration 3 · Changes
        </p>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      </div>
 
      {/* Intro */}
      <div style={{ maxWidth: "580px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          Refining Based on Evidence
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          7 changes were made for the final iteration — driven by user study findings, heuristic evaluation, and honest reflection on what wasn't working. One feature was removed entirely.
        </p>
      </div>
 
      {/* Type legend */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {Object.entries(typeConfig).map(([key, val]) => (
          <span key={key} style={{
            fontSize: "10px", padding: "4px 12px", borderRadius: "20px",
            border: `0.5px solid ${val.color}40`,
            color: val.color, background: `${val.color}10`,
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>{val.label}</span>
        ))}
      </div>
 
      {/* Changes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {changes.map((c) => {
          const tc = typeConfig[c.type];
          return (
            <div key={c.id} style={{ borderRadius: "14px", border: `0.5px solid ${accentBorder}`, overflow: "hidden" }}>
 
              {/* Header */}
              <div style={{ padding: "14px 20px", background: accentMuted, borderBottom: `0.5px solid ${accentBorder}`, display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "10px", color: accent, opacity: 0.6, flexShrink: 0 }}>{c.id}</span>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: 0, flex: 1 }}>{c.title}</p>
                <span style={{
                  fontSize: "10px", padding: "3px 10px", borderRadius: "20px", flexShrink: 0,
                  border: `0.5px solid ${tc.color}50`, color: tc.color,
                  background: `${tc.color}10`, letterSpacing: "0.06em", textTransform: "uppercase",
                }}>{tc.label}</span>
              </div>
 
              {/* Body */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
 
                {/* Text */}
                <div style={{ padding: "16px 20px", borderRight: `0.5px solid ${accentBorder}`, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: "0 0 6px" }}>Problem</p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>{c.problem}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: "0 0 6px" }}>
                      {c.type === "removed" ? "Decision" : "Fix"}
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{c.fix}</p>
                  </div>
                </div>
 
                {/* Before / After images — always 2 columns */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  {/* Before */}
                  <div style={{ padding: "12px", borderRight: `0.5px solid ${accentBorder}`, display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.25)", margin: 0 }}>Before</p>
                    <div style={{ aspectRatio: "9/16", borderRadius: "8px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: "rgba(255,255,255,0.03)", position: "relative" }}>
                      {c.before && <Image src={c.before} alt="Before" fill style={{ objectFit: "contain" }} />}
                    </div>
                  </div>
 
                  {/* After — or removed state */}
                  <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: c.after ? accent : "#ef4444", margin: 0 }}>After</p>
                    {c.after ? (
                      <div style={{ aspectRatio: "9/16", borderRadius: "8px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: "rgba(255,255,255,0.03)", position: "relative" }}>
                        <Image src={c.after} alt="After" fill style={{ objectFit: "contain" }} />
                      </div>
                    ) : (
                      <div style={{ aspectRatio: "9/16", borderRadius: "8px", border: "0.5px dashed rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontSize: "11px", color: "rgba(239,68,68,0.5)", margin: 0, textAlign: "center" }}>Feature removed</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 