"use client";

const testimonials = [
  {
    quote:
      "I am very impressed with the user interface. It is very clean and easy to use and is easy on the eye. This user interface is already a lot more than what I would have hoped for. This also makes the entire system more complete and I can definitely see myself using this system on the daily.",
    name: "Louise Leong",
    role: "Operations Lead",
    company: "DSV Tampines",
    accent: "#19B7A5",
    accentMuted: "rgba(25,183,165,0.07)",
    accentBorder: "rgba(25,183,165,0.2)",
    initial: "L",
  },
  {
    quote:
      "The user interface is clean and easy to use and I am very happy with it. I like how future scalability with the notification directory and the ability to add more cameras was taken into account when creating the system.",
    name: "Jia Ren",
    role: "Warehouse Supervisor",
    company: "DSV Tampines",
    accent: "#7F77DD",
    accentMuted: "rgba(127,119,221,0.07)",
    accentBorder: "rgba(127,119,221,0.2)",
    initial: "J",
  },
];

export default function Testimonials({ accent = "#19B7A5" }) {
  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", fontWeight: 400, color: "#fff", lineHeight: 1.2, margin: 0 }}>
          What our clients said
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.85, margin: 0 }}>
          Following the prototype walkthrough, we gathered direct feedback from the client stakeholders
          at DSV Tampines — the supervisors and operations lead who would be using SafeSight day-to-day.
        </p>
      </div>

      {/* Testimonial cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `0.5px solid ${t.accentBorder}`,
              borderRadius: "16px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Quote mark */}
            <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
              <path
                d="M0 20V12.4C0 8.93333 0.8 6.06667 2.4 3.8C4.05333 1.53333 6.42667 0.133333 9.52 0L10.56 2.24C8.05333 2.77333 6.24 3.86667 5.12 5.52C4.05333 7.17333 3.52 9.06667 3.52 11.2H7.04V20H0ZM17.44 20V12.4C17.44 8.93333 18.24 6.06667 19.84 3.8C21.4933 1.53333 23.8667 0.133333 26.96 0L28 2.24C25.4933 2.77333 23.68 3.86667 22.56 5.52C21.4933 7.17333 20.96 9.06667 20.96 11.2H24.48V20H17.44Z"
                fill={t.accent}
                opacity="0.4"
              />
            </svg>

            {/* Quote text */}
            <p style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.85,
              fontStyle: "italic",
              margin: 0,
              flex: 1,
            }}>
              {t.quote}
            </p>

            {/* Divider */}
            <div style={{ height: "0.5px", background: t.accentBorder }} />

            {/* Attribution */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Avatar */}
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: t.accentMuted,
                border: `0.5px solid ${t.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: t.accent }}>
                  {t.initial}
                </span>
              </div>

              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#fff", margin: "0 0 2px" }}>
                  {t.name}
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}