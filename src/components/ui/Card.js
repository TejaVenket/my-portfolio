"use client"
import { useState } from "react";
import Link from "next/link";

export default function Card({ title, category, description, tags, year, href, accentColor, backgroundColor, hoverColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
    href={href} 
    className="group relative w-full h-100 cursor-pointer block"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >

      {/* back card — the "stacked" one underneath */}
      <div
        className="absolute inset-0 rounded-2xl border border-gray-200 transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] rotate-[4deg] translate-y-1.5 group-hover:rotate-[8deg] group-hover:translate-y-4 group-hover:translate-x-2"
        style={{ background: hovered ? (hoverColor ?? "#19B7A5") : (accentColor ?? "#e3fefb") }}
      />

      {/* front card */}
      <div 
        className="absolute inset-0 rounded-2xl border border-gray-100 bg-bg p-7 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:-rotate-2 group-hover:-translate-y-2"
        style={{ background: hovered ? (hoverColor ?? "#0E2439") : (backgroundColor ?? "#436291") }}
        >

        <div>
          {/* icon box */}
          <div className="w-11 h-11 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>

          <p className="text-[11px] font-sans text-gray-200 uppercase tracking-widest mb-1">{category}</p>
          <h3 className="text-lg font-sans text-text-accent font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-sm font-sans text-gray-300 leading-relaxed">{description}</p>
        </div>

        <div>
          {/* tags */}
          <div className="flex gap-2 flex-wrap py-4">
            {tags.map(tag => (
              <span key={tag} className="text-[11px] text-text-main border border-text-accent rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          {/* footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-300">{year}</span>
            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition group-hover:bg-text-accent">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}