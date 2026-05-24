import Image from "next/image";

const findings = [
  {
    number: "01",
    severity: "Critical",
    title: "Navigation Depth",
    body: `The app's navigation wasn't flat enough — too much content was buried behind multiple layers of pages. A good example was checking document verification status: a user had to navigate from the homepage into the document manager, select a document category like "health," and then locate a verification status button in the navbar. That's too many steps to reach something users would likely need frequently.`,
    reflection: `Deep navigation like this creates friction, and friction erodes trust in an app.`,
    imageAlt: "Navigation depth diagram",
    imageCaption: "Checking verification status — too many layers to reach",
    imageLeft: false,
    imageType: "phone",
    phoneSrc: "/images/EnableID/VerificationStatus.gif",
  },
  {
    number: "02",
    severity: "Moderate",
    title: "Visual Inconsistency",
    body: `The homepage and document manager had entirely different navbars, which would be disorienting for a first-time user. Beyond navigation, the broader UI felt visually scattered: colour choices, icon styles, and layout approaches varied too much from page to page.`,
    reflection: `In hindsight, this was a symptom of not having a design library in place from the start. Given the time constraints, it was somewhat understandable — but it was a clear gap.`,
    imageAlt: "UI inconsistency across pages",
    imageCaption: "Inconsistent navbars and colour usage across screens",
    imageLeft: true,
    imageType: "stack",
    images: [
      { src: "/images/EnableID/DocumentsManagerNavBar.png", caption: "Document manager navbar" },
      { src: "/images/EnableID/HomepageNavBar.png", caption: "Homepage navbar" },
    ],
  },
  {
    number: "03",
    severity: "Moderate",
    title: "Interaction Flow vs. Polish",
    body: `The consensus from this review was that the interaction flows were solid, but the deep navigation made it frustrating to move around the app, especially on pages that lacked a navbar entirely. The visual design also read as unpolished in places — certain colour choices were harsh, and the inconsistent iconography added to the noise.`,
    reflection: `Getting the flows right was the foundation, but visual refinement is what makes a user trust what they're looking at.`,
    imageAlt: "Polish and visual refinement issues",
    imageCaption: "Colour and icon inconsistencies that undermined trust",
    imageLeft: false,
    imageType: "stack",
    images: [
      { src: "/images/EnableID/InconsistentColour.png", caption: "Harsh colour choices" },
      { src: "/images/EnableID/InconsistentUI.png", caption: "Inconsistent iconography" },
    ],
  },
];

export default function Learnings({ accent, accentBorder, accentMuted }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "5rem" }}>

      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Phase 4.2 · Iteration Review & Learnings
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      {/* Intro copy */}
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: "0 0 3.5rem 0", maxWidth: "680px" }}>
        After reviewing the designs with my groupmates and the client, the client was generally happy with the overall flow.
        However, my groupmates and I identified several issues worth addressing — catalogued below as three diagnostic findings.
      </p>

      {/* Finding cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {findings.map((f) => (
          <div
            key={f.number}
            style={{
              borderRadius: "16px",
              border: `0.5px solid ${accentBorder}`,
              background: "rgba(255,255,255,0.02)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Badge row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent,
                background: accentMuted,
                border: `0.5px solid ${accentBorder}`,
                borderRadius: "20px",
                padding: "3px 10px",
              }}>
                Finding {f.number}
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: f.severity === "Critical" ? "#FF6B6B" : "rgba(255,255,255,0.3)",
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: f.severity === "Critical" ? "rgba(255,100,100,0.7)" : "rgba(255,255,255,0.25)",
                }}>
                  {f.severity}
                </span>
              </div>

              <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Content grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "center",
              ...(f.imageLeft ? { direction: "rtl" } : {}),
            }}>

              {/* Text block */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", direction: "ltr" }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.25,
                  margin: 0,
                }}>
                  {f.title}
                </h3>

                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
                  {f.body}
                </p>

                <div style={{ borderLeft: `2px solid ${accentBorder}`, paddingLeft: "1rem" }}>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                    {f.reflection}
                  </p>
                </div>
              </div>

              {/* Image block */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", direction: "ltr" }}>

                {f.imageType === "phone" && (
                  <div style={{
                    width: "100%",
                    maxWidth: "180px",
                    aspectRatio: "9/19",
                    borderRadius: "28px",
                    border: `1.5px solid ${accentBorder}`,
                    background: accentMuted,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "inset 0 0 0 4px rgba(0,0,0,0.3)",
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "5px",
                      borderRadius: "99px",
                      background: "rgba(255,255,255,0.12)",
                      zIndex: 1,
                    }} />
                    <Image
                      src={f.phoneSrc}
                      alt={f.imageAlt}
                      fill
                      style={{ objectFit: "cover", position: "absolute", inset: 0 }}
                    />
                  </div>
                )}

                {f.imageType === "stack" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", width: "100%" }}>
                    {f.images.map((img, i) => (
                      <div key={i} style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "4/3",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: `0.5px solid ${accentBorder}`,
                        background: accentMuted,
                      }}>
                        <Image src={img.src} alt={img.caption} fill style={{ objectFit: "contain" }} />
                        {/* Placeholder overlay — remove once real images are in */}
                        <div style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          background: accentMuted,
                        }}>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", fontStyle: "italic", textAlign: "center", margin: 0 }}>
                  {f.imageCaption}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ── Pivot Decision block ── */}
      <div style={{
        marginTop: "3.5rem",
        borderRadius: "16px",
        border: `0.5px solid ${accentBorder}`,
        background: accentMuted,
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{ height: "2px", background: accent, width: "100%" }} />

        <div style={{ padding: "2.5rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "3rem", alignItems: "start" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: "160px" }}>
            <span style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: accent,
              background: "rgba(255,255,255,0.05)",
              border: `0.5px solid ${accentBorder}`,
              borderRadius: "20px",
              padding: "3px 10px",
              display: "inline-block",
              width: "fit-content",
            }}>
              Key Decision
            </span>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", margin: 0, lineHeight: 1.6 }}>
              End of Iteration 2 Review
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={accent} strokeWidth="1.2">
                <path d="M8 16h16M18 10l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.75rem",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              margin: 0,
            }}>
              Rethinking the Format: Mobile App → Web-First Platform
            </h3>

            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
              The most significant decision to come out of this review was rethinking the format of the solution entirely.
              Given the sheer volume of content and navigation required, the app felt too constrained as a mobile-only experience.
              I made the call to design it as a{" "}
              <span style={{ color: "#fff", fontWeight: 500 }}>web application first</span>, with mobile responsiveness to follow.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                {
                  label: "Screen real estate",
                  desc: "The volume of content and navigation complexity exceeded what a small mobile screen could comfortably handle.",
                },
                {
                  label: "User context",
                  desc: "Many refugees don't have access to smartphones — UN volunteers would likely handle onboarding, making a desktop interface far more practical for data-heavy admin work.",
                },
              ].map((card, i) => (
                <div key={i} style={{
                  padding: "1rem",
                  borderRadius: "12px",
                  border: `0.5px solid ${accentBorder}`,
                  background: "rgba(255,255,255,0.03)",
                }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: accent, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px 0" }}>
                    {card.label}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ borderLeft: `2px solid ${accentBorder}`, paddingLeft: "1rem" }}>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                This wasn't just about screen real estate — it was a practical call that meaningfully shaped everything that followed.
                The solution shifted from a mobile app to a web-first platform with a responsive mobile version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}