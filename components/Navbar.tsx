import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl tracking-[0.3em] font-semibold">
          EPH & CO
        </Link>

        <nav className="flex gap-6 text-sm uppercase tracking-wide">
          <Link href="/shop">Shop</Link>
          <Link href="/quote">Custom Orders</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </div>
    </header>
  )
}