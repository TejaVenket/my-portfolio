import Image from "next/image";

import PetBnBPoster from "../ui/PetBnB/Poster";
import MyRole from "../ui/PetBnB/MyRole";
import PetBnBResearch from "../ui/PetBnB/Research";
import PetBnBScenarios from "../ui/PetBnB/Scenarios";
import PetBnBPersona from "../ui/PetBnB/Persona";

import {ButtonBold, ButtonMuted} from "../ui/Buttons";


const bold = (text) => <span style={{ color: "#fff", fontWeight: 500 }}>{text}</span>;
const tags = ["Marketplace", "Mobile App", "Consumer UX", "Service Design"];

export default function PetBnB( { accent, accentMuted, accentBorder }) {
  return (
    <>
      {/* Left: Text */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.75rem" }}>
          Consumer App · Marketplace
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          PetBnB
        </h2>
        <p style={{ fontSize: "13px", color: accent, marginBottom: "1.25rem", fontStyle: "italic", opacity: 0.8 }}>
          Connecting pet owners with trusted sitters
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1.75rem" }}>
          Most pet owners solve the same problem the same way — they ask a friend, 
          post in a group chat, and hope for the best. PetBNB was designed to change 
          that. It's a {bold("trusted, personalized in-home pet care platform")} that connects 
          owners with qualified, verified sitters through {bold("AI-powered matching —")} 
          factoring in ratings, certifications, and booking history to surface the 
          right fit. Once a booking is underway, owners stay in the loop through 
          {bold("real-time photo updates, AI-generated activity summaries, and automated alerts ")}
         for key events, all without having to constantly check in. Sitters 
          get just as much value — a dedicated profile with a certifications tab 
          lets them showcase verified credentials and completed courses, making it 
          easier to build credibility and attract clients. PetBNB bridges a gap that 
          existing platforms have long ignored: the need for transparency, personalization,
          and trust at every step of the pet care experience.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, background: accentMuted, color: accent, letterSpacing: "0.02em" }}>
              {tag}
            </span>
          ))}
        </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <ButtonBold href="https://www.figma.com/design/2Hx1wRBMhorvdfzs9oP9NQ/High-Fidelity-Prototype?node-id=9-3&t=CR7qqTMm5p27SOaA-1" accent={accent}>
              View Figma Page
            </ButtonBold>
            <ButtonMuted href="https://www.figma.com/file/your-file-link" accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} style={{ marginLeft: "12px" }}>
              View Website
            </ButtonMuted>
          </div>

      </div>

      {/* Right: Image */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: accentMuted, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Swap null for your image path e.g. "/images/petbnb.jpg" */}
        {true ? (
          <Image src="/images/PetBnB/Hero.png" alt="PetBnB" fill style={{ objectFit: "cover" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>PetBnB App Screens</p>
        )}
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
      <PetBnBPoster accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <MyRole accent={accent} accentBorder={accentBorder} />
      <PetBnBResearch accent={accent} accentBorder={accentBorder} />
      <PetBnBPersona accent={accent} accentBorder={accentBorder} />
      <PetBnBScenarios accent={accent} accentBorder={accentBorder} />
      </div>
    </>
  );
}