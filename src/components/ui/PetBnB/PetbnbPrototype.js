import Image from "next/image";

const inspirations = [
  {
    name: "Airbnb",
    category: "Accommodation Booking",
    image: "/images/PetBnB/Inspo/AirBnB.png", // 🔁 swap
    takeaways: ["Dual-mode host/guest switching", "Trust via verified profiles & reviews", "Clean, minimal browse experience"],
  },
  {
    name: "PetBacker",
    category: "Pet Boarding App",
    image: "/images/PetBnB/Inspo/PetBacker.png", // 🔁 swap
    takeaways: ["Real-time photo update feed", "Centralised pet profile management", "Visual badge system for sitter credentials"],
  },
  {
    name: "Glow Baby",
    category: "Baby Tracking App",
    image: "/images/PetBnB/Inspo/GlowBaby.png", // 🔁 swap
    takeaways: ["AI-generated care insights", "Quick-tap action buttons (Fed, Walked, Meds)"],
  },
  {
    name: "Bounce",
    category: "Luggage Storage App",
    image: "/images/PetBnB/Inspo/bounce.png", // 🔁 swap
    takeaways: ["Hourly increment booking flexibility", "Visual time-slot tap-to-select UI"],
  },
  {
    name: "LinkedIn",
    category: "Professional Networking",
    image: "/images/PetBnB/Inspo/linkedin.png", // 🔁 swap
    takeaways: ["Verified certification badges", "Skill endorsements from past clients"],
  },
];

const ownerVideos = [
  { title: "Personalised Explore Page", 
    url: "https://youtube.com/shorts/wNmbFbuB-kk", 
    thumbnail: "/images/PetBnB/Iteration1/ExplorePage.png" },

  { title: "User Search", 
    url: "https://youtube.com/shorts/HPDN1dBteuw", 
    thumbnail: "/images/PetBnB/Iteration1/UserSearch.png" },

  { title: "User Booking", 
    url: "https://youtube.com/shorts/VRTL77LGCaU", 
    thumbnail: "/images/PetBnB/Iteration1/UserBooking.png" },
];

const sitterVideos = [
  { title: "Creating a Listing", 
    url: "https://youtube.com/shorts/BSTjttkg3X0", 
    thumbnail: "/images/PetBnB/Iteration1/CreateListing.png" },

  { title: "Add Certification", 
    url: "https://youtube.com/shorts/OlHmHBWQYYk", 
    thumbnail: "/images/PetBnB/Iteration1/AddCertification.png" },

  { title: "Routine Action Update", 
    url: "https://youtube.com/shorts/CGZDNsP53r4", 
    thumbnail: "/images/PetBnB/Iteration1/RoutineUpdate.png" },

  { title: "Toggle Owner ↔ Sitter", 
    url: "https://youtube.com/shorts/iAfFuNdsBtA", 
    thumbnail: "/images/PetBnB/Iteration1/Toggle.png" },
];

function SectionDivider({ accent, accentBorder, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{ height: "1px", flex: 1, background: accentBorder }} />
      <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.14em", color: accent, margin: 0, whiteSpace: "nowrap" }}>
        {label}
      </p>
      <div style={{ height: "1px", flex: 1, background: accentBorder }} />
    </div>
  );
}

function VideoCard({ title, url, accent, accentMuted, accentBorder, thumbnail}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {/* Play button area */}
      <div style={{
        aspectRatio: "9/16",
        borderRadius: "12px",
        border: `0.5px solid ${accentBorder}`,
        background: accentMuted,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}>
        
    <Image src={thumbnail} alt={title} fill style={{ objectFit: "cover", position: "absolute", top: 0, left: 0 }} />

      {/* Dark overlay so play button is visible */}
        <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 0,
        }} />

      {/* Play circle */}
        <div style={{
          width: "44px", height: "44px", borderRadius: "50%",
          background: accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          zIndex: 1,
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="#000" />
          </svg>
        </div>

        {/* "Shorts" label top-right */}
        <div style={{
          position: "absolute", top: "10px", right: "10px",
          fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase",
          color: accent, background: "rgba(0,0,0,0.5)",
          padding: "3px 8px", borderRadius: "20px",
          border: `0.5px solid ${accentBorder}`,
        }}>
          YT Shorts
        </div>
      </div>

      {/* Title */}
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.4, textAlign: "center" }}>
        {title}
      </p>
    </a>
  );
}

export default function PetBnBPrototype({ accent, accentMuted, accentBorder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", marginTop: "4rem" }}>

      {/* ── Section Label ── */}
      <SectionDivider accent={accent} accentBorder={accentBorder} label="Phase 02 · Iteration 1 Prototype" />

      {/* ── Inspirations ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
            Inspirations
          </h3>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            Five apps shaped the design direction of PetBnB.
          </p>
        </div>

        {/* Inspirations grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
          {inspirations.map((app) => (
            <div key={app.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Image placeholder */}
              <div style={{
                aspectRatio: "3/4",
                borderRadius: "12px",
                border: `0.5px solid ${accentBorder}`,
                background: accentMuted,
                overflow: "hidden",
                position: "relative",
              }}>
                <Image src={app.image} alt={app.name} fill style={{ objectFit: "cover" }} />
              </div>

              {/* App name + category */}
              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: "0 0 2px" }}>{app.name}</p>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", margin: "0 0 8px", letterSpacing: "0.04em" }}>{app.category}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {app.takeaways.map((t) => (
                    <div key={t} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, fontSize: "9px", paddingTop: "3px", flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thin divider */}
      <div style={{ height: "1px", background: accentBorder }} />

      {/* ── Paper Prototype placeholder ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
            Paper Prototype
          </h3>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            Low-fidelity screens covering both pet owner and sitter flows.
          </p>
        </div>

        {/* Paper prototype image placeholder */}
        <div style={{
          width: "100%", aspectRatio: "16/7",
          borderRadius: "14px",
          border: `0.5px solid ${accentBorder}`,
          background: accentMuted,
          overflow: "hidden",
          position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* 🔁 Swap src with your paper prototype image */}
          <Image src="/images/PetBnB/paperprototypes.png" alt="Paper prototype" fill style={{ objectFit: "cover" }} />
        </div>
      </div>

      {/* Thin divider */}
      <div style={{ height: "1px", background: accentBorder }} />

      {/* ── Video Walkthroughs ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: "0 0 0.5rem" }}>
            Video Walkthroughs
          </h3>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
            YouTube Shorts covering key flows for both pet owners and sitters.
          </p>
        </div>

        {/* Pet Owner */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>
            Pet Owner
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {ownerVideos.map((v) => (
              <VideoCard key={v.title} {...v} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder}/>
            ))}
          </div>
        </div>

        {/* Pet Sitter */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: accent, margin: 0 }}>
            Pet Sitter
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {sitterVideos.map((v) => (
              <VideoCard key={v.title} {...v} accent={accent} accentMuted={accentMuted} accentBorder={accentBorder}  />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}