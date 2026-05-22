"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const words = ["web", "fun", "impact", "people"];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(word.slice(0, charIndex + 1));

        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1400);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(word.slice(0, charIndex - 1));

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? 60 : 90);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center p-10 md:px-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 bg-bg"
      />

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT — text content */}
        <div>
          <div className="flex mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-main border border-text-accent rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available to work · Singapore
            </span>
          </div>

          <h1 className="font-mono text-text-accent text-6xl font-semibold leading-tight">
            Hi, I&apos;m Teja Venket
          </h1>

          <h2 className="font-mono text-accent text-4xl leading-tight mb-2">
            I build things for the
          </h2>

          <h3 className="text-5xl font-medium mb-4">
            {" "}
            <span className="font-mono text-text-accent">{displayed}</span>
            <span className="inline-block w-0.5 h-10 bg-text-accent ml-1 align-middle animate-pulse" />
          </h3>


          <p className="text-lg font-sans text-main leading-relaxed mb-10">
            Just graduated as a Computer Science and Design student at SUTD. I care about building impactful 
            and meaningful products that solve real problems.
          </p>

          <div className="flex gap-3 flex-wrap mb-12">
            <a
              href="#projects"
              className="bg-text-accent font-sans text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-accent transition"
            >
              View my work
            </a>

            <a
              href="/resume.pdf"
              download="Teja_Venket_Resume.pdf"
              className="border border-text-accent font-sans text-main px-7 py-3 rounded-xl text-sm font-medium hover:bg-accent hover:border-bg transition"
            >
              Download my CV
            </a>
          </div>

          <div className="flex gap-2 flex-wrap">
            {["React", "Next.js", "Tailwind", "Python", "TypeScript","Figma", "Wordpress", "Machine Learning and AI"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 border border-gray-100 rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="flex justify-center items-center">
            <div className="group relative w-[500px] h-[700px] animate-[float_4s_ease-in-out_infinite]">
                {/* background shape */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                <div className="relative w-[480px] h-[570px] rounded-t-[200px] bg-[#2E879F] transition-colors duration-500 group-hover:bg-[#436291]">
                    {/* extra little corner accents */}
                    <div className="absolute top-10 left-12 w-8 h-8 bg-[#19B7A5] rotate-45" />
                    <div className="absolute bottom-0 right-6 w-8 z-10 h-8 bg-[#19B7A5] rotate-45" />
                </div>
                </div>

                {/* profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[440px] h-[530px] rounded-t-[200px] overflow-hidden">
                    <Image
                      src="/images/Profilepic.jpg"
                      alt="Teja Venket"
                      fill
                      className="object-cover object-[center_50%] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* badges */}
                <div className="absolute bottom-[35px] right-[-50px] z-20 bg-white border border-gray-100 rounded-xl px-4 py-2 text-xs text-gray-600 shadow-sm">
                  SUTD · Year 4
                </div>

                <div className="absolute top-[80px] left-[10px] z-20 bg-white border border-gray-100 rounded-xl px-4 py-2 text-xs text-gray-600 shadow-sm">
                  CS · Design
                </div>
            </div>
            </div>
      </div>
    </section>
  );
}