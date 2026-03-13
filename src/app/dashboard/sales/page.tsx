"use client";

import { FormEvent, useEffect, useState } from "react";
import { addSale, deleteSale, getSales, Sale } from "@/lib/store";

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);
}

export default function SalesPage() {
  const [items, setItems] = useState<Sale[]>([]);
  const [total, setTotal] = useState<string>("");
  const [metodeBayar, setMetodeBayar] = useState("Tunai");
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    setItems(getSales());
  }, []);

  function refresh() {
    setItems(getSales());
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const t = Number(total);
    if (!Number.isFinite(t) || t <= 0) return;

    addSale({
      tanggalISO: new Date().toISOString(),
      total: t,
      metodeBayar,
      catatan: catatan.trim() || undefined,
    });

    setTotal("");
    setCatatan("");
    refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Penjualan</h1>
        <p className="mt-1 text-sm text-gray-500">Input manual transaksi dulu. Data tersimpan di browser (localStorage).</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <label className="text-xs text-gray-600">Total (Rp) *</label>
            <input
              type="number"
              className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="contoh: 125000"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600">Metode Bayar</label>
            <select
              className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2 bg-white"
              value={metodeBayar}
              onChange={(e) => setMetodeBayar(e.target.value)}
            >
              <option>Tunai</option>
              <option>QRIS</option>
              <option>Debit</option>
              <option>Transfer</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-600">Catatan</label>
            <input
              className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              placeholder="opsional"
            />
          </div>
        </div>

        <button className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black transition">
          Tambah Transaksi
        </button>
      </form>

      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold text-gray-900">Riwayat Transaksi</div>
          <div className="text-xs text-gray-500">{items.length} transaksi</div>
        </div>

        {items.length === 0 ? (
          <div className="mt-4 rounded-3xl border border-black/10 bg-gray-50 p-6 text-sm text-gray-600">
            Belum ada transaksi.
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {items.map((t) => (
              <li key={t.id} className="flex items-center justify-between rounded-2xl border border-black/10 p-4">
                <div>
                  <div className="text-sm font-semibold text-gray-900">{formatRupiah(Number(t.total) || 0)}</div>
                  <div className="text-xs text-gray-500">{new Date(t.tanggalISO).toLocaleString("id-ID")}</div>
                  {t.catatan ? <div className="text-xs text-gray-600 mt-1">{t.catatan}</div> : null}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium rounded-xl bg-gray-100 px-2.5 py-1 text-gray-700">
                    {t.metodeBayar || "-"}
                  </span>
                  <button
                    className="rounded-xl border border-black/10 px-3 py-1.5 hover:bg-gray-50"
                    onClick={() => {
                      deleteSale(t.id);
                      refresh();
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
