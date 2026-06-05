const claims = [
  {
    id: "01",
    label: "Sitter Discovery",
    claim: "80% of users find a suitable sitter within 1 minute of beginning their search.",
    result: "Average time: 32.5 seconds. All participants completed within 2 minutes.",
    passed: true,
    metric: "32.5s avg",
  },
  {
    id: "02",
    label: "Booking Efficiency",
    claim: "70% of users complete the full booking flow in under 5 minutes.",
    result: "Avg 29.3s to read a profile, 61.8s for the full booking flow — well within target.",
    passed: true,
    metric: "61.8s avg",
  },
  {
    id: "03",
    label: "Sitter Update Speed",
    claim: "85% of pet sitters send an event notification via quick action in under 1 minute.",
    result: "Average of only 10 seconds to navigate to the quick action button. Claim validated.",
    passed: true,
    metric: "10s avg",
  },
  {
    id: "04",
    label: "Chat Navigation",
    claim: "90% of sitters navigate from dashboard to active chat thread in under 10 seconds.",
    result: "Average was exactly 10 seconds — borderline. Some participants struggled to identify the nav icon.",
    passed: false,
    metric: "10s avg",
  },
  {
    id: "05",
    label: "Pet Streak Anxiety",
    claim: "75% of owners report decreased anxiety due to the Pet Streak feature.",
    result: "Claim inaccurate. Most participants were unclear about the streak's purpose and interaction model.",
    passed: false,
    metric: "Unclear UX",
  },
];

const scores = [
  {
    group: "Pet Owner",
    metrics: [
      { label: "Ease of booking", scores: [3, 4, 3.5, 3, 4, 4], avg: 3.58 },
      { label: "Finding a trustworthy sitter", scores: [3.5, 4, 4, 3.5, 4, 5], avg: 4.0 },
      { label: "Pet Streak clarity", scores: [3.5, 4, 3.5, 3, 3, 3], avg: 3.33 },
      { label: "Pet Streak reduces anxiety", scores: [2, 3, 3, 3, 3, 3], avg: 2.83 },
    ],
  },
  {
    group: "Pet Sitter",
    metrics: [
      { label: "Ease of updating client", scores: [3.5, 4, 5, 4, 5, 5], avg: 4.42 },
      { label: "Quick action usefulness", scores: [3.5, 5, 5, 3.5, 4, 5], avg: 4.33 },
      { label: "Messaging accessibility", scores: [3.5, 5, 5, 5, 4, 5], avg: 4.58 },
    ],
  },
];

const participants = [
  { name: "Phoebe", pets: "1 Dog" },
  { name: "Yihe", pets: "1 Dog, 1 Cat, 2 Rabbits, 4 Chickens, Fish" },
  { name: "Tania", pets: "2 Dogs" },
  { name: "Teng Jin", pets: "1 Dog" },
  { name: "Haresh", pets: "1 Dog" },
  { name: "Alagu", pets: "1 Dog, 1 Cat" },
];

function ScoreBar({ value, accent, accentBorder }) {
  const pct = (value / 5) * 100;
  const color = value >= 4 ? accent : value >= 3 ? "rgba(239,159,39,0.6)" : "#ef4444";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ flex: 1, height: "4px", borderRadius: "2px", background: accentBorder, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "2px", transition: "width 0.3s" }} />
      </div>
      <span style={{ fontSize: "11px", color, fontWeight: 500, minWidth: "28px", textAlign: "right" }}>{value.toFixed(1)}</span>
    </div>
  );
}

export default function PetBnBStudy({ accent, accentMuted, accentBorder }) {
  const passed = claims.filter(c => c.passed).length;
  const failed = claims.filter(c => !c.passed).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* Intro + summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
            Testing With Real Users
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
            6 participants — pet owners and sitters aged 18–40 — tested PetBnB across 3 structured tasks. We set 5 measurable claims upfront and evaluated each honestly against the data.
          </p>
        </div>
        {/* Pass/fail summary */}
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          {[{ val: passed, label: "Passed", color: accent }, { val: failed, label: "Failed", color: "#ef4444" }].map(s => (
            <div key={s.label} style={{ padding: "16px 20px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, background: accentMuted, textAlign: "center", minWidth: "72px" }}>
              <p style={{ fontSize: "28px", fontWeight: 600, color: s.color, margin: "0 0 2px", fontFamily: "'DM Serif Display', serif" }}>{s.val}</p>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Claims grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {claims.map((c) => (
          <div key={c.id} style={{
            padding: "16px 18px", borderRadius: "12px",
            border: `0.5px solid ${c.passed ? accentBorder : "rgba(239,68,68,0.3)"}`,
            background: c.passed ? accentMuted : "rgba(239,68,68,0.06)",
            display: "flex", flexDirection: "column", gap: "10px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontSize: "10px", color: c.passed ? accent : "#ef4444", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {c.id}
              </span>
              <span style={{
                fontSize: "9px", padding: "3px 8px", borderRadius: "20px",
                border: `0.5px solid ${c.passed ? accentBorder : "rgba(239,68,68,0.4)"}`,
                color: c.passed ? accent : "#ef4444",
                textTransform: "uppercase", letterSpacing: "0.06em",
              }}>
                {c.passed ? "✓ Passed" : "✗ Failed"}
              </span>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 500, color: "#fff", margin: "0 0 4px" }}>{c.label}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: "0 0 8px" }}>{c.claim}</p>
              <div style={{ height: "1px", background: accentBorder, marginBottom: "8px" }} />
              <p style={{ fontSize: "11px", color: c.passed ? "rgba(255,255,255,0.55)" : "rgba(239,68,68,0.8)", lineHeight: 1.6, margin: 0 }}>{c.result}</p>
            </div>
            <div style={{ padding: "6px 10px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: `0.5px solid ${accentBorder}`, alignSelf: "flex-start" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, color: c.passed ? accent : "#ef4444" }}>{c.metric}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Participants */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: 0 }}>6 Participants</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px" }}>
          {participants.map((p, i) => (
            <div key={p.name} style={{ padding: "12px 14px", borderRadius: "10px", border: `0.5px solid ${accentBorder}`, background: accentMuted }}>
              <p style={{ fontSize: "11px", fontWeight: 500, color: "#fff", margin: "0 0 3px" }}>P{i + 1} · {p.name}</p>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", margin: 0, lineHeight: 1.4 }}>{p.pets}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scores */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {scores.map((group) => (
          <div key={group.group} style={{ borderRadius: "14px", border: `0.5px solid ${accentBorder}`, overflow: "hidden" }}>
            <div style={{ padding: "14px 18px", background: accentMuted, borderBottom: `0.5px solid ${accentBorder}` }}>
              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>{group.group} · Likert Scores (1–5)</p>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {group.metrics.map((m) => (
                <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.label}</p>
                  <ScoreBar value={m.avg} accent={accent} accentBorder={accentBorder} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}