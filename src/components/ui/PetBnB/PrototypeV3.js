import Image from "next/image";

const scenarios = [
  {
    id: "01",
    title: "Finding a Reliable, Trusted Sitter for a 3-Day Trip",
    url: "https://youtube.com/shorts/UUCOvGJi7kY?feature=share",
    thumbnail: "/images/PetBnB/Iteration3/reliable.png",
  },
  {
    id: "02",
    title: "Getting a Fast, Clear Medicine Update for a Sensitive Dog",
    url: "https://youtube.com/shorts/paZU2GMNzPA?feature=share",
    thumbnail: "/images/PetBnB/Iteration3/Fast.png",
  },
  {
    id: "03",
    title: "Staying Reassured During the Trip",
    url: "https://youtube.com/shorts/6LO8wpP_rOk?feature=share",
    thumbnail: "/images/PetBnB/Iteration3/Reassure.png",
  },
];

const links = [
  { label: "Figma Prototype", sub: "High Fidelity · Final", url: "https://www.figma.com/design/2Hx1wRBMhorvdfzs9oP9NQ/High-Fidelity-Prototype?node-id=9-3" },
  { label: "Live Web App", sub: "Deployed on Vercel", url: "https://petbnb-pwa.vercel.app/" },
];

function VideoCard({ id, title, url, thumbnail, accent, accentMuted, accentBorder }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{
        aspectRatio: "9/16", borderRadius: "14px",
        border: `0.5px solid ${accentBorder}`, background: accentMuted,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", cursor: "pointer",
      }}>
        <Image src={thumbnail} alt={title} fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 0 }} />

        {/* Play */}
        <div style={{
          width: "44px", height: "44px", borderRadius: "50%", background: accent,
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="#000" />
          </svg>
        </div>

        {/* Scenario badge */}
        <div style={{
          position: "absolute", top: "12px", left: "12px", zIndex: 2,
          fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase",
          color: accent, background: "rgba(0,0,0,0.6)", padding: "4px 10px",
          borderRadius: "20px", border: `0.5px solid ${accentBorder}`,
        }}>Scenario {id}</div>

        <div style={{
          position: "absolute", top: "12px", right: "12px", zIndex: 2,
          fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase",
          color: accent, background: "rgba(0,0,0,0.6)", padding: "4px 10px",
          borderRadius: "20px", border: `0.5px solid ${accentBorder}`,
        }}>YT Shorts</div>
      </div>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.5, textAlign: "center" }}>{title}</p>
    </a>
  );
}

export default function PrototypeV3({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
          Iteration 3 · Final Prototype
        </p>
        <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      </div>

      {/* Intro */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
            The Final Build
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
            Three scenario walkthroughs demonstrate the refined end-to-end experience — from finding a sitter to staying reassured throughout the trip.
          </p>
        </div>

        {/* CTA links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
          {links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{
              textDecoration: "none", padding: "12px 16px", borderRadius: "10px",
              border: `0.5px solid ${accentBorder}`, background: accentMuted,
              display: "flex", alignItems: "center", gap: "12px", minWidth: "220px",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(239,159,39,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = accentMuted}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "12px", fontWeight: 500, color: "#fff", margin: "0 0 1px" }}>{l.label}</p>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", margin: 0 }}>{l.sub}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3 8H13M9 4L13 8L9 12" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Scenario videos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {scenarios.map((s) => (
          <VideoCard key={s.id} {...s} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder} />
        ))}
      </div>

    </div>
  );
}