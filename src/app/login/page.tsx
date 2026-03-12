export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-2xl font-semibold tracking-tight text-gray-900">
          Login
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Mock login dulu (nanti bisa diganti auth asli).
        </p>

        <div className="mt-6 space-y-3">
          <a
            className="block w-full rounded-2xl bg-gray-900 text-white py-3 text-center font-medium hover:bg-black transition"
            href="/dashboard"
          >
            Masuk sebagai Owner (Mock)
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              className="rounded-2xl border border-black/10 py-3 text-center text-sm font-medium hover:bg-gray-50 transition"
              href="/dashboard"
            >
              Apoteker
            </a>
            <a
              className="rounded-2xl border border-black/10 py-3 text-center text-sm font-medium hover:bg-gray-50 transition"
              href="/dashboard"
            >
              Kasir
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          Production nanti: ganti ke auth asli + role guard.
        </div>
      </div>
    </main>
  );
}
