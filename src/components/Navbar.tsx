"use client"; // WAJIB ada di baris pertama agar fungsi klik jalan

import { useState } from "react";
import Link from "next/link";
import { createWhatsAppLink } from "../lib/constants";

export default function Navbar() {
  // 1. Buat 'saklar' untuk buka-tutup menu
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup menu otomatis saat link diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-[999]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#eb0a1e]">
          TOYOTA<span className="text-slate-900 font-light">BANDUNG</span>
        </Link>

        {/* MENU DESKTOP (Muncul di layar besar) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/mobil" className="hover:text-red-600 transition">Katalog</Link>
          <Link href="/kontak" className="hover:text-red-600 transition">Promo</Link>
          <a 
            href={createWhatsAppLink()}
            target="_blank"
            className="bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition shadow-lg shadow-red-200"
          >
            Hubungi Sales
          </a>
        </div>

        {/* 2. TOMBOL HAMBURGER (Hanya muncul di Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} // Membalikkan status buka/tutup
          className="md:hidden p-2 text-slate-600 outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Icon X saat menu terbuka
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Icon Garis Tiga saat menu tertutup
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* 3. MENU MOBILE DROPDOWN */}
      {/* Menggunakan class dinamis: jika isOpen true, tampilkan menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
        isOpen ? "max-h-96 opacity-100 border-t border-slate-50" : "max-h-0 opacity-0"
      }`}>
        <div className="flex flex-col gap-5 p-6 text-base font-bold text-slate-700">
          <Link href="/" onClick={closeMenu} className="hover:text-red-600 transition">Home</Link>
          <Link href="/mobil" onClick={closeMenu} className="hover:text-red-600 transition">Katalog Mobil</Link>
          <Link href="/kontak" onClick={closeMenu} className="hover:text-red-600 transition">Promo Terbaru</Link>
          <a 
            href={createWhatsAppLink()}
            className="bg-red-600 text-white text-center py-4 rounded-xl shadow-lg active:scale-95 transition"
          >
            Hubungi Sales via WA
          </a>
        </div>
      </div>
    </nav>
  );
}