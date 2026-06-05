import Image from "next/image";

const videos = [
  {
    group: "Pet Sitter",
    items: [
      { title: "Feed Routine", url: "https://youtube.com/shorts/eNBiHhrSGiE", thumbnail: "/images/PetBnB/Iteration2/feed.png" },
      { title: "Chat Navigation", url: "https://youtube.com/shorts/T4OGADywOe0", thumbnail: "/images/PetBnB/Iteration2/chatnav.png" },
    ],
  },
  {
    group: "Pet Owner",
    items: [
      { title: "Pet Filter", url: "https://youtube.com/shorts/r8jPan0S8-Y", thumbnail: "/images/PetBnB/Iteration2/pet.png" },
      { title: "Sitter Search", url: "https://youtube.com/shorts/mQOPcgLIixs", thumbnail: "/images/PetBnB/Iteration2/sittersearch.png" },
      { title: "Pet Streak", url: "https://youtu.be/5z0BFZiv0b4", thumbnail: "/images/PetBnB/Iteration2/petstreak.png" },
    ],
  },
];

const links = [
  { label: "Figma Prototype", sub: "Medium & High Fidelity", url: "https://www.figma.com/design/2Hx1wRBMhorvdfzs9oP9NQ/High-Fidelity-Prototype?node-id=9-3" },
  { label: "Live Web App", sub: "Deployed on Vercel", url: "https://petbnb-pwa.vercel.app/" },
];

const simulated = [
  { fidelity: "Medium Fidelity", features: ["Payment page", "In-built Camera", "Google Maps API"] },
  { fidelity: "High Fidelity", features: ["Payment Page"] },
];

function VideoCard({ title, url, thumbnail, accent, accentMuted, accentBorder }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{
        aspectRatio: "6/4", borderRadius: "12px",
        border: `0.5px solid ${accentBorder}`, background: accentMuted,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", cursor: "pointer",
      }}>
        <Image src={thumbnail} alt={title} fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 0 }} />
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%", background: accent,
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, flexShrink: 0,
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
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.4, textAlign: "center" }}>{title}</p>
    </a>
  );
}

export default function PetBnBPrototypeV2({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      

      {/* Intro */}
      <div style={{ maxWidth: "580px" }}>
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          From Paper to Pixels
        </h3>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
          Iteration 2 moved from paper prototype to a medium and high fidelity build — including a live web app. Key flows were validated through walkthrough videos across both user types.
        </p>
      </div>

      {/* CTA links + simulated features */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {links.map((l) => (
            <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" style={{
              textDecoration: "none", padding: "16px 18px", borderRadius: "12px",
              border: `0.5px solid ${accentBorder}`, background: accentMuted,
              display: "flex", alignItems: "center", gap: "14px",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(239,159,39,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = accentMuted}
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: "0 0 2px" }}>{l.label}</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: 0 }}>{l.sub}</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3 8H13M9 4L13 8L9 12" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Simulated features */}
        <div style={{ borderRadius: "12px", border: `0.5px solid ${accentBorder}`, overflow: "hidden" }}>
          <div style={{ padding: "12px 16px", background: accentMuted, borderBottom: `0.5px solid ${accentBorder}` }}>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>Simulated Features</p>
          </div>
          <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {simulated.map((s) => (
              <div key={s.fidelity}>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.fidelity}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {s.features.map(f => (
                    <span key={f} style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.03)" }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", margin: 0 }}>
          Scenario Walkthrough Videos
        </h4>
        {videos.map((group) => (
          <div key={group.group} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>{group.group}</p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${group.items.length}, 1fr)`, gap: "12px" }}>
              {group.items.map((v) => (
                <VideoCard key={v.title} {...v} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder} />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}