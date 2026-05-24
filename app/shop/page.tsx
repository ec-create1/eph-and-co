export default function ShopPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-32">
      <h1 className="text-6xl mb-10">Shop</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-4">
            <div className="aspect-square bg-neutral-100" />

            <div>
              <h2 className="text-2xl">Coming Soon</h2>

              <p className="text-black/60">
                New custom accessories arriving soon.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}