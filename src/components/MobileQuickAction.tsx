export default function MobileQuickAction() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-100 p-3 grid grid-cols-2 gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:0882002259764" 
        className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm"
      >
        <span>📞</span> Hubungi
      </a>
      <a 
        href="https://wa.me/62882002259764" 
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm"
      >
        <span>💬</span> WhatsApp
      </a>
    </div>
  );
}