import Link from "next/link";

export default function MLPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* hero banner */}
      <div className="bg-navy py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/#projects" className="text-teal text-sm hover:opacity-70 transition mb-8 inline-block">
            ← Back to projects
          </Link>
          <p className="text-teal text-sm uppercase tracking-widest mb-3">Internship · 2025</p>
          <h1 className="text-5xl font-medium text-white mb-6">Company Name</h1>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            A short one or two sentence summary of what the internship was about and what you worked on.
          </p>
          <div className="flex gap-2 flex-wrap mt-8">
            {["React", "Python", "AWS"].map(tag => (
              <span key={tag} className="text-xs text-teal border border-teal/30 rounded-full px-4 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* content */}
      <div className="max-w-4xl mx-auto px-8 py-20">

        {/* overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-500 leading-relaxed">
            Write a longer description of your internship here. What was the company? What team were
            you on? What was the overall goal of your work? This is your chance to give context before
            diving into specifics.
          </p>
        </section>

        {/* what i did */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">What I worked on</h2>
          <div className="space-y-4">
            {[
              { title: "Feature one", desc: "Describe what you built, why it mattered, and what technologies you used to do it." },
              { title: "Feature two", desc: "Another thing you worked on. Be specific — numbers and impact are great here." },
              { title: "Feature three", desc: "A third contribution. Even small things count if you explain the context well." },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 transition">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* key takeaways */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">Key takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { stat: "X+", label: "Features shipped" },
              { stat: "Y%", label: "Performance improvement" },
              { stat: "Z", label: "Team size" },
            ].map(item => (
              <div key={item.label} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                <p className="text-3xl font-medium text-navy mb-1">{item.stat}</p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* reflection */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Reflection</h2>
          <p className="text-gray-500 leading-relaxed">
            What did you learn? What would you do differently? This section shows self-awareness
            and growth mindset — both things employers love to see.
          </p>
        </section>

        {/* footer nav */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
          <Link href="/#projects" className="text-sm text-gray-400 hover:text-gray-600 transition">
            ← All projects
          </Link>
          <Link href="/projects/portfolio-v2" className="text-sm text-gray-400 hover:text-gray-600 transition">
            Next project →
          </Link>
        </div>

      </div>
    </main>
  );
}