const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Benefit", href: "#benefit" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const products = [
  {
    title: "Paket Snack Box",
    desc: "Cocok untuk meeting, acara keluarga, dan hampers sederhana.",
    price: "Mulai Rp18.000",
  },
  {
    title: "Kue Tradisional",
    desc: "Klepon, risoles, pastel, lemper, dan aneka jajanan pasar.",
    price: "Mulai Rp3.500/pcs",
  },
  {
    title: "Hampers Custom",
    desc: "Isi bisa disesuaikan untuk lebaran, ulang tahun, dan corporate gift.",
    price: "Mulai Rp75.000",
  },
];

const benefits = [
  "Bahan fresh setiap hari",
  "Bisa custom isi paket",
  "Packaging rapi dan estetik",
  "Pengiriman area kota tersedia",
  "Cocok untuk event kecil hingga besar",
  "Admin responsif via WhatsApp",
];

const testimonials = [
  {
    name: "Nadia",
    role: "Pelanggan acara kantor",
    text: "Snack box-nya rapi, enak, dan datang tepat waktu. Tim kantor suka banget.",
  },
  {
    name: "Rizky",
    role: "Customer hampers",
    text: "Packaging-nya cantik, cocok buat hadiah. Harganya juga masih masuk akal.",
  },
  {
    name: "Dewi",
    role: "Langganan keluarga",
    text: "Rasa kue tradisionalnya konsisten. Pesan mendadak juga dibantu dengan baik.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "Rp18.000",
    desc: "Untuk kebutuhan harian dan acara kecil.",
    items: ["3 item snack", "Air mineral", "Box standar"],
  },
  {
    name: "Favorite",
    price: "Rp28.000",
    desc: "Pilihan paling populer untuk meeting dan seminar.",
    items: ["4 item snack", "Air mineral/teh", "Box premium", "Custom stiker"],
  },
  {
    name: "Premium",
    price: "Rp45.000",
    desc: "Untuk acara spesial dan hampers eksklusif.",
    items: ["5 item snack", "Minuman premium", "Packaging eksklusif", "Kartu ucapan"],
  },
];

const steps = [
  "Pilih paket atau konsultasikan kebutuhanmu.",
  "Kirim jumlah pesanan, tanggal, dan alamat pengiriman.",
  "Admin konfirmasi harga dan detail pesanan.",
  "Pesanan diproses dan dikirim sesuai jadwal.",
];

const faqs = [
  {
    q: "Apakah bisa pesan mendadak?",
    a: "Bisa, tergantung jumlah pesanan dan ketersediaan produk. Untuk hasil terbaik, pesan H-1 atau H-2.",
  },
  {
    q: "Bisa custom isi snack box?",
    a: "Bisa. Kamu dapat memilih varian snack sesuai budget dan kebutuhan acara.",
  },
  {
    q: "Apakah melayani pengiriman?",
    a: "Ya, pengiriman tersedia untuk area tertentu. Biaya kirim mengikuti jarak lokasi.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2 font-black tracking-tight text-orange-950">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
              RL
            </span>
            <span>Rasa Lokal</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-orange-600">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/6281234567890"
            className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700"
          >
            Order
          </a>
        </div>
      </header>

      <section id="hero" className="relative px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-bold text-orange-700 shadow-sm">
              UMKM Snack & Hampers Lokal
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-orange-950 sm:text-6xl lg:text-7xl">
              Camilan lokal yang enak, rapi, dan siap bikin acara kamu lebih berkesan.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Rasa Lokal menyediakan snack box, kue tradisional, dan hampers custom untuk acara kantor,
              keluarga, sekolah, hingga kebutuhan bisnis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Rasa%20Lokal,%20saya%20mau%20order"
                className="rounded-full bg-orange-600 px-7 py-4 text-center font-bold text-white shadow-xl shadow-orange-600/25 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Pesan via WhatsApp
              </a>
              <a
                href="#produk"
                className="rounded-full border border-orange-200 bg-white/70 px-7 py-4 text-center font-bold text-orange-950 transition hover:-translate-y-0.5 hover:bg-white"
              >
                Lihat Produk
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-orange-300/30 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-2xl shadow-orange-950/10 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-orange-100 p-6">
                  <div className="text-5xl">🥐</div>
                  <h3 className="mt-5 text-xl font-black text-orange-950">Fresh Daily</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Dibuat sesuai pesanan agar rasa tetap maksimal.</p>
                </div>
                <div className="rounded-[2rem] bg-amber-100 p-6 sm:mt-10">
                  <div className="text-5xl">🎁</div>
                  <h3 className="mt-5 text-xl font-black text-orange-950">Custom Hampers</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">Paket cantik untuk hadiah dan corporate gift.</p>
                </div>
                <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-orange-950/5 sm:col-span-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-orange-600">Mulai dari</p>
                      <p className="text-3xl font-black text-orange-950">Rp18.000</p>
                    </div>
                    <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">Best Seller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Produk / Layanan" title="Pilihan produk untuk berbagai kebutuhan" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.title} className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-orange-950/5 backdrop-blur">
                <h3 className="text-2xl font-black text-orange-950">{product.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.desc}</p>
                <p className="mt-6 font-black text-orange-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefit" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-orange-950 p-8 text-white shadow-2xl shadow-orange-950/20 sm:p-12">
          <SectionTitle eyebrow="Benefit" title="Kenapa pilih Rasa Lokal?" light />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <span className="mr-2 text-orange-300">✓</span>
                <span className="font-bold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Portofolio / Testimoni" title="Dipercaya pelanggan untuk berbagai acara" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-orange-950/5">
                <p className="leading-7 text-slate-700">“{item.text}”</p>
                <div className="mt-6">
                  <p className="font-black text-orange-950">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="harga" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Harga" title="Paket fleksibel sesuai kebutuhanmu" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((item, index) => (
              <div
                key={item.name}
                className={`rounded-[2rem] border p-8 shadow-xl ${
                  index === 1
                    ? "border-orange-300 bg-orange-600 text-white shadow-orange-600/20"
                    : "border-white/70 bg-white/80 text-orange-950 shadow-orange-950/5"
                }`}
              >
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className={`mt-2 leading-7 ${index === 1 ? "text-orange-50" : "text-slate-700"}`}>{item.desc}</p>
                <p className="mt-6 text-4xl font-black">{item.price}</p>
                <ul className="mt-6 space-y-3">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex gap-2 font-semibold">
                      <span>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-order" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Cara Order" title="Pesan mudah dalam 4 langkah" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[2rem] bg-white/80 p-6 shadow-lg shadow-orange-950/5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 font-black text-orange-700">
                  {index + 1}
                </div>
                <p className="mt-5 font-bold leading-7 text-orange-950">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan" center />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-orange-950/5">
                <summary className="cursor-pointer list-none font-black text-orange-950">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-7 text-slate-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontak" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white/85 p-8 shadow-2xl shadow-orange-950/10 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-orange-600">Kontak</p>
              <h2 className="mt-3 text-4xl font-black text-orange-950 sm:text-5xl">Siap bantu kebutuhan acaramu.</h2>
              <p className="mt-5 leading-8 text-slate-700">
                Hubungi admin untuk konsultasi paket, jumlah pesanan, dan jadwal pengiriman.
              </p>
              <div className="mt-8 space-y-3 font-semibold text-slate-700">
                <p>📍 Bandung, Indonesia</p>
                <p>📞 0812-3456-7890</p>
                <p>✉️ halo@rasalokal.id</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-orange-50 p-6">
              <h3 className="text-2xl font-black text-orange-950">Order sekarang</h3>
              <p className="mt-3 leading-7 text-slate-700">Klik tombol di bawah untuk langsung chat admin via WhatsApp.</p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Rasa%20Lokal,%20saya%20mau%20order"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-orange-600 px-7 py-4 font-black text-white shadow-xl shadow-orange-600/25 transition hover:bg-orange-700"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className={`font-black uppercase tracking-[0.25em] ${light ? "text-orange-300" : "text-orange-600"}`}>{eyebrow}</p>
      <h2 className={`mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl ${light ? "text-white" : "text-orange-950"} ${center ? "mx-auto" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
