import Image from "next/image";

const problems = [
  { id: "01", title: "No Centralized Search Platform", desc: "Pet owners browse fragmented sources with no single place to discover and compare local sitters." },
  { id: "02", title: "Over-Reliance on Personal Referrals", desc: "All participants found care exclusively through friends and family, limiting options for those without networks." },
  { id: "03", title: "High Cost Barriers", desc: "Professional pet hotels and private caretakers are prohibitively expensive for some owners." },
  { id: "04", title: "Insufficient Real-Time Updates", desc: "Updates depend entirely on caregiver initiative — no standardized, reliable communication system exists." },
  { id: "05", title: "Limited Visibility of Care", desc: "Owners have little transparency into daily care activities, causing anxiety about their pet's wellbeing." },
  { id: "06", title: "Limited Service Type Options", desc: "Participants are stuck choosing between pet hotels or home boarding, with no drop-ins, walks, or daycare." },
  { id: "07", title: "Difficulty Finding Specialized Care", desc: "Pets with medical needs or behavioral quirks have limited options and owners struggle to find qualified carers." },
  { id: "08", title: "No Standardized Vetting Process", desc: "Without referrals, owners have no way to verify a caregiver's identity, experience, or trustworthiness." },
  { id: "09", title: "Safety & Liability Concerns", desc: "No clear protection or insurance exists in informal arrangements if a pet gets injured or ill." },
  { id: "10", title: "Inconsistent Care Quality", desc: "No industry standards exist, so care quality varies wildly between providers." },
  { id: "11", title: "Poor Pet-Sitter Matching", desc: "High-energy dogs, anxious pets, and seniors all need different sitters — current systems don't facilitate this." },
  { id: "12", title: "Last-Minute Booking Difficulties", desc: "The friend/family referral system breaks under time pressure and pet hotels may already be fully booked." },
  { id: "13", title: "Unclear Emergency Protocols", desc: "No clear process for medical emergencies — sitters and owners are left uncertain about who to contact." },
  { id: "14", title: "Awkward Payment Policies", desc: "Informal arrangements make payment discussions uncomfortable and cancellation terms unclear." },
  { id: "15", title: "Lack of Continuity", desc: "Each booking feels like starting from scratch — no system to build familiarity between pet and sitter." },
];

const participants = [
  { name: "Prudence Tan", age: 47, pet: "Dog", note: "Relies on family referrals; values daily activity updates" },
  { name: "Json Tan", age: 57, pet: "Cat & Dog", note: "Prioritises feeding and walking routines" },
  { name: "Rachel", age: 30, pet: "Dog", note: "Appreciates constant updates and passionate care" },
  { name: "Kang", age: 53, pet: "Cat", note: "Wished for CCTV monitoring; values transparency" },
  { name: "Rhowend Williams", age: 21, pet: "2 Dogs", note: "Cost-conscious; finds hotels and private sitters expensive" },
];

export default function PetBnBResearch({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%" }}>

      {/* ── Section Label ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4rem" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Phase 01 · User Research and Discovery
        </p>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      </div>

      {/* ── Header ── */}
      <div style={{ maxWidth: "600px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          Observations & Problem Space
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          We surveyed 5 pet owners across different age groups and living situations. Unable to conduct in-person observation due to privacy constraints, we distributed a Google Form through pet owner communities and personal networks to uncover real pain points in pet care.
        </p>
      </div>

      {/* ── Participant Cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
        {participants.map((p) => (
          <div key={p.name} style={{ padding: "14px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent }}>
                P{participants.indexOf(p) + 1}
              </span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", padding: "2px 8px", borderRadius: "20px", border: `0.5px solid ${accentBorder}` }}>
                {p.pet}
              </span>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 500, color: "#fff", margin: "0 0 1px" }}>{p.name}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: 0 }}>Age {p.age}</p>
            </div>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
              {p.note}
            </p>
          </div>
        ))}
      </div>

      {/* ── Key Finding callout ── */}
      <div style={{ padding: "20px 24px", borderRadius: "14px", border: `0.5px solid ${accentBorder}`, background: accentMuted, display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div style={{ width: "3px", borderRadius: "2px", background: accent, alignSelf: "stretch", flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: "0 0 6px" }}>Key Finding</p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>
            All 5 participants found pet care exclusively through friends and family referrals. No centralised platform existed — leading us to identify <span style={{ color: "#fff", fontWeight: 500 }}>15 core problems</span> across trust, communication, cost, and accessibility.
          </p>
        </div>
      </div>

      {/* ── Problems Grid ── */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
          15 Problems Identified
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {problems.map((p) => (
            <div key={p.id} style={{ padding: "14px 16px", borderRadius: "12px", border: `0.5px solid ${accentBorder}`, background: "rgba(255,255,255,0.02)", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "10px", color: accent, fontWeight: 500, opacity: 0.7, flexShrink: 0, paddingTop: "1px" }}>
                {p.id}
              </span>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "#fff", margin: "0 0 4px", lineHeight: 1.3 }}>{p.title}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}