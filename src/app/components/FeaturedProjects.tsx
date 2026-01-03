import Link from "next/link";

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
      "A modern and responsive portfolio website built using Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "A task management application with CRUD functionality and clean UI.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Product Page",
    description:
      "A responsive product listing page with reusable components.",
    tech: ["Next.js", "React", "CSS"],
    live: "#",
    github: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 bg-white hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
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
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}