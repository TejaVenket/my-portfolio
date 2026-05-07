import Image from "next/image";
 
const meta = [
  { label: "Type", value: "Product Design" },
  { label: "Partner", value: "Gebirah" },
  { label: "Domain", value: "Humanitarian Aid" },
  { label: "Focus", value: "Digital Inclusion" },
];
 
const tags = ["AI Identity", "Social Impact", "Mobile App", "UX Research"];
 
export default function EnableID({ accent, accentMuted, accentBorder }) {
  return (
    <>
      {/* Left: Text */}
      <div>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: accent, marginBottom: "0.75rem" }}>
          AI Product · Humanitarian
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#fff", lineHeight: 1.2, marginBottom: "0.5rem" }}>
          EnableID
        </h2>
        <p style={{ fontSize: "13px", color: accent, marginBottom: "1.25rem", fontStyle: "italic", opacity: 0.8 }}>
          AI-powered digital identification for the underserved
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "1.75rem" }}>
          EnableID is a digital identity platform developed as part of a 
          six-member team in collaboration with Gebirah and in partnership 
          with Google. The project addresses the challenges faced by refugees 
          fleeing conflict zones, who often lose their identification documents 
          during displacement. Without valid identification, refugees struggle 
          to cross borders, access humanitarian aid, secure employment, 
          and integrate into host countries. Existing verification processes, 
          often conducted by organizations like the United Nations, are manual, 
          time-consuming, and typically result in only physical identification, 
          which can be limiting. EnableID is an AI-powered application that 
          provides a secure, digital alternative 
          by consolidating personal identity, certifications, and relevant records 
          into a single mobile platform. By streamlining the identity verification 
          process and making credentials easily accessible, EnableID helps refugees
        more effectively prove who they are—enabling better access to services, aid, and job opportunities.
        </p>
 
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2rem" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", borderRadius: "20px", border: `0.5px solid ${accentBorder}`, background: accentMuted, color: accent, letterSpacing: "0.02em" }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem" }}>
            {/* Primary button */}
            <a
                href="https://www.figma.com/design/YHrKVDkgjjlHIIuJsjYkBS/EnableID?node-id=0-1&t=UyqgwVuyKStioNwi-1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                background: accent,
                color: "#0d1117",
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                View Figma Page
            </a>

            {/* Secondary button */}
            <a
                href="https://sites.google.com/view/sds-2024-team-14/home?authuser=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.25rem",
                borderRadius: "8px",
                background: "transparent",
                border: `0.5px solid ${accentBorder}`,
                color: accent,
                fontSize: "13px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = accentMuted)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
                View Project Website
            </a>
        </div>

      </div>
 
      {/* Right: Image */}
      <div style={{ borderRadius: "16px", overflow: "hidden", border: `0.5px solid ${accentBorder}`, background: accentMuted, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {/* Swap null for your image path e.g. "/images/enableid.jpg" */}
        {null ? (
          <Image src="/images/enableid.jpg" alt="EnableID" fill style={{ objectFit: "cover" }} />
        ) : (
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>EnableID Mobile App</p>
        )}
      </div>
    </>
  );
}