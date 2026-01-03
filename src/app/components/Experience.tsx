type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    organization: "Self Projects",
    period: "2023 – Present",
    description:
      "Built multiple responsive web applications using React, Next.js, and Tailwind CSS. Focused on performance, accessibility, and reusable components.",
  },
  {
    title: "Computer Science Student",
    organization: "University / Online Learning",
    period: "2021 – 2023",
    description:
      "Studied core computer science concepts and modern web development. Practiced building real-world projects and learning best practices.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Experience & Education</h2>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.organization} • {item.period}
              </p>
              <p className="text-gray-600 mt-2 max-w-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}