"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react'; // Tambahkan useState
import Link from 'next/link';
import Image from 'next/image';
import carsData from '../../../data/cars.json';
import { createWhatsAppLink, PROMO_INFO } from "../../../lib/constants";

export default function DetailMobil() {
  const params = useParams();
  const id = params.id;
  const mobil = carsData.find((item) => item.id === id);

  // State untuk melacak foto mana yang sedang ditampilkan di layar besar
  const [activeImage, setActiveImage] = useState(0);

  if (!mobil) return <div className="text-center py-20">Mobil tidak ditemukan</div>;

  // Pastikan data galeri ada, jika tidak pakai gambar default
  const daftarGambar = mobil.galeri || [mobil.gambar];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/mobil" className="text-slate-500 hover:text-red-600 flex items-center gap-2 font-medium">
          ← Kembali ke Katalog Toyota
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* KOLOM KIRI: GALERI FOTO */}
        <div className="space-y-4">
          {/* Foto Utama Besar */}
          <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl bg-slate-100">
            <Image 
              src={daftarGambar[activeImage]} 
              alt={mobil.nama}
              fill
              className="object-cover transition-all duration-500"
              unoptimized
            />
          </div>

          {/* Daftar Thumbnail (Foto Kecil) */}
          <div className="grid grid-cols-4 gap-4">
            {daftarGambar.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-20 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === index ? 'border-red-600 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Detail ${index}`} fill className="object-cover" unoptimized />
              </button>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: INFO MOBIL */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{mobil.nama}</h1>
          <p className="text-red-600 font-bold mb-6 tracking-widest text-sm uppercase">Official Toyota Dealer</p>
          
          <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8 flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">Harga OTR Mulai</p>
              <p className="text-3xl font-bold">Rp {(mobil.harga / 1000000).toLocaleString('id-ID')} Juta</p>
            </div>
            <span className="bg-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase">Promo Mei</span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Spesifikasi Unggulan:</h3>
              <div className="grid grid-cols-2 gap-3">
                {mobil.spesifikasi.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-red-600">●</span> {spec}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
              "{mobil.deskripsi}"
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href={createWhatsAppLink("Halo, saya ingin tanya promo Toyota terbaru")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-[2] bg-[#eb0a1e] text-white text-center py-4 rounded-2xl font-bold text-lg hover:bg-red-700 shadow-lg shadow-red-200 transition"
            >
              Hubungi Sales Sekarang
            </a>
            <button className="flex-1 bg-slate-100 text-slate-900 py-4 rounded-2xl font-bold hover:bg-slate-200 transition">
              Brosur PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}