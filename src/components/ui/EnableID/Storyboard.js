"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "../Carousel";

const mySlides = [
  { image: "/images/EnableID/Storyboard1.png", label: "Slide 01", caption: "Malay-speaking Abdul Ahmed wants to reconnect with his family." },
  { image: "/images/EnableID/Storyboard2.png", label: "Slide 02", caption: "Refugee Hong Sovannarith wants to get her documents uplaoded and verified." },
  { image: "/images/EnableID/Storyboard3.png", label: "Slide 03", caption: "Refugee Dr Amir wants to find a job in medicine in his host country." },
  { image: "/images/EnableID/Storyboard4.png", label: "Slide 04", caption: "Refugee who is not technologically savvy does not know how to use the app" },
];

export default function Storyboard({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  const [active, setActive] = useState(0);
  const frame = frames[active];

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "4rem" }}>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, margin: 0 }}>
          Phase 3.2 · Storyboarding
        </p>
      </div>

      {/* Heading row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "60%" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
            The Refugee's Journey
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
            The primary purpose of the storyboards is to combine imagery and text to 
            illustrate the journey that our user would go through to use our solution.
          </p>
        </div>
        
      </div>
      
        <Carousel slides={mySlides} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder} fit="contain" aspectRatio="7/3" />
      
    </div>
  );
}