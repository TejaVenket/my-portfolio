"use client";

import { useState } from "react";

const ACCENT = "#19B7A5";

const entries = [
  {
    number: "01",
    tag: "Challenge",
    heading: "Navigating ambiguity",
    back: {
      body: "We had a real client but no clearly defined problem space. The initial phase was overwhelming — I wasn't sure what the system should look like, what problems were most critical, or how our solution would create real impact.",
      quote: null,
      list: null,
    },
  },
  {
    number: "02",
    tag: "What I learned",
    heading: "Asking better questions",
    back: {
      body: "I stopped asking about the final product and started asking about day-to-day workflows, frustrations, and how decisions get made.",
      quote: '"What does a typical day look like?" uncovered far deeper insights than asking about features directly.',
      list: null,
    },
  },
  {
    number: "03",
    tag: "How my thinking changed",
    heading: "Designing for what goes unsaid",
    back: {
      body: "A client mentioned the stress of compiling reports from multiple sources. She didn't ask for a solution — but that led me to design a PDF incident export feature.",
      quote: "Good design reduces friction even when users don't name it.",
      list: null,
    },
  },
  {
    number: "04",
    tag: "Moving forward",
    heading: "What I carry with me",
    back: {
      body: null,
      quote: null,
      list: [
        "Problem discovery before solutioning",
        "Design for real workflows, not assumed use cases",
        "Think beyond scope — scalability matters early",
        "Always ask: does this actually reduce user effort?",
      ],
    },
  },
];

const styles = {
  root: {
    gridColumn: "1 / -1",
    marginTop: "1rem",
    fontFamily: "inherit",
  },
  label: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: ACCENT,
    margin: "0 0 0.75rem",
  },
  intro: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "end",
    marginBottom: "2rem",
  },
  title: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "2rem",
    fontWeight: 400,
    color: "#fff",
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.85,
    margin: 0,
  },
  progressRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  progressLabel: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.3)",
    letterSpacing: "0.04em",
  },
  dotsRow: {
    display: "flex",
    gap: "6px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "14px",
  },
  cardScene: {
    perspective: "900px",
    height: "240px",
    cursor: "pointer",
  },
  cardFace: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: "12px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    background: "#0d3b36",
  },
  cardFront: {
    border: `0.5px solid rgba(25,183,165,0.25)`,
  },
  cardBack: {
    border: `0.5px solid rgba(25,183,165,0.4)`,
    transform: "rotateY(180deg)",
  },
  cardNum: {
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    color: "rgba(25,183,165,0.6)",
    margin: "0 0 auto",
  },
  cardTag: {
    display: "inline-block",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: ACCENT,
    background: "rgba(25,183,165,0.1)",
    border: "0.5px solid rgba(25,183,165,0.25)",
    borderRadius: "4px",
    padding: "3px 8px",
    marginBottom: "0.75rem",
    width: "fit-content",
  },
  cardHeading: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 0.5rem",
    lineHeight: 1.3,
  },
  cardHint: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.25)",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  cardBody: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.8,
    margin: "0 0 0.75rem",
    flex: 1,
    overflow: "hidden",
  },
  cardQuote: {
    fontSize: "13px",
    fontStyle: "italic",
    color: "rgba(255,255,255,0.75)",
    borderLeft: `2px solid ${ACCENT}`,
    borderRadius: 0,
    paddingLeft: "0.75rem",
    margin: 0,
    lineHeight: 1.75,
  },
  cardList: {
    listStyle: "none",
    padding: 0,
    margin: "0.25rem 0 0",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  cardListItem: {
    display: "flex",
    gap: "8px",
    fontSize: "12.5px",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.65,
    alignItems: "flex-start",
  },
  cardListArrow: {
    color: ACCENT,
    flexShrink: 0,
    fontSize: "11px",
    marginTop: "2px",
  },
};

function FlipIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8a5 5 0 0 1 9-3M13 8a5 5 0 0 1-9 3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 5l1 0 0-2M5 11l-1 0 0 2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dot({ filled }) {
  return (
    <div style={{
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: filled ? ACCENT : "rgba(25,183,165,0.15)",
      border: `1px solid ${filled ? ACCENT : "rgba(25,183,165,0.35)"}`,
      transition: "background 0.3s, border-color 0.3s",
    }} />
  );
}

function Card({ entry, flipped, onFlip }) {
  return (
    <div style={styles.cardScene} onClick={onFlip}>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.55s cubic-bezier(.4,0,.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* Front */}
        <div style={{ ...styles.cardFace, ...styles.cardFront }}>
          <span style={styles.cardNum}>{entry.number}</span>
          <span style={styles.cardTag}>{entry.tag}</span>
          <h3 style={styles.cardHeading}>{entry.heading}</h3>
          <p style={styles.cardHint}>
            <FlipIcon />
            Flip to read
          </p>
        </div>

        {/* Back */}
        <div style={{ ...styles.cardFace, ...styles.cardBack }}>
          <span style={{ ...styles.cardTag, marginBottom: "0.9rem" }}>{entry.tag}</span>
          {entry.back.body && (
            <p style={entry.back.quote || entry.back.list ? styles.cardBody : { ...styles.cardBody, flex: 1 }}>
              {entry.back.body}
            </p>
          )}
          {entry.back.quote && (
            <p style={styles.cardQuote}>{entry.back.quote}</p>
          )}
          {entry.back.list && (
            <ul style={styles.cardList}>
              {entry.back.list.map((item, i) => (
                <li key={i} style={styles.cardListItem}>
                  <span style={styles.cardListArrow}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Reflections({ accent = ACCENT }) {
  const [flipped, setFlipped] = useState([false, false, false, false]);

  const toggle = (i) => {
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const flippedCount = flipped.filter(Boolean).length;
  const statusLabel =
    flippedCount === 0
      ? "Tap any card to reveal"
      : flippedCount === 4
      ? "All reflections uncovered"
      : `${flippedCount} of 4 revealed`;

  return (
    <div style={styles.root}>
      <div style={styles.intro}>
        <h2 style={styles.title}>What this project taught me</h2>
        <p style={styles.subtitle}>
          Building SafeSight for a real client pushed me beyond technical execution into the harder
          challenge of understanding people — their workflows, frustrations, and unspoken needs.
        </p>
      </div>

      <div style={styles.progressRow}>
        <span style={styles.progressLabel}>{statusLabel}</span>
        <div style={styles.dotsRow}>
          {flipped.map((v, i) => (
            <Dot key={i} filled={v} />
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {entries.map((entry, i) => (
          <Card
            key={i}
            entry={entry}
            flipped={flipped[i]}
            onFlip={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}