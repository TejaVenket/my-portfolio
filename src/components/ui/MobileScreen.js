import Image from "next/image";

export default function MobileScreen({ src, caption, accentBorder, accentMuted }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
      <div style={{
        position: "relative",
        width: "90px",
        aspectRatio: "9/19",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${accentBorder}`,
        background: accentMuted,
        boxShadow: "inset 0 0 0 3px rgba(0,0,0,0.25)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute", top: "6px", left: "50%", transform: "translateX(-50%)",
          width: "24px", height: "3px", borderRadius: "99px",
          background: "rgba(255,255,255,0.12)", zIndex: 1,
        }} />
        <Image src={src} alt={caption} fill style={{ objectFit: "cover" }} />
      </div>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", margin: 0, textAlign: "center", width: "90px" }}>
        {caption}
      </p>
    </div>
  );
}