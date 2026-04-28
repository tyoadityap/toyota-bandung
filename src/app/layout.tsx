import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";

// export const metadata = {
//   title: "Toyota Bandung",
//   description: "Marketing Sales Dealer Mobil",
// };
export const metadata: Metadata = {
  title: "Toyota Bandung - Promo & Unit Ready Stock 2026",
  description: "Dealer resmi Toyota Bandung. Dapatkan promo bunga 0% dan cicilan ringan untuk Rush, Avanza, dan Veloz.",
  icons: {
    icon: "/icon.png", // Mengarahkan langsung ke file PNG di folder public
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 antialiased"> 
        <Navbar />
        {children}
        <FloatingWA />
        <Footer />
      </body>
    </html>
  );
}