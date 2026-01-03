import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold">
          DevPortfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}