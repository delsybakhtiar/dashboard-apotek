export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-10">
      <section className="shell-card w-full max-w-6xl rounded-[32px] p-8 md:p-12">
        <div className="badge-green">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Dashboard Apotek
        </div>

        <div className="mt-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Pantau operasional apotek dengan tampilan modern dan fokus.
          </h1>
          <p className="mt-4 text-base md:text-lg text-soft leading-8">
            Input produk dan transaksi secara manual terlebih dahulu, lalu dashboard akan
            menghitung ringkasan operasional secara otomatis.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/dashboard" className="btn-primary">
            Masuk Dashboard
          </a>
          <a href="/login" className="btn-secondary">
            Login
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="shell-soft rounded-[24px] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-soft">Langkah 1</div>
            <div className="mt-2 text-xl font-semibold text-white">Input Produk</div>
            <p className="mt-2 text-sm text-soft">Simpan stok, harga, dan tanggal kadaluarsa.</p>
          </div>
          <div className="shell-soft rounded-[24px] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-soft">Langkah 2</div>
            <div className="mt-2 text-xl font-semibold text-white">Input Penjualan</div>
            <p className="mt-2 text-sm text-soft">Catat transaksi dan metode pembayaran.</p>
          </div>
          <div className="shell-soft rounded-[24px] p-5">
            <div className="text-xs uppercase tracking-[0.18em] text-soft">Hasil</div>
            <div className="mt-2 text-xl font-semibold text-white">Ringkasan Otomatis</div>
            <p className="mt-2 text-sm text-soft">Omzet, stok kritis, dan expiry dekat terhitung otomatis.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
