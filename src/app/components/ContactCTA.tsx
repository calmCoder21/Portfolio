import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Interested in working together?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I’m currently open to new opportunities and collaborations.
          Feel free to reach out if you’d like to discuss a project or role.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}