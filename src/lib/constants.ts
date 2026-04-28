// src/lib/constants.ts

export const CONTACT_INFO = {
  whatsapp: "628123456789", // Hanya angka, awali dengan 62
  email: "sales@toyotabandung.com",
  address: "Jl. Raya Otomotif No. 123, Bandung",
  mapsUrl: "https://goo.gl/maps/xxx",
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