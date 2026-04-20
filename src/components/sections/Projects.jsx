"use client";
import { useEffect, useRef, useState } from "react";
import Card from "@/components/ui/Card";

const projects = [
  {
    title: "UI/UX Design Internship",
    category: "Internship",
    description: "Explore my contributions as a UI/UX Design Intern at NCS",
    tags: ["Figma", "Tailwind", "Vercel"],
    year: "August 2025 to January 2026",
    href: "/projects/internship",
    accentColor: "#19B7A5",
    hoverColor: "#0F6E56",
    backgroundColor: "#0E2439",
  },
  {
    title: "Product Design and Development",
    category: "Projects",
    description: "Explore my product design projects from Humanitarian Aid designs to Warehouse Monitoring Systems",
    tags: ["Figma", "Design Thinking", "Storyboarding"],
    year: "2025",
    href: "/projects/product-design",
    accentColor: "#2E879F",
    hoverColor: "#19B7A5",
    backgroundColor: "#0E2439",
  },
  {
    title: "Machine Learning and AI",
    category: "Projects",
    description: "Explore my ML/AI projects, from smart chatbots to deployed safety monitoring systems",
    tags: ["Python", "Synthetic Data Generation", "Design Thinking"],
    year: "2025",
    href: "/projects/machine-learning",
    accentColor: "#436291",
    hoverColor: "#2E879F",
    backgroundColor: "#0E2439",
  },
];

const sides = ["left", "right", "left"];
const progressWidths = ["33%", "66%", "100%"];
const accentColors = ["#19B7A5", "#2E879F", "#436291"];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;

      if (scrolled < 0 || scrolled > total) return;

      const progress = scrolled / total;
      const index = Math.min(
        Math.floor(progress * projects.length),
        projects.length - 1
      );

      setActiveIndex(prev => {
        if (prev !== index) setPrevIndex(prev);
        return index;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // tall outer div — gives scroll room (500vh = 5 screens for 3 cards, feels slow and deliberate)
    <div ref={sectionRef} style={{ height: "500vh" }}>

      {/* sticky inner — stays on screen while you scroll through */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center px-8 md:px-16 overflow-hidden"
        style={{ background: "#0E2439" }}
      >

        {/* floating orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "400px", height: "400px",
            top: "-100px", right: "-100px",
            background: "radial-gradient(circle, #19B7A515, transparent)",
            animation: "drift 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "300px", height: "300px",
            bottom: "-80px", left: "-60px",
            background: "radial-gradient(circle, #43629115, transparent)",
            animation: "drift2 9s ease-in-out infinite",
          }}
        />

        {/* background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <p
            className="text-white font-bold uppercase text-center leading-none"
            style={{
              fontSize: "clamp(4rem,15vw,14rem)",
              opacity: 0.03,
              letterSpacing: "-0.05em",
            }}
          >
            explore<br />my work
          </p>
        </div>

        {/* header */}
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#19B7A5" }}>
              Portfolio
            </p>
            <h2 className="text-4xl font-medium text-white">What I've built</h2>
          </div>

          {/* dots */}
          <div className="flex flex-col items-end gap-3">
            <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>
              scroll to explore
            </p>
            <div className="flex gap-2 items-center">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: activeIndex === i ? "24px" : "8px",
                    height: "8px",
                    background: activeIndex === i ? accentColors[i] : "rgba(255,255,255,0.15)",
                    borderRadius: "999px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* card stage */}
        <div className="relative flex-1 flex items-center" style={{ minHeight: "380px" }}>

          {projects.map((project, index) => {
            const isActive = activeIndex === index;
            const isPrev = prevIndex === index;
            const side = sides[index];

            if (!isActive && !isPrev) return null;

            return (
              <div
                key={project.title}
                className="absolute"
                style={{
                  left: side === "left" ? "0" : "auto",
                  right: side === "right" ? "0" : "auto",
                  width: "clamp(280px, 35%, 360px)",
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? "translateX(0) translateY(0) scale(1)"
                    : side === "left"
                    ? "translateX(-60px) translateY(10px) scale(0.95)"
                    : "translateX(60px) translateY(10px) scale(0.95)",
                  transition: "all 700ms cubic-bezier(.25,.8,.25,1)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* counter */}
                <p
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    textAlign: side === "right" ? "right" : "left",
                  }}
                >
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <Card {...project} />
              </div>
            );
          })}

          {/* scroll hint arrow — fades out after first card */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500"
            style={{ opacity: activeIndex === 0 ? 0.4 : 0 }}
          >
            <p className="text-white text-xs uppercase tracking-widest">scroll</p>
            <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.3)", animation: "pulse 2s ease-in-out infinite" }} />
          </div>

        </div>

        {/* progress bar */}
        <div className="relative mt-8" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}>
          <div
            className="absolute top-0 left-0 h-full transition-all duration-700 ease-in-out"
            style={{
              width: progressWidths[activeIndex],
              background: `linear-gradient(90deg, #19B7A5, ${accentColors[activeIndex]})`,
            }}
          />
        </div>

      </div>

      <style>{`
        @keyframes drift {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-16px) rotate(4deg); }
        }
        @keyframes drift2 {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(12px) rotate(-3deg); }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.3; }
          50%      { opacity: 0.8; }
        }
      `}</style>

    </div>
  );
}