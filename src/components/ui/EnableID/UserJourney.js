"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const bold = (text) => <span style={{ color: "#fff", fontWeight: 500 }}>{text}</span>;
const steps = [
  {
    number: "01",
    title: "Onboarding",
    action: "Users are guided through the app's features.",
    detail: (
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
         Given that our primary users were{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>refugees and UN volunteers</span>{" "}
        — many of whom may be navigating a digital platform like this under{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>stressful circumstances</span>{" "}
        — I wanted the experience to feel{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>welcoming rather than overwhelming</span>.
        With a reasonably broad feature set, there was a real risk of users feeling lost on first contact.
        To address this, I designed an{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>onboarding carousel</span>{" "}
        that gently introduces each feature before the user ever reaches the main interface — giving them
        enough context to understand what the app offers and how it can help them, without{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>front-loading too much at once</span>.
        The goal was to{" "}
        <span style={{ color: "#fff", fontWeight: 500 }}>ease users into the product</span>{" "}
        rather than drop them in cold.
      </div>
    ),
    duration: "0:32",
    videoSrc: "/images/EnableID/FinalUI/onboarding1.gif",
    side: "right",
  },
  {
    number: "02",
    title: "Facial Recognition Scan",
    action: "Users scan their face against their passport picture so that they can login with facial recognition.",
    detail: (
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
            The {bold("facial recognition system")} allows users to {bold("securely authenticate")} 
            themselves using their face, eliminating the need for traditional passwords.
        </div>
    ),
    duration: "0:45",
    videoSrc: "/images/EnableID/FinalUI/onboarding2.gif",
    side: "left",
  },
  {
    number: "03",
    title: "Homepage Tutorial and Digital Identity Card",
    action: "Users are introduced to the app's homepage features and can view their digital identity card.",
    detail: (
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
        Users are given a {bold("walkthrough of the homepage")}, highlighting key features and 
        how to navigate the app. They can also access their {bold("digital identity card")}, 
        which securely stores their personal information and documents for {bold("easy access")} during 
        UNHCR interactions.
      </div>
    ),
    duration: "1:02",
    videoSrc: "/images/EnableID/FinalUI/homepage-tut.gif",
    side: "right",
  },
  {
    number: "04",
    title: "Documents Manager",
    action: "Users can access and upload their documents along with a tutorial on how to do so.",
    detail: (
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
        Two upload paths were designed intentionally — {bold("local file upload")} for those with saved copies, 
        and in-app scanning for physical documents. {bold("OCR")} then extracts key fields automatically
      </div>
    ),
    duration: "0:38",
    videoSrc: "/images/EnableID/FinalUI/doc-manager.gif",
    side: "left",
  },
  {
    number: "05",
    title: "Family Tree",
    action: "Users can input their missing family members' information and get matched with them",
    detail: (
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
        The family tree feature allows users to input information about their missing family members,
        helping them reconnect with loved ones. The app will go through its database and find the a person
        with the most similar profile, and show it to the user as a potential match with a confidence score. 
      </div>
    ),              
    duration: "0:51",
    videoSrc: "/images/EnableID/FinalUI/family-tree.gif",
    side: "right",
  },
  {
    number: "06",
    title: "AI Chatbot",
    action: "Users can ask the AI chatbot questions pertaining to the app's features or UNHCR processes and get an answer.",
    detail: (
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, margin: 0 }}>
        The chatbot serves {bold("two roles")}: {bold("app guidance")} for new users unfamiliar with the interface, 
        and a {bold("reference point")} for questions about UNHCR processes and refugee services.
      </div>
    ),
    duration: "0:51",
    videoSrc: "/images/EnableID/FinalUI/ai-chatbot.gif",
    side: "left",
  },
];

function StepCard({ step, accent, accentBorder, accentMuted, active }) {
  return (
    <div style={{
      width: "100%",
      borderRadius: "16px",
      border: `0.5px solid ${active ? accentBorder : "rgba(255,255,255,0.07)"}`,
      background: active ? accentMuted : "rgba(255,255,255,0.02)",
      overflow: "hidden",
      transition: "border-color 0.6s ease, background 0.6s ease",
    }}>
      {/* Video placeholder */}
      <div style={{
        position: "relative", width: "100%", aspectRatio: "16/9",
        background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center",
        justifyContent: "center", flexDirection: "column", gap: "10px",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 4px)",
          pointerEvents: "none",
        }} />
        {[
          { top: 10, left: 10, borderTop: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}`, borderLeft: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}` },
          { top: 10, right: 10, borderTop: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}`, borderRight: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}` },
          { bottom: 10, left: 10, borderBottom: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}`, borderLeft: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}` },
          { bottom: 10, right: 10, borderBottom: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}`, borderRight: `1px solid ${active ? accent : "rgba(255,255,255,0.1)"}` },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: 14, height: 14, transition: "border-color 0.6s ease", ...s }} />
        ))}
        {step.videoSrc && (
          <img src={step.videoSrc} alt="Step demonstration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        )}
      </div>
      {/* Text */}
      <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <p style={{ fontSize: "14px", fontWeight: 500, color: "#fff", margin: 0 }}>{step.title}</p>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{step.action}</div>
        <div style={{ height: "0.5px", background: "rgba(255,255,255,0.06)", margin: "0.25rem 0" }} />
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{step.detail}</div>
      </div>
    </div>
  );
}

export default function UserFlow({ accent = "#19B7A5", accentBorder = "rgba(25,183,165,0.25)", accentMuted = "rgba(25,183,165,0.07)" }) {
  // Track which steps are currently in view
  const [activeSteps, setActiveSteps] = useState(new Set());
  const stepRefs = useRef([]);
  const nodeRefs = useRef([]);
  const spineRef = useRef(null);

  const toggleActive = useCallback((index, isIntersecting) => {
    setActiveSteps(prev => {
      const next = new Set(prev);
      if (isIntersecting) next.add(index);
      else next.delete(index);
      return next;
    });
  }, []);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => toggleActive(i, entry.isIntersecting),
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [toggleActive]);

  // Compute the illuminated line: from first node top to last active node centre
  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    if (!spineRef.current || nodeRefs.current.length === 0) return;

    const update = () => {
      const spineRect = spineRef.current.getBoundingClientRect();
      const firstNode = nodeRefs.current[0];
      if (!firstNode) return;

      const firstRect = firstNode.getBoundingClientRect();
      const firstCentre = firstRect.top + firstRect.height / 2 - spineRect.top;

      // highest active index
      const maxActive = activeSteps.size === 0 ? -1 : Math.max(...activeSteps);
      if (maxActive < 0) {
        setLineStyle({ top: firstCentre, height: 0 });
        return;
      }

      const lastActiveNode = nodeRefs.current[maxActive];
      if (!lastActiveNode) return;
      const lastRect = lastActiveNode.getBoundingClientRect();
      const lastCentre = lastRect.top + lastRect.height / 2 - spineRect.top;

      setLineStyle({ top: firstCentre, height: Math.max(0, lastCentre - firstCentre) });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [activeSteps]);

  return (
    <div style={{ gridColumn: "1 / -1", marginTop: "5rem" }}>
      {/* Phase header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "3rem" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
        <p style={{ fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.15em", color: accent, whiteSpace: "nowrap", margin: 0 }}>
          Phase 6 · User Flow
        </p>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.07)" }} />
      </div>

      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.85, margin: "0 0 4rem 0", maxWidth: "560px" }}>
        A walkthrough of the five core interaction flows — from first login to the AI assistant. Each clip shows the experience as a refugee would encounter it.
      </p>

      {/* Steps container */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {steps.map((step, i) => {
          const isRight = step.side === "right";
          const active = activeSteps.has(i);

          return (
            <div
              key={i}
              ref={el => stepRefs.current[i] = el}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 80px 1fr",
                alignItems: "center",
                minHeight: "340px",
                opacity: active ? 1 : 0.25,
                transform: active ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Left cell */}
              <div style={{ padding: "1.5rem 2rem 1.5rem 0", display: "flex", justifyContent: "flex-end" }}>
                {!isRight && <StepCard step={step} accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} active={active} />}
              </div>

              {/* Centre spine column */}
              <div ref={i === 0 ? spineRef : null} style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", position: "relative" }}>
                {/* Static dim line — full height */}
                <div style={{ position: "absolute", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.06)", left: "50%", transform: "translateX(-50%)" }} />

                {/* Illuminated line — computed in parent, rendered here for step 0 only */}
                {i === 0 && (
                  <div
                    ref={spineRef}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "1px",
                      top: `${lineStyle.top}px`,
                      height: `${lineStyle.height}px`,
                      background: accent,
                      transition: "height 0.3s ease, top 0.3s ease",
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Node */}
                <div
                  ref={el => nodeRefs.current[i] = el}
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "56px", height: "56px", borderRadius: "50%",
                    border: `1px solid ${active ? accent : "rgba(255,255,255,0.12)"}`,
                    background: active ? accentMuted : "rgba(0,0,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "border-color 0.6s ease, background 0.6s ease, box-shadow 0.6s ease",
                    boxShadow: active ? `0 0 0 6px ${accentMuted}, 0 0 20px rgba(25,183,165,0.15)` : "none",
                    zIndex: 2,
                  }}
                >
                  <span style={{
                    fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em",
                    color: active ? accent : "rgba(255,255,255,0.2)",
                    transition: "color 0.6s ease",
                  }}>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Right cell */}
              <div style={{ padding: "1.5rem 0 1.5rem 2rem", display: "flex", justifyContent: "flex-start" }}>
                {isRight && <StepCard step={step} accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} active={active} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}