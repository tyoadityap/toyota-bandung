"use client";

import { useState } from 'react';
import { createWhatsAppLink, CONTACT_INFO } from '../../lib/constants';

export default function KontakPromo() {
  const [nama, setNama] = useState('');
  const [mobil, setMobil] = useState('Toyota Rush');

  const handleSubmitWA = (e: React.FormEvent) => {
    e.preventDefault();
    // Menggunakan helper agar pesan lebih rapi dan dinamis
    const pesanCustom = `Halo Sales Toyota, saya *${nama}*. Saya tertarik dengan promo mobil *${mobil}*. Mohon info simulasinya.`;
    const link = createWhatsAppLink(pesanCustom);
    window.open(link, '_blank');
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
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-left hover:scale-105 transition-transform duration-300">
                <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block shadow-sm">KODE: {promo.code}</span>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION KONTAK */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Info Dealer */}
          <div>
            <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">Hubungi Kami</h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg">
              Tim sales kami siap membantu Anda 24/7. Silakan kunjungi showroom kami atau isi formulir di samping untuk mendapatkan simulasi kredit tercepat.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-red-50 p-4 rounded-2xl text-2xl">📍</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Alamat Showroom</h4>
                  <p className="text-slate-500">{CONTACT_INFO.address || "Jl. Raya Otomotif No. 123, Bandung"}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-green-50 p-4 rounded-2xl text-2xl">📞</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">WhatsApp Resmi</h4>
                  <p className="text-slate-500 font-medium">+{CONTACT_INFO.whatsapp}</p>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Respon Cepat 24 Jam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Konsultasi */}
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            {/* Dekorasi Aksen Merah */}
            <div className="absolute top-0 right-0 w-20 h-1 bg-red-600"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Konsultasi Gratis</h3>
            <form onSubmit={handleSubmitWA} className="space-y-5">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan nama Anda..."
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition bg-slate-50/50"
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Unit Pilihan</label>
                <select 
                  className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none transition bg-white"
                  value={mobil}
                  onChange={(e) => setMobil(e.target.value)}
                >
                  <option>Toyota Rush</option>
                  <option>Toyota Avanza</option>
                  <option>Toyota Veloz</option>
                  <option>Toyota Fortuner</option>
                  <option>Toyota Raize</option>
                </select>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#eb0a1e] text-white py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-200 flex items-center justify-center gap-3 active:scale-95"
                >
                  Kirim via WhatsApp
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">
                  Aman • Cepat • Tanpa Biaya
                </p>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}