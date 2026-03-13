export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section className="shell-card w-full max-w-md rounded-[28px] p-6 md:p-8">
        <div className="badge-green">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Manual input mode
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white">
          Login
        </h1>
        <p className="mt-2 text-soft">
          Sementara masuk langsung ke dashboard. Auth asli bisa ditambahkan nanti.
        </p>

        <div className="mt-8 space-y-3">
          <a href="/dashboard" className="btn-primary w-full">
            Masuk Dashboard
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href="/dashboard" className="btn-secondary w-full">
              Apoteker
            </a>
            <a href="/dashboard" className="btn-secondary w-full">
              Kasir
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
