import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
          Frontend Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Building modern <br />
          web experiences with <span className="text-blue-600">React</span>
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          I’m a frontend developer specializing in building fast,
          accessible, and responsive web applications using
          React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:border-gray-900 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}