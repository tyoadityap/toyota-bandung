"use client";

import { useState } from 'react';
import Link from 'next/link';
import cars from '../../data/cars.json';
import Image from 'next/image';

export default function DaftarMobil() {
  const [filter, setFilter] = useState('Semua');

  // Mengambil kategori unik dari data (misal: SUV, MPV)
  // Jika di JSON belum ada field 'tipe', kita bisa filter berdasarkan kata kunci di spesifikasi
  const kategori = ['Semua', 'SUV', 'MPV', 'Sedan'];

  const mobilTersaring = filter === 'Semua' 
    ? cars 
    : cars.filter(mobil => mobil.tipe === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Halaman */}
      <div className="bg-red-900 text-white py-16 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Katalog Mobil 2026</h1>
          <p className="text-white-400">Temukan unit terbaik dengan penawaran harga spesial bulan ini.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {kategori.map((kat) => (
            <button
              key={kat}
              onClick={() => setFilter(kat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === kat 
                ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Grid Daftar Mobil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobilTersaring.map((mobil) => (
            <div key={mobil.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-56">
                <Image 
                  src={mobil.gambar} 
                  alt={mobil.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{mobil.nama}</h3>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Baru</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{mobil.deskripsi}</p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-xs text-slate-400">Mulai dari</p>
                    <p className="text-xl font-black text-slate-900">Rp {(mobil.harga / 1000000).toLocaleString('id-ID')} Jt</p>
                  </div>
                  <Link 
                    href={`/mobil/${mobil.id}`}
                    className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 transition"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Jika Hasil Kosong */}
        {mobilTersaring.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">Maaf, unit untuk kategori "{filter}" belum tersedia.</p>
          </div>
        )}
      </div>
    </div>
  );
}