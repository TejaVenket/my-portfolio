import Image from "next/image";
import Carousel from "../Carousel";

export default function Iterations({accent, accentBorder, accentMuted,
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
          Phase 4 · Prototype Iterations
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "2rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 2.1 · Ideation
        </p>
      </div>
    </div>
  );
}