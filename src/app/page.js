export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-blue-500 font-medium mb-2">Hi, I'm</p>
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl text-gray-500 max-w-xl">
          CS student at XYZ University. I build web apps, enjoy algorithms,
          and love turning ideas into working software.
        </p>
        <div className="flex gap-4 mt-8">
          <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            View Projects
          </a>
          <a href="/resume.pdf" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
            Resume
          </a>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Project One"
            description="A full-stack web app built with React and Node.js."
            tags={["React", "Node.js", "MongoDB"]}
            link="https://github.com/yourusername/project-one"
          />
          <ProjectCard
            title="Project Two"
            description="A machine learning model that classifies images."
            tags={["Python", "TensorFlow", "Flask"]}
            link="https://github.com/yourusername/project-two"
          />
        </div>
      </section>

    </main>
  );
}

// Reusable project card component
function ProjectCard({ title, description, tags, link }) {
  return (
    <a href={link} target="_blank"
      className="block border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}