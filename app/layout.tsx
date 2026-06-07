import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasa Lokal - Landing Page UMKM",
  description: "Landing page UMKM estetik untuk promosi produk, harga, testimoni, FAQ, dan kontak.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
