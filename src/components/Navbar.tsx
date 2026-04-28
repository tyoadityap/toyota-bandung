import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-red-700">
              Rizky<span className="text-slate-900"> Toyota</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition">
              Beranda
            </Link>
            <Link href="/mobil" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition">
              Daftar Mobil
            </Link>
            <Link href="/kontak" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition">
              Kontak & Promo
            </Link>
            <Link 
              href="https://wa.me/628123456789" 
              className="bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-md"
            >
              Hubungi Sales
            </Link>
          </div>

          {/* Mobile Menu Icon (Sederhana dulu) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}