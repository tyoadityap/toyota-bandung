// src/lib/constants.ts

export const CONTACT_INFO = {
  whatsapp: "62882002259764", // Hanya angka, awali dengan 62
  email: "mrizkyutama3@gmail.com",
  address: "Jl. Gatot Subroto No.9 , Kota Bandung, Jawa Barat, Indonesia",
  mapsUrl: "https://maps.app.goo.gl/LZjJLnmVeYhKBYvP9",
};

export const PROMO_INFO = {
  cashback: "20 Juta",
  bunga: "0%",
  defaultMessage: "Halo Sales Toyota, saya ingin bertanya tentang promo unit terbaru.",
};

// Fungsi untuk membuat link WhatsApp otomatis
export const createWhatsAppLink = (message?: string) => {
  const baseUrl = "https://wa.me/";
  const text = encodeURIComponent(message || PROMO_INFO.defaultMessage);
  return `${baseUrl}${CONTACT_INFO.whatsapp}?text=${text}`;
};