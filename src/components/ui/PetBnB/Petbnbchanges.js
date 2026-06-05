const changes = [
  {
    id: "01",
    title: "Unclear Certificate Upload Location",
    heuristic: "Consistency & Standards",
    heuristicNum: 4,
    severity: 3,
    severityLabel: "Major",
    problem: "Multiple sub-pages (About Me, Certificates, Achievements) with similar layouts caused sitters to be unsure where to upload official qualifications.",
    fix: "Created a dedicated Certificates & Training tab with a distinct icon, separated from the general Profile section.",
    before: "/images/PetBnB/Iteration2/before01.png", // 🔁 swap
    after: "/images/PetBnB/Iteration2/after01.png",   // 🔁 swap
  },
  {
    id: "02",
    title: "Sort Mistaken for Filter",
    heuristic: "Match Between System & Real World",
    heuristicNum: 2,
    severity: 3,
    severityLabel: "Major",
    problem: "Sort checkboxes (Distance, Price, Rating) were mistaken for filters. Users expected to filter results first before sorting.",
    fix: "Redesigned as a proper Filter with sliders for price/distance/rating. Default sort by relevance, with re-sort available post-results.",
    before: "/images/PetBnB/Iteration2/before02.png",
    after: "/images/PetBnB/Iteration2/after02.png",
  },
  {
    id: "03",
    title: "Missing Exit Options",
    heuristic: "User Control & Freedom",
    heuristicNum: 3,
    severity: 3,
    severityLabel: "Major",
    problem: "Several pop-ups and overlays had no Close or Cancel button, leaving users with no way to back out without losing progress.",
    fix: "All modal windows and overlays now include a clearly visible Close (X) or Cancel button.",
    before: "/images/PetBnB/Iteration2/before03.png",
    after: "/images/PetBnB/Iteration2/after03.png",
  },
  {
    id: "04",
    title: "Inconsistent Nav Button Placement",
    heuristic: "Consistency & Standards",
    heuristicNum: 4,
    severity: 2,
    severityLabel: "Minor",
    problem: "The Search/Home tab was placed at the centre of the nav bar. Standard mobile convention expects the primary tab on the leftmost side.",
    fix: "Repositioned the Home tab to the leftmost position to align with common mobile UI patterns.",
    before: "/images/PetBnB/Iteration2/before04.png",
    after: "/images/PetBnB/Iteration2/after04.png",
  },
  {
    id: "05",
    title: "Messages & Booked Button Similarity",
    heuristic: "Aesthetic & Minimalist Design",
    heuristicNum: 8,
    severity: 0,
    severityLabel: "Non-issue",
    problem: "It was suggested that the Messages button on the Home Page was redundant alongside the Booked button.",
    fix: "No change. Messages handles system notifications and chat from confirmed bookings — both tabs serve distinct purposes.",
    before: "/images/PetBnB/Iteration2/before05.png",
    after: "/images/PetBnB/Iteration2/after05.png",
  },
  {
    id: "06",
    title: "\"Pawsome Friends\" Title Confusion",
    heuristic: "Recognition Rather Than Recall",
    heuristicNum: 6,
    severity: 0,
    severityLabel: "Non-issue",
    problem: "Some users unfamiliar with the app context found the \"Pawsome Friends\" section label unclear.",
    fix: "No change. The label reinforces pet-centric brand identity and resonates strongly with the target audience. Future testing can revisit.",
    before: "/images/PetBnB/Iteration2/before06.png",
    after: "/images/PetBnB/Iteration2/after06.png",
  },
  {
    id: "07",
    title: "Navigation Bar Has Too Many Tabs",
    heuristic: "Flexibility & Efficiency of Use",
    heuristicNum: 7,
    severity: 0,
    severityLabel: "Non-issue",
    problem: "Some participants felt the five-tab nav bar was excessive.",
    fix: "No change. Five tabs is within standard mobile convention. Future work will focus on visual emphasis rather than reducing tabs.",
    before: "/images/PetBnB/Iteration2/before07.png",
    after: "/images/PetBnB/Iteration2/after07.png",
  },
];

const severityColor = {
  "Major": "#ef4444",
  "Minor": "#f97316",
  "Non-issue": "rgba(255,255,255,0.25)",
};

export default function PetBnBChanges({ accent, accentMuted, accentBorder }) {
  const actionable = changes.filter(c => c.severity > 0);
  const nonIssues = changes.filter(c => c.severity === 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* Intro */}
      <div style={{ maxWidth: "580px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          What We Changed & Why
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          7 usability issues were identified from Iteration 1 testing, evaluated against Nielsen's heuristics, and triaged by severity. 4 were actioned; 3 were assessed as non-issues.
        </p>
      </div>

      {/* Actionable changes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {actionable.map((c) => (
          <div key={c.id} style={{ borderRadius: "14px", border: `0.5px solid ${accentBorder}`, overflow: "hidden" }}>

            {/* Header */}
            <div style={{ padding: "16px 20px", background: accentMuted, borderBottom: `0.5px solid ${accentBorder}`, display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "10px", color: accent, opacity: 0.6, flexShrink: 0 }}>{c.id}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: "0 0 3px" }}>{c.title}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0 }}>
                  Heuristic {c.heuristicNum}: {c.heuristic}
                </p>
              </div>
              {/* Severity badge */}
              <span style={{
                fontSize: "10px", padding: "3px 10px", borderRadius: "20px", flexShrink: 0,
                border: `0.5px solid ${severityColor[c.severityLabel]}`,
                color: severityColor[c.severityLabel],
                background: "rgba(0,0,0,0.3)",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                {c.severityLabel}
              </span>
            </div>

            {/* Body: before/after + images */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>

              {/* Left: problem + fix text */}
              <div style={{ padding: "18px 20px", borderRight: `0.5px solid ${accentBorder}`, display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", margin: "0 0 6px" }}>Problem</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{c.problem}</p>
                </div>
                <div>
                  <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: "0 0 6px" }}>Fix</p>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>{c.fix}</p>
                </div>
              </div>

              {/* Right: before/after images */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                {[{ label: "Before", src: c.before }, { label: "After", src: c.after }].map((img, i) => (
                  <div key={img.label} style={{
                    padding: "12px",
                    borderRight: i === 0 ? `0.5px solid ${accentBorder}` : "none",
                    display: "flex", flexDirection: "column", gap: "8px",
                  }}>
                    <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: i === 0 ? "rgba(255,255,255,0.25)" : accent, margin: 0 }}>
                      {img.label}
                    </p>
                    <div style={{
                      flex: 1, borderRadius: "8px", overflow: "hidden",
                      border: `0.5px solid ${accentBorder}`,
                      background: "rgba(255,255,255,0.03)",
                      aspectRatio: "9/16",
                      position: "relative",
                    }}>
                      {img.src && (
                        <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Non-issues — compact row */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: 0 }}>
          Assessed as Non-Issues
        </p>
        {nonIssues.map((c) => (
          <div key={c.id} style={{
            padding: "14px 18px", borderRadius: "10px",
            border: `0.5px solid ${accentBorder}`,
            background: "rgba(255,255,255,0.02)",
            display: "flex", gap: "14px", alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", flexShrink: 0, paddingTop: "1px" }}>{c.id}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: "0 0 3px", fontWeight: 500 }}>{c.title}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0, lineHeight: 1.6 }}>{c.fix}</p>
            </div>
            <span style={{
              fontSize: "10px", padding: "3px 10px", borderRadius: "20px", flexShrink: 0,
              border: `0.5px solid rgba(255,255,255,0.1)`,
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              No action
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}