

import Image from "next/image";

export default function ExperimentingUI({ accent, accentBorder, accentMuted }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "3rem" }}>

      {/* Sub-phase label */}
      <div style={{ marginBottom: "1rem" }}>
        <p style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: accent,
          margin: 0,
        }}>
          Phase 4.3.1 · Experimenting with UI
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

        {/* Intro */}
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0, maxWidth: "680px" }}>
          Rather than designing every screen from the outset, I prioritised the app's core features first —
          the <span style={{ color: "#fff", fontWeight: 500 }}>homepage</span> and the{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>documents manager</span>. Experimenting with layout
          and navigation on the most critical pages first meant focused feedback before rolling the same
          design language across the rest of the app. It kept the process lean and avoided locking in a
          flawed direction early.
        </p>

        {/* ── Navigation: A/B ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: accent, background: accentMuted,
              border: `0.5px solid ${accentBorder}`, borderRadius: "20px", padding: "2px 10px",
            }}>
              Navigation
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {[
              { src: "/images/EnableID/desktopHamburgerMenu.png", label: "Side menu" },
              { src: "/images/EnableID/TopNavBar.png", label: "Global header" },
            ].map((screen, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{
                  width: "100%", aspectRatio: "16/9", borderRadius: "8px",
                  border: `0.5px solid ${accentBorder}`, background: accentMuted,
                  overflow: "hidden", position: "relative",
                }}>
                  <Image src={screen.src} alt={screen.label} fill style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "0.5rem", textAlign: "center" }}>
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Layout: two paired comparisons ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: accent, background: accentMuted,
              border: `0.5px solid ${accentBorder}`, borderRadius: "20px", padding: "2px 10px",
            }}>
              Layout
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Homepage pair */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", margin: 0 }}>
                Homepage
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { src: "/images/EnableID/VerticalLayout.png", label: "Horizontal layout" },
                  { src: "/images/EnableID/HorizontalLayout.png", label: "Vertical layout" },
                ].map((screen, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{
                      width: "100%", aspectRatio: "16/9", borderRadius: "8px",
                      border: `0.5px solid ${accentBorder}`, background: accentMuted,
                      overflow: "hidden", position: "relative",
                    }}>
                      <Image src={screen.src} alt={screen.label} fill style={{ objectFit: "cover" }} />
                    </div>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "0.5rem", textAlign: "center" }}>
                      {screen.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Manager pair */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.2)", margin: 0 }}>
                Documents Manager
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { src: "/images/EnableID/TabsHorizontal.png", label: "Horizontal tabs" },
                  { src: "/images/EnableID/TabsVertical.png", label: "Vertical tabs" },
                ].map((screen, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{
                      width: "100%", aspectRatio: "16/9", borderRadius: "8px",
                      border: `0.5px solid ${accentBorder}`, background: accentMuted,
                      overflow: "hidden", position: "relative",
                    }}>
                      <Image src={screen.src} alt={screen.label} fill style={{ objectFit: "cover" }} />
                    </div>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "0.5rem", textAlign: "center" }}>
                      {screen.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* ── Feedback block ── */}
        <div style={{
          borderRadius: "16px",
          border: `0.5px solid ${accentBorder}`,
          background: "rgba(255,255,255,0.02)",
          marginTop: "3rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
 
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: accent, background: accentMuted,
              border: `0.5px solid ${accentBorder}`, borderRadius: "20px", padding: "2px 10px",
            }}>
              Feedback
            </span>
            <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
          </div>
 
          {/* Intro */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
            After gathering feedback from my team and client, the response was encouraging — the client found
            this version <span style={{ color: "#fff", fontWeight: 500 }}>noticeably simpler and more intuitive</span> than
            the previous iteration. Two key layout decisions emerged from the discussion.
          </p>
 
          <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)" }} />
 
          {/* Two decisions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
 
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
              <span style={{
                fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: accent, paddingTop: "2px",
              }}>01</span>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
                Opting for a <span style={{ color: "#fff", fontWeight: 500 }}>horizontal layout</span> over a vertical one.
                The vertical layout inadvertently placed the{" "}
                <span style={{ color: "#fff", fontWeight: 500 }}>digital identity card</span> at the forefront, giving
                it visual dominance over the other features. The horizontal layout{" "}
                <span style={{ color: "#fff", fontWeight: 500 }}>distributed emphasis more evenly</span> across the
                feature tabs, better reflecting how we wanted users to engage with the app as a whole.
              </p>
            </div>
 
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
              <span style={{
                fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em",
                textTransform: "uppercase", color: accent, paddingTop: "2px",
              }}>02</span>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, margin: 0 }}>
                Replacing the <span style={{ color: "#fff", fontWeight: 500 }}>side menu</span> with a{" "}
                <span style={{ color: "#fff", fontWeight: 500 }}>global header navigation</span>. A side menu required
                an extra interaction just to reveal what the app contained —{" "}
                <span style={{ color: "#fff", fontWeight: 500 }}>unnecessary friction</span> for a product with an
                already compact feature set. A persistent header kept everything visible and upfront, making the app
                feel more <span style={{ color: "#fff", fontWeight: 500 }}>transparent and easier to orient within</span>{" "}
                from the moment a user landed on it.
              </p>
            </div>
 
          </div>
        </div>
    </div>
  );
}