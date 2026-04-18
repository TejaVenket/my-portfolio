import Card from "@/components/ui/Card";

const projects = [
  {
    title: "UI/UX Design Internship",
    category: "Internship",
    description: "Explore my contributions as a UI/UX Design Intern at NCS",
    tags: ["Figma", "Tailwind", "Vercel"],
    year: "August 2025 to January 2026",
    href:"/projects/internship",
  },
  {
    title: "Product Design and Development",
    category: "Projects",
    description: "Click to explore my product design projects from Humanitarian Aid designs to Warehouse Monitoring Systems",
    tags: ["Figma", "Design Thinking", "Storyboarding"],
    year: "2025",
    href: "/projects/product-design",
  },
  {
    title: "Machine Learning and Artificial Intelligence",
    category: "Projects",
    description: "Click to Explore my ML/AI projects, in building smart Chabots to deployed safety monitoring systems",
    tags: ["Python", "Synthetic Data Generation", "Design Thinking"],
    year: "2025",
    href: "/projects/machine-learning",
  },
];

export default function Projects() {
  return (
    <section className="md:px-16 mx-auto py-24 bg-text-accent">
      <h2 className="text-4xl font-mono font-semibold text-text-main mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(project => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}