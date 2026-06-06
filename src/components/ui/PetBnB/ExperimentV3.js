const expVideos = [
  { label: "Failure to Meet Requirement", url: "https://youtube.com/shorts/jcmJPkY1MFQ?feature=share", thumbnail: "/images/PetBnB/Iteration3/fail.png" },
  { label: "Scenario A — Without Quick Action", url: "https://youtube.com/shorts/IqnedAnM2Tc?feature=share", thumbnail: "/images/PetBnB/Iteration3/fail.png" },
  { label: "Scenario B — With Quick Action", url: "https://youtube.com/shorts/bHT2gTJ9Abw?feature=share", thumbnail: "/images/PetBnB/Iteration3/fail.png" },
];

const conditions = [
  {
    id: "A",
    label: "Control",
    desc: "Without Quick Action Button",
    participants: 20,
    filtered: 3,
    mean: 6.00,
    sd: 1.08,
    color: "rgba(255,255,255,0.2)",
  },
  {
    id: "B",
    label: "Experimental",
    desc: "With Quick Action Button",
    participants: 16,
    filtered: 7,
    mean: 6.63,
    sd: 0.50,
    color: "#EF9F27",
  },
];

const findings = [
  { label: "Mean trust — Control", value: "6.00 / 7", sub: "Condition A (no quick action)", highlight: false },
  { label: "Mean trust — Experimental", value: "6.63 / 7", sub: "Condition B (with quick action)", highlight: true },
  { label: "SD drop", value: "1.08 → 0.50", sub: "More consistent trust with quick action", highlight: true },
  { label: "p-value", value: "p = 0.0288", sub: "Statistically significant at α = 0.05", highlight: true },
];

function VideoCard({ label, url, thumbnail, accent, accentMuted, accentBorder }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{
        aspectRatio: "9/16", borderRadius: "12px",
        border: `0.5px solid ${accentBorder}`, background: accentMuted,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", cursor: "pointer",
      }}>
        {thumbnail && <img src={thumbnail} alt={label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 0 }} />
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%", background: accent,
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="#000" />
          </svg>
        </div>
        <div style={{
          position: "absolute", top: "10px", right: "10px", zIndex: 2,
          fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase",
          color: accent, background: "rgba(0,0,0,0.55)", padding: "3px 8px",
          borderRadius: "20px", border: `0.5px solid ${accentBorder}`,
        }}>YT Shorts</div>
      </div>
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4, textAlign: "center" }}>{label}</p>
    </a>
  );
}

export default function ExperimentV3({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Iteration 3 · Web Experiment
        </p>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      </div>

      {/* Intro + claim */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "680px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          Proving the Quick Action UI Works
        </h3>
        <div style={{ padding: "16px 20px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <div style={{ width: "3px", borderRadius: "2px", background: accent, alignSelf: "stretch", flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: "0 0 6px" }}>Claim</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, margin: 0 }}>
              The Quick Action UI enhances user confidence, resulting in a measurable increase in trust perceptions by reducing the friction of communication.
            </p>
          </div>
        </div>
      </div>

      {/* A/B condition cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {conditions.map((c) => (
          <div key={c.id} style={{
            borderRadius: "14px", overflow: "hidden",
            border: `0.5px solid ${c.id === "B" ? accentBorder : "rgba(255,255,255,0.1)"}`,
          }}>
            {/* Header */}
            <div style={{ padding: "14px 20px", background: c.id === "B" ? accentMuted : "rgba(255,255,255,0.02)", borderBottom: `0.5px solid ${c.id === "B" ? accentBorder : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: c.id === "B" ? accent : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: c.id === "B" ? "#000" : "rgba(255,255,255,0.4)" }}>{c.id}</span>
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, color: c.id === "B" ? "#fff" : "rgba(255,255,255,0.5)", margin: "0 0 1px" }}>{c.label}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0 }}>{c.desc}</p>
              </div>
              {c.id === "B" && (
                <span style={{ marginLeft: "auto", fontSize: "9px", padding: "3px 8px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, color: accent, background: "rgba(239,159,39,0.08)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Experimental
                </span>
              )}
            </div>

            {/* Stats */}
            <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
              {[
                { label: "Participants", value: `${c.participants}` },
                { label: "Mean Trust", value: `${c.mean.toFixed(2)}` },
                { label: "Std Dev", value: `${c.sd.toFixed(2)}` },
              ].map(s => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: 0 }}>{s.label}</p>
                  <p style={{ fontSize: "20px", fontWeight: 600, color: c.id === "B" ? accent : "rgba(255,255,255,0.5)", margin: 0, fontFamily: "'DM Serif Display', serif" }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Bar viz */}
            <div style={{ padding: "0 20px 16px" }}>
              <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                <div style={{ width: `${(c.mean / 7) * 100}%`, height: "100%", background: c.id === "B" ? accent : "rgba(255,255,255,0.2)", borderRadius: "2px" }} />
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", margin: "5px 0 0", textAlign: "right" }}>out of 7</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key findings */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {findings.map((f) => (
          <div key={f.label} style={{
            padding: "16px", borderRadius: "12px",
            border: `0.5px solid ${f.highlight ? accentBorder : "rgba(255,255,255,0.08)"}`,
            background: f.highlight ? accentMuted : "rgba(255,255,255,0.02)",
          }}>
            <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", margin: "0 0 8px" }}>{f.label}</p>
            <p style={{ fontSize: "20px", fontWeight: 600, color: f.highlight ? accent : "rgba(255,255,255,0.4)", margin: "0 0 4px", fontFamily: "'DM Serif Display', serif", lineHeight: 1 }}>{f.value}</p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0, lineHeight: 1.5 }}>{f.sub}</p>
          </div>
        ))}
      </div>

      {/* Conclusion callout */}
      <div style={{ padding: "20px 24px", borderRadius: "14px", border: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ width: "3px", borderRadius: "2px", background: accent, alignSelf: "stretch", flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: "0 0 8px" }}>Conclusion · Welch's t-test, p = 0.0288</p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: 0 }}>
            User trust was significantly higher in the experimental group. The SD drop from <span style={{ color: "#fff" }}>1.08 → 0.50</span> shows the Quick Action UI not only improved trust but made it more <span style={{ color: "#fff" }}>consistent across users</span> — especially meaningful given the high baseline of 6.00, where further gains are statistically harder to achieve.
          </p>
        </div>
      </div>

      {/* Experiment walkthrough videos */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>Experiment Walkthrough Videos</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
          {expVideos.map((v) => (
            <VideoCard key={v.label} {...v} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder} />
          ))}
        </div>
      </div>

    </div>
  );
}