import Image from "next/image";
import Hero from "../ui/EnableID/Hero";
import About from "../ui/EnableID/About";
import MyRole from "../ui/EnableID/MyRole";
import PhasesContents from "../ui/ContentsPage";
import ProblemScoping from "../ui/EnableID/ProblemScoping";
import SolutionRequirements from "../ui/EnableID/SolutionRequirements";
import Solution from "../ui/EnableID/Solution";
import Iterations from "../ui/EnableID/Iterations";
 
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
      <Hero
        accent={accent}
        accentMuted={accentMuted}
        accentBorder={accentBorder}
      />
      <About accent={accent} />
      <MyRole accent={accent} accentBorder={accentBorder} />
      <PhasesContents accent={accent} />
      <ProblemScoping accent={accent} accentBorder={accentBorder} />
      <SolutionRequirements accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <Solution accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
      <Iterations accent={accent} accentBorder={accentBorder} accentMuted={accentMuted} />
    </>
  );
}
 