import Image from "next/image";

const problems = [
  {
    image: "/images/Frame1.jpg",
    title: "Call from Client",
    description:
      "A safety incident such as crate toppling occurs due to SOP violations. The violation usually goes unnoticed until a customer files a complaint days later.",
  },
  {
    image: "/images/Frame2_new.jpg",
    title: "Rummaging CCTV Footage",
    description:
      "To identify the root cause, supervisors must watch hours of CCTV footage. This is a tedious process that consumes up to 8 hours.",
  },
  {
    image: "/images/Frame3.jpg",
    title: "Resolution Process",
    description:
      "Under intense pressure to respond to customers promptly, supervisors must interview staff and draft formal reports. This process drags on for two full days before the case can be resolved.",
  },
];

export default function ProblemCards({ accentBorder, accentMuted }) {
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "3rem",
        alignItems: "start",
        marginTop: "2rem",
      }}
    >
      {problems.map((card, i) => (
        <div
          key={i}
          style={{
            height: "22rem",
            borderRadius: "12px",
            overflow: "hidden",
            border: `0.5px solid ${accentBorder}`,
            background: "rgba(255,255,255,0.03)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              background: accentMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
          </div>

          {/* Text */}
          <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff" }}>{card.title}</p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}