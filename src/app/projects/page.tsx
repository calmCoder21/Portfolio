type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to showcase projects and skills.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://portfolio-seven-ashy-33.vercel.app/",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Task manager with create, edit, delete functionality and responsive UI.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Product Page",
    description:
      "Responsive product listing page with modern layout and reusable components.",
    tech: ["Next.js", "React", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Landing Page",
    description:
      "Marketing landing page optimized for performance and conversions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        A collection of projects I’ve built to practice and apply my
        frontend development skills.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-gray-100 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href={project.live}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}