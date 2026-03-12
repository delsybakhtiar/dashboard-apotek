function Card({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
        {value}
      </div>
      {hint ? <div className="mt-1 text-xs text-gray-500">{hint}</div> : null}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="text-sm text-gray-800">{left}</span>
      <span className="text-xs font-medium rounded-xl bg-gray-100 px-2.5 py-1 text-gray-700">
        {right}
      </span>
    </li>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Beranda
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Ringkasan operasional apotek (data mock dulu).
          </p>
        </div>
        <Badge>MOCK</Badge>
      </div>

      <section className="grid gap-4 md:grid-cols-5">
        <Card title="Omzet Hari Ini" value="Rp 1.250.000" hint="+8% vs kemarin" />
        <Card title="Transaksi" value="23" hint="Rata-rata 2 menit/transaksi" />
        <Card title="Laba Kotor (estimasi)" value="Rp 320.000" hint="Margin 25,6%" />
        <Card title="Stok Kritis" value="7 produk" hint="Butuh restock" />
        <Card title="Kadaluarsa < 30 hari" value="5 batch" hint="Perlu tindakan" />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm md:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-gray-900">Penjualan 30 Hari</div>
            <Badge>Placeholder</Badge>
          </div>

          <div className="mt-4 h-72 rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-black/10 flex items-center justify-center text-sm text-gray-500">
            Grafik akan dipasang (Recharts)
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-black/10 p-3">
              <div className="text-xs text-gray-500">Best day</div>
              <div className="mt-1 font-semibold">Jumat</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-3">
              <div className="text-xs text-gray-500">Metode bayar</div>
              <div className="mt-1 font-semibold">QRIS</div>
            </div>
            <div className="rounded-2xl border border-black/10 p-3">
              <div className="text-xs text-gray-500">Produk terlaris</div>
              <div className="mt-1 font-semibold">Paracetamol</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-gray-900">Stok Kritis</div>
            <Badge>Butuh restock</Badge>
          </div>
          <ul className="mt-4 space-y-3">
            <Row left="Paracetamol 500mg" right="sisa 8" />
            <Row left="Amoxicillin 500mg" right="sisa 5" />
            <Row left="Vitamin C 1000mg" right="sisa 9" />
            <Row left="Antasida DOEN" right="sisa 6" />
            <Row left="Cetirizine 10mg" right="sisa 7" />
          </ul>

          <div className="mt-5 rounded-2xl border border-black/10 bg-gray-50 p-3">
            <div className="text-xs text-gray-500">Saran</div>
            <div className="mt-1 text-sm text-gray-800">
              Buat PO untuk produk dengan stok di bawah minimum.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
