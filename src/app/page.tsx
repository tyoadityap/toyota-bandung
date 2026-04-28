"use client";
import Link from 'next/link';
import Image from 'next/image';
import cars from '../data/cars.json';
import { createWhatsAppLink, PROMO_INFO } from "../lib/constants";

// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Swiper CSS (Pastikan urutannya seperti ini)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
    const slides = [
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/PKbOClGxJteUtu050bJtkOImmvNJaVioXnGiY0QO.webp",
      title: "Kendarai <span class='text-red-500'>Impian</span> Anda Hari Ini.",
      desc: "Dapatkan penawaran eksklusif untuk unit ready stock Toyota Rush dan Avanza."
    },
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/AMDHel87qurefMy4pSfCtgN9hesIIDUDr7xR6wgT.webp",
      title: "Promo <span class='text-red-500'>Bunga 0%</span> Tenor 2 Tahun",
      desc: "Cicilan ringan dengan proses approval cepat tanpa ribet khusus bulan ini."
    },
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/BHQfIGb5yqC0wDGoROMyct6beFrmBHRD4JpWJJso.webp",
      title: "Tangguh Bersama <span class='text-red-500'>New Fortuner</span>",
      desc: "Simbol kekuatan dan kemapanan untuk Anda yang berjiwa petualang."
    },
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/0b13yl8WsOA4OXyDGCu5QuQPGafQlBQeweJoDhtc.webp",
      title: "Tangguh Bersama <span class='text-red-500'>New Fortuner</span>",
      desc: "Simbol kekuatan dan kemapanan untuk Anda yang berjiwa petualang."
    },
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/3h57wfZSTgvrzBCIqSqwE4l0HQALont7Ku7xChiv.webp",
      title: "Tangguh Bersama <span class='text-red-500'>New Fortuner</span>",
      desc: "Simbol kekuatan dan kemapanan untuk Anda yang berjiwa petualang."
    },
    {
      image: "https://d1g6w7sntckt92.cloudfront.net/public/images/banner_images/cNy1y2yBQ3UZvq8LfUoNmuSmiWDpYNqxYUv0ypeN.webp",
      title: "Tangguh Bersama <span class='text-red-500'>New Fortuner</span>",
      desc: "Simbol kekuatan dan kemapanan untuk Anda yang berjiwa petualang."
    }
    
    
    
  ];
  return (
    <div className="bg-white text-slate-900 font-sans">
      
      {/* HERO SECTION WITH CAROUSEL */}
      <section className="relative h-[85vh] bg-slate-900 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                {/* Overlay Gelap agar Teks Terbaca */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

                {/* Content */}
                <div className="relative z-20 text-center px-6 max-w-4xl">
                  <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase bg-red-600 rounded-full animate-bounce">
                    Promo Terbatas Mei 2026
                  </span>
                  <h1 
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    {slide.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/mobil" className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-500/20">
                      Lihat Koleksi Mobil
                    </Link>
                    <Link href="/kontak" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                      Konsultasi Sales
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Style */}
        <style jsx global>{`
          .swiper-pagination-bullet {
            background: white !important;
            width: 12px;
            height: 12px;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #ef4444 !important;
            width: 30px;
            border-radius: 6px;
            opacity: 1;
            transition: all 0.3s;
          }
        `}</style>
      </section>

      {/* FEATURED CARS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Unit Pilihan</h2>
            <p className="text-slate-500">Mobil terlaris dengan fitur keamanan terbaru dan efisiensi bahan bakar terbaik.</p>
          </div>
          <Link href="/mobil" className="hidden md:block text-red-600 font-bold hover:underline">
            Lihat Semua Unit →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((mobil) => (
            <div key={mobil.id} className="group border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                {/* Placeholder Gambar - Pastikan file ada di /public/images/ */}
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
                    (e.target as any).src = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{mobil.nama}</h3>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{mobil.spesifikasi[0]}</p>
                  </div>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Ready
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-sm font-bold text-slate-500">Mulai</span>
                  <span className="text-2xl font-black text-slate-600">
                    Rp {(mobil.harga / 1000000).toLocaleString('id-ID')} Jt
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {mobil.spesifikasi.slice(1, 3).map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg">
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
      </section>

      {/* CALL TO ACTION (WHATSAPP) */}
      <section className="bg-red-600 py-16 px-6 rounded-[3rem] max-w-7xl mx-auto mb-20 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Punya Pertanyaan Seputar Promo?</h2>
        <p className="text-red-100 mb-10 text-lg">Hubungi Sales Executive kami sekarang dan dapatkan cashback hingga {PROMO_INFO.cashback}!!</p>
        <a 
          href={createWhatsAppLink(`Halo, saya tertarik dengan promo cashback ${PROMO_INFO.cashback}`)}
          target="_blank" 
          className="bg-white text-red-600 px-10 py-4 rounded-2xl font-extrabold text-xl hover:bg-slate-100 transition-all shadow-xl">
          Klik Chat WhatsApp
        </a>
    </section>

      {/* TESTIMONIAL SECTION - PREMIUM LAYOUT */}
        <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <span className="text-red-600 font-bold tracking-widest text-sm uppercase">Apa Kata Mereka?</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Kepuasan Pelanggan Adalah Prioritas</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">Bukti nyata kepuasan pelanggan yang telah mempercayakan kendaraan impian mereka kepada kami.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testi) => (
            <div key={testi.id} className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                
                {/* 1. FOTO SERAH TERIMA UNIT (UTAMA) */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                {/* Overlay Halus saat Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500" />
                
                <Image 
                    src={testi.fotoSerahTerima} 
                    alt={`Serah Terima ${testi.unit}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized // Tambahkan jika menggunakan URL luar
                />
                
                {/* Label Unit yang Dibeli */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {testi.unit}
                    </span>
                </div>
                </div>

                {/* 2. ISI TESTIMONI & PROFIL */}
                <div className="p-8">
                {/* Rating Bintang */}
                <div className="flex gap-1 text-amber-400 mb-5">
                    {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                    ))}
                </div>
                
                {/* Pesan Testimoni dengan Kutipan Besar */}
                <div className="relative mb-8">
                    <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif">“</span>
                    <p className="text-slate-600 leading-relaxed italic relative z-10 pl-2">
                    {testi.pesan}
                    </p>
                </div>

                {/* Info Pelanggan */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-50">
                    <Image 
                        src={testi.fotoProfil} 
                        alt={testi.nama} 
                        fill 
                        className="object-cover" 
                        unoptimized
                    />
                    </div>
                    <div className="text-left">
                    <h4 className="font-bold text-slate-900">{testi.nama}</h4>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{testi.pekerjaan}</p>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>

    </div>
  );
}

const testimonials = [
  {
    id: 1,
    nama: "Budi Santoso",
    pekerjaan: "Wiraswasta",
    pesan: "Pelayanan sangat cepat! Proses pengajuan kredit Toyota Rush saya hanya butuh 3 hari sampai unit dikirim ke rumah. Salesnya sangat membantu.",
    fotoProfil: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", // Foto orangnya
    // FOTO SERAH TERIMA (Kunci Visual)
    fotoSerahTerima: "/images/kiki voxy.png", 
    unit: "Toyota Voxy 2.0"
  },
  {
    id: 2,
    nama: "Siti Aminah",
    pekerjaan: "Ibu Rumah Tangga",
    pesan: "Dapat promo bunga 0% untuk Avanza baru. Penjelasan sales sangat detail dan jujur mengenai simulasi kreditnya. Sangat puas!",
    fotoProfil: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    fotoSerahTerima: "/images/kiki raize g.png",
    unit: "Toyota Raize G CVT 1.2"
  },
  {
    id: 3,
    nama: "dr. Andi Wijaya",
    pekerjaan: "Dokter",
    pesan: "Showroom-nya nyaman dan pilihan unit Toyota-nya lengkap. Terima kasih atas hadiah langsung aksesorisnya saat serah terima Fortuner saya.",
    fotoProfil: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    fotoSerahTerima: "/images/kiki fortuner gr.png",
    unit: "Toyota Fortuner GR 4X2"
  },
  {
    id: 4,
    nama: "dr. Andi Wijaya",
    pekerjaan: "Dokter",
    pesan: "Showroom-nya nyaman dan pilihan unit Toyota-nya lengkap. Terima kasih atas hadiah langsung aksesorisnya saat serah terima Fortuner saya.",
    fotoProfil: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    fotoSerahTerima: "/images/kiki avanza.png",
    unit: "Toyota Avanza E M/T"
  },
  {
    id: 5,
    nama: "dr. Andi Wijaya",
    pekerjaan: "Dokter",
    pesan: "Showroom-nya nyaman dan pilihan unit Toyota-nya lengkap. Terima kasih atas hadiah langsung aksesorisnya saat serah terima Fortuner saya.",
    fotoProfil: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    fotoSerahTerima: "/images/kiki agya g.png",
    unit: "Toyota Agya G CVT"
  }
];