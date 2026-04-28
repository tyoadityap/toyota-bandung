export default function Footer() {
  return (
    <footer className="bg-red-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white-800 pb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-red-500">TOYOYA<span className="text-white">BANDUNG</span></h2>
          <p className="text-slate-400 max-w-sm mb-6">
            Solusi kendaraan impian keluarga Anda. Kami menyediakan unit ready stock dengan layanan purna jual terbaik di kelasnya.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-6">Navigasi</h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="/" className="hover:text-red-400 transition">Beranda</a></li>
            <li><a href="/mobil" className="hover:text-red-400 transition">Katalog Mobil</a></li>
            <li><a href="/promo" className="hover:text-red-400 transition">Promo Terbaru</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">Jam Operasional</h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Senin - Jumat: 08.00 - 18.00</li>
            <li>Sabtu: 08.00 - 15.00</li>
            <li>Minggu: Dengan Janji Temu</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-white-500 text-xs italic">
        © 2026 Dealer Auto Modern. All Rights Reserved.
      </p>
    </footer>
  );
}