"use client";
 
import { useState } from "react";
import Image from "next/image";
 
// slides prop shape:
// [{ image: "/images/...", label: "Slide 01", caption: "Description" }]
 
export default function Carousel({ slides, accent, accentMuted, accentBorder }) {
  const [active, setActive] = useState(0);
  const slide = slides[active];
 
  return (
    <div>
      {/* Main image frame */}
      <div style={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        border: `0.5px solid ${accentBorder}`,
        background: accentMuted,
        aspectRatio: "16/9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
      }}>
        {slide.image ? (
          <Image
            key={active}
            src={slide.image}
            alt={slide.caption}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.2)", margin: "0 0 4px" }}>
              {slide.label}
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", margin: 0 }}>
              Add an image path to this slide
            </p>
          </div>
        )}
 
        {/* Prev / next arrows */}
        {[-1, 1].map((dir) => (
          <button
            key={dir}
            onClick={() => setActive((active + dir + slides.length) % slides.length)}
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ...(dir === -1 ? { left: "1rem" } : { right: "1rem" }),
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: `0.5px solid ${accentBorder}`,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d={dir === -1 ? "M9 2.5L4.5 7 9 11.5" : "M5 2.5L9.5 7 5 11.5"}
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
 
      {/* Caption + dots */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginRight: "4rem", fontStyle: "italic" }}>
          {slide.caption}
        </p>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}> 
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "25px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === active ? accent : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.2s, background 0.2s",
              }}
            />
          ))}
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginLeft: "4px" }}>
            {active + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}
 