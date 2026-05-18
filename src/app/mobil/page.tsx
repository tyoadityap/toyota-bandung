"use client";

import { useState } from 'react';
import Link from 'next/link';
import cars from '../../data/cars.json';
import Image from 'next/image';

export default function DaftarMobil() {
  const [filter, setFilter] = useState('Semua');

  // Mengambil kategori unik dari data (misal: SUV, MPV)
  // Jika di JSON belum ada field 'tipe', kita bisa filter berdasarkan kata kunci di spesifikasi
  const kategori = [
    'Semua',
    ...Array.from(new Set(cars.map((mobil) => mobil.tipe)))
  ];

  const mobilTersaring = filter === 'Semua'
    ? cars
    : cars.filter(mobil => mobil.tipe === filter);


  const groupedCars = mobilTersaring.reduce((acc, mobil) => {
    if (!acc[mobil.parent]) {
      acc[mobil.parent] = [];
    }

    acc[mobil.parent].push(mobil);

    return acc;
  }, {} as Record<string, typeof cars>);

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
              className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === kat
                ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Grid Daftar Mobil */}

        <div className="container mx-auto px-4">

          {Object.entries(groupedCars).map(([parent, mobilGroup]) => (
            <div key={parent} className="mb-20">

              {/* Header Parent */}
              <div className="mb-8">
                <h2 className="text-4xl font-black text-slate-900">
                  {parent}
                </h2>

                <div className="w-24 h-1 bg-red-600 mt-3 rounded-full" />
              </div>

              {/* List Mobil */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {mobilGroup.map((mobil) => (
                  <div
                    key={mobil.id}
                    className="group border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-60 bg-slate-100 overflow-hidden">

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 z-30 flex flex-col gap-2">
                        <span className="bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-md shadow-lg uppercase tracking-wider">
                          Promo Bunga 0%
                        </span>

                        <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold px-3 py-1 rounded-md shadow-lg uppercase tracking-wider">
                          Ready Stock
                        </span>
                      </div>

                      <img
                        src={mobil.gambar}
                        alt={mobil.nama}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </div>

                    <div className="p-8">

                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">
                            {mobil.nama}
                          </h3>

                          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                            {mobil.spesifikasi[0]}
                          </p>
                        </div>

                        <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                          Ready
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-sm font-bold text-slate-500">
                          Mulai
                        </span>

                        <span className="text-2xl font-black text-slate-600">
                          Rp {(mobil.harga / 1000000).toLocaleString('id-ID')} Jt
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {mobil.spesifikasi.slice(1, 3).map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg"
                          >
                            <span>✓ {spec}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/mobil/${mobil.id}`}
                        className="block w-full text-center py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-slate-200"
                      >
                        Lihat Detail
                      </Link>

                    </div>
                  </div>
                ))}

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