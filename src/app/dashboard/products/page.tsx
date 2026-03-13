"use client";

import { FormEvent, useEffect, useState } from "react";
import { addProduct, deleteProduct, getProducts, Product } from "@/lib/store";

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [hargaJual, setHargaJual] = useState<string>("");
  const [stok, setStok] = useState<string>("");
  const [stokMinimum, setStokMinimum] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");

  useEffect(() => {
    setItems(getProducts());
  }, []);

  function refresh() {
    setItems(getProducts());
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nama.trim()) return;

    addProduct({
      nama: nama.trim(),
      kategori: kategori.trim() || undefined,
      hargaJual: hargaJual ? Number(hargaJual) : undefined,
      stok: stok ? Number(stok) : undefined,
      stokMinimum: stokMinimum ? Number(stokMinimum) : undefined,
      expiryDate: expiryDate || undefined,
    });

    setNama("");
    setKategori("");
    setHargaJual("");
    setStok("");
    setStokMinimum("");
    setExpiryDate("");
    refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Produk & Stok</h1>
        <p className="mt-1 text-sm text-gray-500">Input manual dulu. Data tersimpan di browser (localStorage).</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <label className="text-xs text-gray-600">Nama Produk *</label>
            <input className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={nama} onChange={(e)=>setNama(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-600">Kategori</label>
            <input className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={kategori} onChange={(e)=>setKategori(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-600">Harga Jual</label>
            <input type="number" className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={hargaJual} onChange={(e)=>setHargaJual(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-600">Stok</label>
            <input type="number" className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={stok} onChange={(e)=>setStok(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-600">Stok Minimum</label>
            <input type="number" className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={stokMinimum} onChange={(e)=>setStokMinimum(e.target.value)} />
          </div>
          <div>
            <label className="text-xs text-gray-600">Kadaluarsa (opsional)</label>
            <input type="date" className="mt-1 w-full rounded-2xl border border-black/10 px-3 py-2" value={expiryDate} onChange={(e)=>setExpiryDate(e.target.value)} />
          </div>
        </div>

        <button className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black transition">
          Tambah Produk
        </button>
      </form>

      <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-base font-semibold text-gray-900">Daftar Produk</div>
          <div className="text-xs text-gray-500">{items.length} item</div>
        </div>

        {items.length === 0 ? (
          <div className="mt-4 rounded-3xl border border-black/10 bg-gray-50 p-6 text-sm text-gray-600">
            Belum ada produk. Tambahkan dari form di atas.
          </div>
        ) : (
          <div className="mt-4 overflow-auto">
            <table className="min-w-[860px] w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2">Nama</th>
                  <th className="py-2">Kategori</th>
                  <th className="py-2">Harga</th>
                  <th className="py-2">Stok</th>
                  <th className="py-2">Min</th>
                  <th className="py-2">Expiry</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((p) => (
                  <tr key={p.id} className="border-t border-black/5">
                    <td className="py-3 font-medium text-gray-900">{p.nama}</td>
                    <td className="py-3 text-gray-700">{p.kategori || "-"}</td>
                    <td className="py-3 text-gray-700">{p.hargaJual ?? "-"}</td>
                    <td className="py-3 text-gray-700">{p.stok ?? "-"}</td>
                    <td className="py-3 text-gray-700">{p.stokMinimum ?? "-"}</td>
                    <td className="py-3 text-gray-700">{p.expiryDate ?? "-"}</td>
                    <td className="py-3 text-right">
                      <button
                        className="rounded-xl border border-black/10 px-3 py-1.5 hover:bg-gray-50"
                        onClick={() => {
                          deleteProduct(p.id);
                          refresh();
                        }}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
