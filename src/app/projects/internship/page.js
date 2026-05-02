import Link from "next/link";
import Image from "next/image";

const timeline = [
  {
    period: "Aug – Sep 2024",
    title: "Proof of Concepts & Client Work",
    body: "Joined the Digital Experience division of NCS's NEXT department, working with the UI/UX design team on high-fidelity prototypes in Figma for various government agency clients. Attended client meetings, built moodboards, and iterated on designs through regular reviews with project leads.",
    tags: ["Figma", "Miro", "UI/UX", "Government Clients"],
  },
  {
    period: "Sep – Oct 2024",
    title: "Singapore Design Week",
    body: "Played a key role in NCS's booth at Singapore Management University. Created promotional content for NCS's Instagram and TikTok, ran a live balloon-popping engagement activity, and edited footage on-the-day for same-day publication. Learned about NCS's DRIVE design framework — Discover, Reframe, Ideate, Visualize, Evaluate — co-developed with SUTD.",
    tags: ["Content Creation", "TikTok", "Event Management", "Design Thinking"],
  },
  {
    period: "Oct 2024",
    title: "NTUC Learning Hub Business Proposal",
    body: "Attended client and internal meetings for a time-sensitive business proposal, taking detailed minutes and organizing notes under pressure. Created wireframes to visually represent the proposed application and prepared paper prototypes and slides for a client-facing workshop.",
    tags: ["Wireframing", "Meeting Minutes", "Client Workshops"],
  },
  {
    period: "Oct – Nov 2024",
    title: "SkillsFuture User Testing (200+ participants)",
    body: "Contributed to a large-scale guerrilla user testing initiative using Lyssna — a professional UT platform supporting five-second testing, first-click testing, and think-aloud protocols. Compiled and categorized open-ended responses from 200+ participants into a structured slide deck with actionable insights for the SkillsFuture website revamp.",
    tags: ["Lyssna", "Data Analysis", "Guerrilla Testing", "SkillsFuture"],
  },
  {
    period: "Nov 2024",
    title: "LTA Website AB Testing",
    body: "Served as note-taker for an AB testing initiative on the Singapore Land Transport Authority website revamp. Interviewed 10 vehicle-owning participants, comparing the existing LTA site with NCS's prototype. Categorized feedback into themes around usability, user emotions, and design suggestions, then compiled findings into a comprehensive deck for the internal team.",
    tags: ["AB Testing", "LTA", "User Interviews", "UX Research"],
  },
  {
    period: "Dec 2024",
    title: "Christmas Party & AWS DeepRacer",
    body: "Organized a department-wide Christmas party — my first corporate event — handling full budget tracking and expense documentation. Separately, competed in the NCS AWS DeepRacer challenge, training a machine learning model to optimize a virtual car's speed. Placed 7th out of 250+ intern participants, sparking a deeper interest in machine learning.",
    tags: ["Event Planning", "AWS", "Machine Learning", "DeepRacer"],
  },
];

const stats = [
  { value: "200+", label: "User testing participants" },
  { value: "Top 7", label: "AWS DeepRacer out of 250+" },
  { value: "4mo", label: "Aug – Dec 2024" },
  { value: "5+", label: "Live client projects" },
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0E2439", fontFamily: "'Georgia', serif" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-8 md:px-20 pt-20 pb-32">

        {/* decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(25,183,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(25,183,165,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* large background number */}
        <div className="absolute right-0 top-0 pointer-events-none select-none" style={{
          fontSize: "clamp(12rem,30vw,28rem)",
          fontWeight: 700,
          color: "rgba(25,183,165,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}>01</div>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 mb-12 text-sm transition-opacity hover:opacity-70"
          style={{ color: "#19B7A5" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to projects
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: "#19B7A5", borderColor: "rgba(25,183,165,0.3)" }}>
              Internship · 2024
            </span>
            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>
              Aug – Dec 2024
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}>
            UI/UX Design Intern<br />
            <span style={{ color: "#19B7A5", fontStyle: "normal", fontWeight: 700 }}>@ NCS</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.125rem", lineHeight: 1.8, maxWidth: "600px" }}>
            I spent 4 months in NCS's Digital Experience division, working on
            multiple real government projects, large-scale user research, and live
            public-facing events — from solving problems to marketing NCS's booth at Singapore Design Week.
          </p>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="px-8 md:px-20 pb-24">
        <h2 style={{ fontSize: "2rem", fontWeight: 400, color: "white", lineHeight: 1.3, marginBottom: "1.5rem" }}>
              Achievements and Statistics
            </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden", background: "rgba(255,255,255,0.06)" }}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-10 px-6 text-center" style={{ background: "#0E2439" }}>
              <p style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#19B7A5", lineHeight: 1, marginBottom: "8px" }}>{s.value}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────── */}
      <section className="px-8 md:px-20 pb-24">
        {/* overview of NCS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#19B7A5" }}>About NCS</p>
            <h2 style={{ fontSize: "2rem", fontWeight: 400, color: "white", lineHeight: 1.3, marginBottom: "1.5rem" }}>
              A multinational IT company at the heart of Singapore's digital government
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              NCS Pte. Ltd. (formerly National Computer Systems) was established in 1981, privatized in 1996,
              and became part of the Singtel group in 1997. Today it operates across 20+ cities in the
              Asia-Pacific region with over 13,000 staff — serving government agencies across Singapore
              through digital transformation, cloud, and UX design.
            </p>
              <div className="flex gap-6 mt-6">
                {[["20+", "Cities in Asia-Pacific"], ["13,000", "Staff worldwide"], ["1981", "Founded"]].map(([num, label]) => (
                  <div key={label} className="border-l-2 pl-3" style={{ borderColor: "#19B7A5" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 500, color: "white" }}>{num}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{label}</div>
                  </div>
                ))}
              </div>
          </div>
            <div className="flex items-center justify-center">
              <Image src="/images/NCS_Logo.jpg" alt="NCS logo" width={800} height={300} className="rounded-lg mb-4 object-cover" />
            </div>
        </div>
        {/* horizontal divider */}
        <div className="py-20">
          <hr style={{ border: "none", borderTop: "0.5px solid rgba(255,255,255,0.07)", margin: "0 auto", maxWidth: "72rem" }} />
        </div>

        {/* overview of my role */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-10">
            <div className="flex items-center justify-center">
              <Image src="/images/Digital_X.webp" alt="NCS logo" width={800} height={300} className="rounded-lg mb-4 object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#19B7A5" }}>My Role</p>
              <h2 style={{ fontSize: "2rem", fontWeight: 400, color: "white", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                Digital Experience Division, NEXT Department
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                I joined the UI/UX design team that is responsible with communicating with clients, 
                understanding their requirements and transforming them into mobile and web application designs 
                for various government agencies. Our work spanned experience design,
                X-Reality, mobile-centric solutions, digital strategy, and business process transformation.
              </p>
            </div>
          </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────── */}
      <section className="px-8 md:px-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#19B7A5" }}>What I did</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 400, color: "white", marginBottom: "4rem" }}>
            Work experiences
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "rgba(25,183,165,0.15)" }} />

            <div className="space-y-16 pl-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative group">
                  {/* dot */}
                  <div
                    className="absolute -left-10 top-1 w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                    style={{ background: "#19B7A5", transform: "translateX(-3px)" }}
                  />

                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {item.period}
                  </p>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "white", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1rem", maxWidth: "640px" }}>
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ color: "#19B7A5", border: "1px solid rgba(25,183,165,0.25)", background: "rgba(25,183,165,0.05)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────────── */}
      <section className="px-8 md:px-20 pb-32" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto pt-24">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#19B7A5" }}>Key Takeaways</p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 400, color: "white", marginBottom: "3rem" }}>
            What I walked away with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                title: "Real-world UX process",
                body: "Moved beyond university projects into high-fidelity, client-facing prototypes — learning how professional design iteration works under business constraints.",
              },
              {
                icon: "◉",
                title: "User research at scale",
                body: "Handled data from 200+ guerrilla test participants and ran intimate AB testing sessions — understanding how research insights translate into design decisions.",
              },
              {
                icon: "◎",
                title: "Adaptability under pressure",
                body: "Joined time-sensitive projects mid-stream, absorbed context quickly, and delivered under tight deadlines — from same-day TikTok edits to last-minute workshop prep.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p style={{ fontSize: "1.5rem", color: "#19B7A5", marginBottom: "1rem" }}>{card.icon}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ──────────────────────────────────────── */}
      <section className="px-8 md:px-20 pb-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#19B7A5" }}>Reflection</p>
          <blockquote style={{
            fontSize: "clamp(1.25rem,2.5vw,1.75rem)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            fontStyle: "italic",
            borderLeft: "2px solid #19B7A5",
            paddingLeft: "2rem",
          }}>
            "My internship at NCS strengthened my interest in user experience design and equipped me
            with practical skills I will carry forward. Each project — from government POCs to
            Singapore Design Week — challenged me to step out of my comfort zone and grow both
            professionally and personally."
          </blockquote>
          <p className="mt-8" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", lineHeight: 1.8 }}>
            Beyond the technical work, the culture at NCS left a lasting impression. Breakfast sessions
            with directors, the AWS DeepRacer competition (where I placed 7th out of 250+ interns), and
            monthly InternsConnect days created a community that made the experience genuinely memorable.
          </p>
        </div>
      </section>

      {/* ── FOOTER NAV ──────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="text-sm transition-opacity hover:opacity-60" style={{ color: "rgba(255,255,255,0.4)" }}>
            ← All projects
          </Link>
          <Link href="/projects/product-design" className="text-sm transition-opacity hover:opacity-60" style={{ color: "rgba(255,255,255,0.4)" }}>
            Next project →
          </Link>
        </div>
      </section>

    </main>
  );
}