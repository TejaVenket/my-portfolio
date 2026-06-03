import Image from "next/image";


export default function PetBnBPersona({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* ── Section Label ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          Persona: Rhowend Tan
        </h3>
      </div>

      {/* ── Main persona card ── */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: accentMuted, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Swap null for your image path e.g. "/images/petbnb.jpg" */}
        {true ? (
          <Image src="/images/PetBnB/Persona.png" alt="PetBnB" fill style={{ objectFit: "contain" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>PetBnB App Screens</p>
        )}
      </div>
    </div>
  );
}