import Image from "next/image";
import Carousel from "../Carousel";

import SolutionBrainstorming from "./SolutionBrainstorming";
import FinalFeatures from "./FinalFeatures";
import Storyboard from "./Storyboard";

export default function Solution({accent, accentBorder, accentMuted,
}) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>

      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2rem" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        <p style={{
          fontSize: "22px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Phase 3 · Solution Brainstorming
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Sub-phase label */}
      
      <SolutionBrainstorming accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <Storyboard accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <FinalFeatures accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />

    </div>
  );
}