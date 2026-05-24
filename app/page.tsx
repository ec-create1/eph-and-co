import HeroSlider from '@/components/HeroSlider'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />

      <section className="section-spacing max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-6">
              Manchester, United Kingdom
            </p>

            <h2 className="text-5xl mb-8">
              Luxury custom crystal accessories.
            </h2>

            <p className="text-lg leading-relaxed text-black/70">
              EPH & CO creates bespoke handbag charms, crystal accessories,
              and personalised statement pieces inspired by luxury fashion,
              collectible culture, and editorial styling.
            </p>
          </div>

          <div className="aspect-square bg-neutral-100 flex items-center justify-center text-sm uppercase tracking-widest">
            Collection Coming Soon
          </div>
        </div>
      </section>
    </main>
  )
}