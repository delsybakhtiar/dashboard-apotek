export default function Page() {
  const title =
    "expiry" === "purchases" ? "Pembelian" :
    "expiry" === "suppliers" ? "Supplier" :
    "expiry" === "expiry" ? "Kadaluarsa" :
    "expiry" === "reports" ? "Laporan" :
    "Pengaturan";

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-1 text-sm text-gray-500">
          Halaman ini sudah aktif. Isi fitur input manual akan ditambahkan berikutnya.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-sm text-gray-700">
          Belum ada data di halaman ini. (Tidak ada demo)
        </div>
      </div>
    </div>
  );
}
