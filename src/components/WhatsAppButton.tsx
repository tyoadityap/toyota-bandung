export default function WhatsAppButton() {
  const nomorWA = "62882002259764"; // Ganti dengan nomor Anda
  const pesan = "Halo, saya tertarik dengan unit mobil di website Anda.";
  
  return (
    <a 
      href={`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`}
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center gap-2"
    >
      <span className="font-bold">Tanya Sales</span>
    </a>
  );
}