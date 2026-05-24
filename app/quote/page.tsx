export default function QuotePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-6xl mb-10">
        Custom Orders
      </h1>

      <form className="space-y-6">
        <input
          placeholder="Name"
          className="w-full border border-black/20 p-4"
        />

        <input
          placeholder="Email"
          className="w-full border border-black/20 p-4"
        />

        <textarea
          placeholder="Tell us about your project"
          className="w-full border border-black/20 p-4 min-h-[200px]"
        />

        <button className="border border-black px-8 py-4 uppercase tracking-widest">
          Submit Request
        </button>
      </form>
    </main>
  )
}