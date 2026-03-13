"use client";

import { useEffect, useMemo, useState } from "react";
import { getProducts, getSales, Product, Sale } from "@/lib/store";

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

function isToday(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  return d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();
}

function daysFromNow(dateStr: string) {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function StatCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="shell-card rounded-[26px] p-5">
      <div className="text-sm text-soft">{title}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-sm text-soft">{hint}</div>
    </div>
  );
}

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const refresh = () => {
      setProducts(getProducts());
      setSales(getSales());
    };
    refresh();
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  const summary = useMemo(() => {
    const todaySales = sales.filter((s) => isToday(s.tanggalISO));
    const omzetHariIni = todaySales.reduce((a, b) => a + Number(b.total || 0), 0);
    const transaksiHariIni = todaySales.length;

    const stokKritis = products.filter((p) => {
      const stok = Number(p.stok ?? 0);
      const min = Number(p.stokMinimum ?? 0);
      return min > 0 && stok <= min;
    }).length;

    const expiryDekat = products.filter((p) => {
      if (!p.expiryDate) return false;
      const d = daysFromNow(p.expiryDate);
      return d >= 0 && d <= 30;
    }).length;

    return { omzetHariIni, transaksiHariIni, stokKritis, expiryDekat };
  }, [products, sales]);

  const latestSales = sales.slice(0, 5);
  const lowStock = products
    .filter((p) => Number(p.stok ?? 0) <= Number(p.stokMinimum ?? 0) && Number(p.stokMinimum ?? 0) > 0)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Beranda
          </h1>
          <p className="mt-2 text-soft">
            Ringkasan otomatis dari data manual yang sudah kamu input.
          </p>
        </div>
        <div className="badge-green">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Manual mode
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Omzet Hari Ini" value={formatRupiah(summary.omzetHariIni)} hint="Dihitung dari transaksi hari ini" />
        <StatCard title="Transaksi Hari Ini" value={String(summary.transaksiHariIni)} hint="Jumlah transaksi yang masuk hari ini" />
        <StatCard title="Stok Kritis" value={String(summary.stokKritis)} hint="Produk dengan stok <= stok minimum" />
        <StatCard title="Kadaluarsa < 30 hari" value={String(summary.expiryDekat)} hint="Produk dengan expiry terdekat" />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="shell-card rounded-[28px] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold text-white">Transaksi Terbaru</div>
              <div className="mt-1 text-sm text-soft">Riwayat penjualan terbaru</div>
            </div>
            <a href="/dashboard/sales" className="text-sm text-emerald-200 hover:text-emerald-100">
              Lihat semua
            </a>
          </div>

          {latestSales.length === 0 ? (
            <div className="mt-5 shell-soft rounded-[22px] p-5 text-soft">
              Belum ada transaksi. Tambahkan dulu di menu <span className="text-white font-medium">Penjualan</span>.
            </div>
          ) : (
            <div className="mt-5 overflow-auto">
              <table className="table-dark">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Total</th>
                    <th>Metode</th>
                  </tr>
                </thead>
                <tbody>
                  {latestSales.map((item) => (
                    <tr key={item.id}>
                      <td>{new Date(item.tanggalISO).toLocaleString("id-ID")}</td>
                      <td className="font-medium text-white">{formatRupiah(Number(item.total || 0))}</td>
                      <td>{item.metodeBayar || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="shell-card rounded-[28px] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold text-white">Stok Kritis</div>
              <div className="mt-1 text-sm text-soft">Butuh perhatian/restock</div>
            </div>
            <a href="/dashboard/products" className="text-sm text-emerald-200 hover:text-emerald-100">
              Kelola
            </a>
          </div>

          {lowStock.length === 0 ? (
            <div className="mt-5 shell-soft rounded-[22px] p-5 text-soft">
              Belum ada stok kritis. Isi produk dan stok dulu di menu <span className="text-white font-medium">Produk &amp; Stok</span>.
            </div>
          ) : (
            <ul className="mt-5 space-y-3">
              {lowStock.map((item) => (
                <li key={item.id} className="shell-soft rounded-[20px] px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium text-white">{item.nama}</div>
                    <div className="text-xs text-soft mt-1">Minimum {Number(item.stokMinimum ?? 0)}</div>
                  </div>
                  <div className="badge-green">Sisa {Number(item.stok ?? 0)}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
