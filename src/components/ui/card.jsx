export default function ProjectCard({ title, description, tags, link }) {
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