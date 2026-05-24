export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-6xl mb-16">FAQ</h1>

      <div className="space-y-12">
        <div>
          <h2 className="text-3xl mb-4">
            How long do custom orders take?
          </h2>

          <p className="text-black/70 leading-relaxed">
            Depending on the complexity of the project,
            personalised orders can take anywhere from
            a few days up to 2 months.
          </p>
        </div>

        <div>
          <h2 className="text-3xl mb-4">
            Do you ship internationally?
          </h2>

          <p className="text-black/70 leading-relaxed">
            Yes. We proudly ship worldwide from Manchester,
            United Kingdom.
          </p>
        </div>
      </div>
    </main>
  )
}