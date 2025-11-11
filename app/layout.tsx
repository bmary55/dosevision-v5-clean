import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoseVision",
  description: "Dose ordering optimization and regulatory compliance",
};

function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="DoseVision" className="h-8 w-8"/>
          <div className="text-xl font-semibold tracking-tight text-[var(--primary)]">DoseVision</div>
        </div>
        <nav className="text-sm text-slate-700 flex gap-8">
          <a className="hover:text-slate-900" href="/">Home</a>
          <a className="hover:text-slate-900" href="/optimize">Dose Optimization</a>
          <a className="hover:text-slate-900" href="/regulatory">Regulatory</a>
          <a className="hover:text-slate-900" href="/schedule">Schedule</a>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="container py-10">{children}</main>
        <footer className="container py-12 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DoseVision.</p>
        </footer>
      </body>
    </html>
  );
}
