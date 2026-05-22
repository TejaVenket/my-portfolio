import Image from "next/image";

export default function WebScreen({ src, caption, accentBorder, accentMuted }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <div style={{
        position: "relative", width: "100%", aspectRatio: "16/9",
        borderRadius: "10px", overflow: "hidden",
        border: `0.5px solid ${accentBorder}`, background: accentMuted,
      }}>
        <Image src={src} alt={caption} fill style={{ objectFit: "cover" }} />
      </div>
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>{caption}</p>
    </div>
  );
}