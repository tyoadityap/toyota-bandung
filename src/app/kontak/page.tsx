"use client";

import { useState } from 'react';

export default function KontakPromo() {
  const [nama, setNama] = useState('');
  const [mobil, setMobil] = useState('Toyota Rush');

  const kirimWA = (e: React.FormEvent) => {
    e.preventDefault();
    const nomorWA = "628123456789"; // Ganti dengan nomor WhatsApp Anda
    const pesan = `Halo Sales Toyota, saya *${nama}* ingin bertanya tentang promo mobil *${mobil}*.`;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  const promolist = [
    { title: "Promo Bunga 0%", desc: "Tenor hingga 2 tahun untuk Avanza & Veloz", code: "TOYOTA0PERCENT" },
    { title: "Low DP 10Jt", desc: "Bawa pulang Toyota Rush dengan uang muka rendah", code: "RUSHMEI" },
    { title: "Free Service", desc: "Gratis jasa servis & suku cadang s/d 60.000 KM", code: "FREECARE" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION PROMO */}
      <section className="bg-red-600 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic">Mega Promo Mei 2026</h1>
          <p className="text-red-100 text-lg mb-10">Dapatkan penawaran eksklusif khusus pembelian bulan ini!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promolist.map((promo, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-left">
                <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block">KODE: {promo.code}</span>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-red-100 text-sm">{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION KONTAK */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Dealer */}
          <div>
            <h2 className="text-3xl font-black mb-6 text-slate-900">Hubungi Kami</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Tim sales kami siap membantu Anda 24/7. Silakan kunjungi showroom kami atau isi formulir di samping untuk mendapatkan simulasi kredit tercepat.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 font-bold">📍</div>
                <div>
                  <h4 className="font-bold text-slate-900">Alamat Showroom</h4>
                  <p className="text-slate-500 text-sm">Jl. Raya Otomotif No. 123, Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-red-50 p-3 rounded-xl text-red-600 font-bold">📞</div>
                <div>
                  <h4 className="font-bold text-slate-900">Telepon / WA</h4>
                  <p className="text-slate-500 text-sm">0812-3456-7890 (Marketing 24 Jam)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Konsultasi */}
          <div className="bg-slate-50 p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6">Konsultasi Gratis</h3>
            <form onSubmit={kirimWA} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="Contoh: Budi Santoso"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition"
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mobil yang Diminati</label>
                <select 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition bg-white"
                  onChange={(e) => setMobil(e.target.value)}
                >
                  <option>Toyota Rush</option>
                  <option>Toyota Avanza</option>
                  <option>Toyota Veloz</option>
                  <option>Toyota Fortuner</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#eb0a1e] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200"
              >
                Kirim via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}