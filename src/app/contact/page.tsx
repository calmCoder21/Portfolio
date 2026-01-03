export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Have a question, opportunity, or want to work together?
        Fill out the form below and I’ll get back to you.
      </p>

      <form className="max-w-xl space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}