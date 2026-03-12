import type { ReactNode } from "react";

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

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "menu" | "bell" | "search";
  className?: string;
}) {
  // Inline SVG supaya tidak perlu install library icon
  if (name === "menu")
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  if (name === "bell")
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M15 17H9m10-2V11a7 7 0 10-14 0v4l-1 2h16l-1-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 19a2.5 2.5 0 005 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  // search
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-72 flex-col border-r border-black/10 bg-white">
      <div className="p-6">
        <div className="text-lg font-semibold tracking-tight">Dashboard Apotek</div>
        <div className="mt-1 text-xs text-gray-500">Mode: Mock Data</div>
      </div>

      <nav className="px-3 pb-3 space-y-1 text-sm">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-black transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className="rounded-2xl border border-black/10 p-4 bg-gradient-to-b from-white to-gray-50">
          <div className="text-sm font-medium">Tips</div>
          <div className="mt-1 text-xs text-gray-500">
            Pantau stok kritis & batch mendekati kadaluarsa tiap hari.
          </div>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3 p-4">
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-gray-50">
          <Icon name="menu" />
        </button>

        <div className="hidden md:block">
          <div className="text-sm font-semibold leading-none">Ringkasan Operasional</div>
          <div className="mt-1 text-xs text-gray-500">Apotek • Hari ini</div>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex w-[420px] items-center">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon name="search" className="h-4 w-4" />
            </span>
            <input
              className="w-full rounded-2xl border border-black/10 bg-white px-9 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Cari produk / transaksi..."
            />
          </div>
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:bg-gray-50">
          <Icon name="bell" />
        </button>

        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
            O
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-none">Owner</div>
            <div className="mt-1 text-xs text-gray-500">Akses penuh</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[18rem_1fr] bg-gray-50">
      <Sidebar />
      <div className="flex min-w-0 flex-col">
        <Topbar />
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
