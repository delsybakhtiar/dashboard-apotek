export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Demo • Mock Data
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
          Dashboard Apotek
        </h1>
        <p className="mt-2 text-gray-600">
          Pantau penjualan, stok kritis, dan batch mendekati kadaluarsa dalam satu
          tampilan yang rapi. Saat ini masih menggunakan data dummy (MOCK).
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black transition"
          >
            Masuk Dashboard
          </a>
          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-2xl border border-black/10 px-5 py-3 font-medium text-gray-900 hover:bg-gray-50 transition"
          >
            Login (Mock)
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-2xl border border-black/10 bg-gray-50 p-4">
            <div className="text-xs text-gray-500">Fokus</div>
            <div className="mt-1 font-semibold text-gray-900">Stok & Kadaluarsa</div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-gray-50 p-4">
            <div className="text-xs text-gray-500">Siap Production</div>
            <div className="mt-1 font-semibold text-gray-900">Switch Mock → API</div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-gray-50 p-4">
            <div className="text-xs text-gray-500">UI Modern</div>
            <div className="mt-1 font-semibold text-gray-900">Layout SaaS</div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Tip: buka <span className="font-medium">/dashboard</span> untuk melihat
          ringkasan, atau <span className="font-medium">/login</span> untuk mock login.
        </div>
      </div>
    </main>
  );
}
