import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} DevPortfolio. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}