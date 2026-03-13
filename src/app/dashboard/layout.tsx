"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Beranda", href: "/dashboard" },
  { label: "Penjualan", href: "/dashboard/sales" },
  { label: "Produk & Stok", href: "/dashboard/products" },
  { label: "Pembelian", href: "/dashboard/purchases" },
  { label: "Supplier", href: "/dashboard/suppliers" },
  { label: "Kadaluarsa", href: "/dashboard/expiry" },
  { label: "Laporan", href: "/dashboard/reports" },
  { label: "Pengaturan", href: "/dashboard/settings" },
];

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M15 17H9m10-2V11a7 7 0 1 0-14 0v4l-1 2h16l-1-2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 19a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen md:grid md:grid-cols-[280px_1fr] gap-6 p-4 md:p-6">
      <aside className="shell-card rounded-[30px] p-5 md:p-6 md:sticky md:top-6 md:h-[calc(100vh-3rem)] flex flex-col">
        <div>
          <div className="text-2xl font-semibold tracking-tight text-white">
            Dashboard Apotek
          </div>
          <div className="mt-1 text-soft text-sm">Manual input mode</div>
        </div>

        <div className="mt-5 shell-soft rounded-[22px] p-4">
          <div className="text-xs uppercase tracking-[0.16em] text-soft">Status</div>
          <div className="mt-2 flex items-center gap-2 text-sm text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Aktif
          </div>
        </div>

        <nav className="mt-6 space-y-2 overflow-y-auto">
          {nav.map((item) => {
            const active =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname?.startsWith(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "block rounded-[18px] px-4 py-3 text-sm font-medium text-emerald-100 border border-emerald-400/25 bg-emerald-500/12"
                    : "block rounded-[18px] px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition"
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto pt-4">
          <div className="shell-soft rounded-[24px] p-4">
            <div className="text-sm font-medium text-white">Tips</div>
            <p className="mt-2 text-sm text-soft">
              Isi produk dan transaksi terlebih dulu agar ringkasan di beranda terhitung otomatis.
            </p>
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="shell-card rounded-[28px] px-5 py-4 md:px-6 md:py-5 flex items-center gap-4">
          <div>
            <div className="text-sm font-semibold text-white">Operasional</div>
            <div className="text-xs text-soft mt-1">Apotek • Hari ini</div>
          </div>

          <div className="flex-1" />

          <div className="hidden md:block w-full max-w-md">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45">
                <SearchIcon />
              </div>
              <input className="input-dark pl-9" placeholder="Cari produk / transaksi..." />
            </div>
          </div>

          <button className="h-11 w-11 rounded-[18px] border border-white/10 bg-white/5 text-white/80 hover:bg-white/8 inline-flex items-center justify-center">
            <BellIcon />
          </button>

          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-[18px] border border-emerald-400/25 bg-emerald-500/12 text-emerald-100 inline-flex items-center justify-center font-semibold">
              O
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white">Owner</div>
              <div className="text-xs text-soft mt-1">Akses penuh</div>
            </div>
          </div>
        </header>

        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
